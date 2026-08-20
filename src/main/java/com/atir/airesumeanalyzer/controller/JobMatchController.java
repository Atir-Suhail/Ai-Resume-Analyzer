package com.atir.airesumeanalyzer.controller;

import org.springframework.web.bind.annotation.*;

import com.atir.airesumeanalyzer.dto.JobMatchResponseDTO;
import com.atir.airesumeanalyzer.service.JobMatchService;

@RestController
@RequestMapping("/api/job-match")
public class JobMatchController {

    private final JobMatchService jobMatchService;

    public JobMatchController(
            JobMatchService jobMatchService) {

        this.jobMatchService = jobMatchService;
    }

    @PostMapping("/{resumeId}/{jdId}")
    public JobMatchResponseDTO matchResume(
            @PathVariable Long resumeId,
            @PathVariable Long jdId) {

        return jobMatchService
                .matchResumeWithJD(
                        resumeId,
                        jdId);
    }
}