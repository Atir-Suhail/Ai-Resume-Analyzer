package com.atir.airesumeanalyzer.service;

import org.springframework.web.multipart.MultipartFile;

import com.atir.airesumeanalyzer.dto.ApiResponse;

public interface ResumeService {

    ApiResponse uploadResume(MultipartFile file, Long userId);

}