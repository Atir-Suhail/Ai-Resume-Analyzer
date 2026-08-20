package com.atir.airesumeanalyzer.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.atir.airesumeanalyzer.dto.AIAnalysisResponseDTO;
import com.atir.airesumeanalyzer.dto.ApiResponse;
import com.atir.airesumeanalyzer.dto.ResumeResponseDTO;
import com.atir.airesumeanalyzer.service.ResumeService;
import com.atir.airesumeanalyzer.entity.Resume;
import com.atir.airesumeanalyzer.entity.ResumeAnalysis;
import com.atir.airesumeanalyzer.service.AIResumeAnalysisService;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
    public AIAnalysisResponseDTO   analyzeResume(
            @PathVariable Long resumeId) {

        
         return aiResumeAnalysisService.analyzeResume(resumeId);
    }
    @GetMapping("/{resumeId}/analysis")
    public AIAnalysisResponseDTO getAnalysis(
            @PathVariable Long resumeId) {

        return aiResumeAnalysisService.getAnalysisByResumeId(resumeId);
    }
    @GetMapping("/all")
    public List<ResumeResponseDTO> getAllResumes() {

        return resumeService.getAllResumes();
    }
    @GetMapping("/{resumeId}")
    public Resume getResumeById(
            @PathVariable Long resumeId) {

        return resumeService.getResumeById(resumeId);
    }
    @DeleteMapping("/{resumeId}")
    public ApiResponse deleteResume(
            @PathVariable Long resumeId) {

        resumeService.deleteResume(resumeId);

        return new ApiResponse(
                true,
                "Resume deleted successfully"
        );
    }
    @GetMapping("/user/{userId}")
    public List<ResumeResponseDTO> getUserResumes(
            @PathVariable Long userId) {

        return resumeService.getResumesByUserId(userId);
    }
    
}