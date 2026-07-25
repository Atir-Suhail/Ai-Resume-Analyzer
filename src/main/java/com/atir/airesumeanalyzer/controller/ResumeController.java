package com.atir.airesumeanalyzer.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.atir.airesumeanalyzer.dto.ApiResponse;
import com.atir.airesumeanalyzer.service.ResumeService;
import com.atir.airesumeanalyzer.entity.ResumeAnalysis;
import com.atir.airesumeanalyzer.service.AIResumeAnalysisService;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/resume")
public class ResumeController {

    private final ResumeService resumeService;
    private final AIResumeAnalysisService aiResumeAnalysisService;
    public ResumeController(
            ResumeService resumeService,
            AIResumeAnalysisService aiResumeAnalysisService) {

        this.resumeService = resumeService;
        this.aiResumeAnalysisService = aiResumeAnalysisService;
    }
    
    @PostMapping("/upload")
    public ApiResponse uploadResume(
            @RequestParam("file") MultipartFile file,
            @RequestParam Long userId) {

        return resumeService.uploadResume(file, userId);
    }
    
    @PostMapping("/{resumeId}/analyze")
    public ResumeAnalysis analyzeResume(
            @PathVariable Long resumeId) {

        return aiResumeAnalysisService.analyzeResume(resumeId);
    }
}