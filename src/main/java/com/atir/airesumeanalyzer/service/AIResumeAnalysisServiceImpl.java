package com.atir.airesumeanalyzer.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.atir.airesumeanalyzer.dto.AIAnalysisResponseDTO;
import com.atir.airesumeanalyzer.entity.Resume;
import com.atir.airesumeanalyzer.entity.ResumeAnalysis;
import com.atir.airesumeanalyzer.repository.ResumeAnalysisRepository;
import com.atir.airesumeanalyzer.repository.ResumeRepository;

@Service
public class AIResumeAnalysisServiceImpl implements AIResumeAnalysisService {

    private final ResumeRepository resumeRepository;
    private final ResumeAnalysisRepository resumeAnalysisRepository;
    private final GeminiService geminiService;

    public AIResumeAnalysisServiceImpl(
            ResumeRepository resumeRepository,
            ResumeAnalysisRepository resumeAnalysisRepository,
            GeminiService geminiService) {

        this.resumeRepository = resumeRepository;
        this.resumeAnalysisRepository = resumeAnalysisRepository;
        this.geminiService = geminiService;
    }
    @Override
    public AIAnalysisResponseDTO analyzeResume(Long resumeId) {

        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new RuntimeException("Resume not found"));

        String extractedText = resume.getExtractedText();

        AIAnalysisResponseDTO aiResponse =
                geminiService.analyzeResume(extractedText);

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