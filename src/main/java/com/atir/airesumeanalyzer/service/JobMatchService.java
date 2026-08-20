package com.atir.airesumeanalyzer.service;

import com.atir.airesumeanalyzer.dto.JobMatchResponseDTO;

public interface JobMatchService {

    JobMatchResponseDTO matchResumeWithJD(
            Long resumeId,
            Long jdId);
}