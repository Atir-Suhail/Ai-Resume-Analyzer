package com.atir.airesumeanalyzer.service;

import com.atir.airesumeanalyzer.dto.AIAnalysisResponseDTO;


public interface AIResumeAnalysisService {

    AIAnalysisResponseDTO analyzeResume(Long resumeId);
    AIAnalysisResponseDTO getAnalysisByResumeId(Long resumeId);
}