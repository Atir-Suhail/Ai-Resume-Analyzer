package com.atir.airesumeanalyzer.service;

import com.atir.airesumeanalyzer.dto.AIAnalysisResponseDTO;

public interface GeminiService {

    AIAnalysisResponseDTO analyzeResume(String resumeText);

}