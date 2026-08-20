package com.atir.airesumeanalyzer.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.atir.airesumeanalyzer.dto.ApiResponse;
import com.atir.airesumeanalyzer.dto.ResumeResponseDTO;
import com.atir.airesumeanalyzer.entity.Resume;

public interface ResumeService {

    ApiResponse uploadResume(MultipartFile file, Long userId);
    List<ResumeResponseDTO> getAllResumes();
    Resume getResumeById(Long resumeId);
    void deleteResume(Long resumeId);
    List<ResumeResponseDTO> getResumesByUserId(Long userId);
}