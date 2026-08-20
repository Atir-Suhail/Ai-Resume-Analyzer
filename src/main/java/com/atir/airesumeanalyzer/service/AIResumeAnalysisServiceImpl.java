package com.atir.airesumeanalyzer.service;
import com.atir.airesumeanalyzer.repository.UserRepository;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.atir.airesumeanalyzer.dto.AIAnalysisResponseDTO;
import com.atir.airesumeanalyzer.entity.AnalysisHistory;
import com.atir.airesumeanalyzer.entity.Resume;
import com.atir.airesumeanalyzer.entity.ResumeAnalysis;
import com.atir.airesumeanalyzer.entity.User;
import com.atir.airesumeanalyzer.repository.AnalysisHistoryRepository;
import com.atir.airesumeanalyzer.repository.ResumeAnalysisRepository;
import com.atir.airesumeanalyzer.repository.ResumeRepository;

@Service
public class AIResumeAnalysisServiceImpl implements AIResumeAnalysisService {

    private final ResumeRepository resumeRepository;
    private final ResumeAnalysisRepository resumeAnalysisRepository;
    private final GeminiService geminiService;
    private final UserRepository userRepository;
    private final AnalysisHistoryRepository historyRepository;
    public AIResumeAnalysisServiceImpl(
            ResumeRepository resumeRepository,
            ResumeAnalysisRepository resumeAnalysisRepository,
            GeminiService geminiService,
            UserRepository userRepository,
            AnalysisHistoryRepository historyRepository) {

        this.resumeRepository = resumeRepository;
        this.resumeAnalysisRepository = resumeAnalysisRepository;
        this.geminiService = geminiService;
        this.userRepository = userRepository;
        this.historyRepository = historyRepository;
    }
    @Override
    public AIAnalysisResponseDTO analyzeResume(Long resumeId) {

    	Resume resume = resumeRepository.findById(resumeId)
    	        .orElseThrow(() -> new RuntimeException("Resume not found"));

    	User user = resume.getUser();

    	// Pehle count check karo
    	if (user.getFreeAnalysisCount() <= 0) {
    	    throw new RuntimeException(
    	            "Free analysis limit exceeded");
    	}

    	String extractedText = resume.getExtractedText();

    	AIAnalysisResponseDTO aiResponse =
    	        geminiService.analyzeResume(extractedText);

    	// Analysis successful hone ke baad count kam karo
    	user.setFreeAnalysisCount(
    	        user.getFreeAnalysisCount() - 1);
    	System.out.println(
    	        "Before Save Count = "
    	        + user.getFreeAnalysisCount());
    	userRepository.save(user);
    	System.out.println(
    	        "After Save Count = "
    	        + user.getFreeAnalysisCount());

    	ResumeAnalysis analysis = new ResumeAnalysis();

    	analysis.setResume(resume);
    	analysis.setResumeScore(aiResponse.getResumeScore());
    	analysis.setSkills(aiResponse.getSkills());
    	analysis.setExperience(aiResponse.getExperience());
    	analysis.setEducation(aiResponse.getEducation());
    	analysis.setStrengths(aiResponse.getStrengths());
    	analysis.setWeaknesses(aiResponse.getWeaknesses());
    	analysis.setSuggestions(aiResponse.getSuggestions());
    	analysis.setAnalyzedAt(LocalDateTime.now());

    	resumeAnalysisRepository.save(analysis);
    	AnalysisHistory history =
    	        new AnalysisHistory();

    	history.setUserId(user.getId());
    	history.setResumeId(resume.getId());

    	history.setAnalyzedAt(
    	        LocalDateTime.now());

    	historyRepository.save(history);
    	return aiResponse;
    }
    
    @Override
    public AIAnalysisResponseDTO getAnalysisByResumeId(Long resumeId) {

        ResumeAnalysis analysis = resumeAnalysisRepository
                .findByResumeId(resumeId)
                .orElseThrow(() -> new RuntimeException("Analysis not found"));

        AIAnalysisResponseDTO dto = new AIAnalysisResponseDTO();

        dto.setResumeScore(analysis.getResumeScore());
        dto.setSkills(analysis.getSkills());
        dto.setExperience(analysis.getExperience());
        dto.setEducation(analysis.getEducation());
        dto.setStrengths(analysis.getStrengths());
        dto.setWeaknesses(analysis.getWeaknesses());
        dto.setSuggestions(analysis.getSuggestions());

        return dto;
    }
}