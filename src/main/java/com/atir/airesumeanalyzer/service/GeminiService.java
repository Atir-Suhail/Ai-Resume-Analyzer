package com.atir.airesumeanalyzer.service;

import com.atir.airesumeanalyzer.dto.AIAnalysisResponseDTO;
import com.atir.airesumeanalyzer.dto.JobMatchResponseDTO;

public interface GeminiService {

    AIAnalysisResponseDTO analyzeResume(String resumeText);
    JobMatchResponseDTO analyzeJobMatch(
            String resumeText,
            String jobDescriptionText);

}