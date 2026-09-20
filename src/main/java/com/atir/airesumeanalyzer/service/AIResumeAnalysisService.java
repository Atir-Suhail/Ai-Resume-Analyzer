package com.atir.airesumeanalyzer.service;

import com.atir.airesumeanalyzer.entity.ResumeAnalysis;

public interface AIResumeAnalysisService {

    ResumeAnalysis analyzeResume(Long resumeId);
}