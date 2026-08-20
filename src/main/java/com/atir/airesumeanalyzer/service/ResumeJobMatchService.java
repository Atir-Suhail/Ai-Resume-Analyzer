package com.atir.airesumeanalyzer.service;

import com.atir.airesumeanalyzer.dto.MatchResultDTO;

public interface ResumeJobMatchService {

    MatchResultDTO matchResumeWithJob(
            Long resumeId,
            Long jobDescriptionId);
}