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
    private final OpenAIService openAIService;

    public AIResumeAnalysisServiceImpl(
            ResumeRepository resumeRepository,
            ResumeAnalysisRepository resumeAnalysisRepository,
            OpenAIService openAIService) {

        this.resumeRepository = resumeRepository;
        this.resumeAnalysisRepository = resumeAnalysisRepository;
        this.openAIService = openAIService;
    }

    @Override
    public ResumeAnalysis analyzeResume(Long resumeId) {

        // 1. Resume database se find karo
        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() ->
                        new RuntimeException("Resume not found"));

        // 2. Extracted text nikalo
        String extractedText = resume.getExtractedText();

        if (extractedText == null || extractedText.isBlank()) {
            throw new RuntimeException(
                    "Resume text is empty. Cannot analyze resume.");
        }

        // 3. Resume text OpenAI ko bhejo
        AIAnalysisResponseDTO aiResponse =
                openAIService.analyzeResume(extractedText);

        // 4. AI response ko ResumeAnalysis entity me set karo
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

        // 5. Analysis database me save karo
        return resumeAnalysisRepository.save(analysis);
    }
}