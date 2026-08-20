package com.atir.airesumeanalyzer.service;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.atir.airesumeanalyzer.dto.ApiResponse;
import com.atir.airesumeanalyzer.dto.ResumeResponseDTO;
import com.atir.airesumeanalyzer.entity.Resume;
import com.atir.airesumeanalyzer.entity.User;
import com.atir.airesumeanalyzer.repository.ResumeRepository;
import com.atir.airesumeanalyzer.repository.UserRepository;

@Service
public class ResumeServiceImpl implements ResumeService {

    private final ResumeRepository resumeRepository;
    private final UserRepository userRepository;
    private final ResumeParserService resumeParserService;

    public ResumeServiceImpl(
            ResumeRepository resumeRepository,
            UserRepository userRepository,
            ResumeParserService resumeParserService) {

        this.resumeRepository = resumeRepository;
        this.userRepository = userRepository;
        this.resumeParserService = resumeParserService;
    }

    @Override
    public ApiResponse uploadResume(MultipartFile file, Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (file.isEmpty()) {
            return new ApiResponse(false,
                    "Please select a file to upload.");
        }

        String contentType = file.getContentType();

        if (!"application/pdf".equals(contentType)
                && !"application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        .equals(contentType)) {

            return new ApiResponse(
                    false,
                    "Only PDF and DOCX files are allowed.");
        }

        long maxSize = 5 * 1024 * 1024;

        if (file.getSize() > maxSize) {
            return new ApiResponse(
                    false,
                    "File size should not exceed 5 MB.");
        }

        String uploadDir = System.getProperty("user.dir")
                + File.separator
                + "uploads";

        File directory = new File(uploadDir);

        if (!directory.exists() && !directory.mkdirs()) {
            return new ApiResponse(
                    false,
                    "Unable to create upload directory.");
        }

        String uniqueFileName =
                UUID.randomUUID() + "_" + file.getOriginalFilename();

        String filePath =
                uploadDir + File.separator + uniqueFileName;

        try {
            file.transferTo(new File(filePath));
        } catch (IOException e) {
            e.printStackTrace();
            return new ApiResponse(
                    false,
                    "Failed to upload resume.");
        }

        String extractedText;

        try {

            extractedText = resumeParserService
                    .extractText(filePath, contentType);

        } catch (Exception e) {

            e.printStackTrace();

            return new ApiResponse(
                    false,
                    "Failed to extract text : "
                            + e.getMessage());
        }

        Resume resume = new Resume();

        resume.setFileName(file.getOriginalFilename());
        resume.setFileType(contentType);
        resume.setFilePath(filePath);
        resume.setExtractedText(extractedText);
        resume.setUploadedAt(LocalDateTime.now());
        resume.setStatus("UPLOADED");
        resume.setUser(user);

        resumeRepository.save(resume);

        return new ApiResponse(
                true,
                "Resume uploaded successfully.");
    }

    @Override
    public List<ResumeResponseDTO> getAllResumes() {

        return resumeRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .toList();
    }

    @Override
    public List<ResumeResponseDTO> getResumesByUserId(Long userId) {

        return resumeRepository.findByUserId(userId)
                .stream()
                .map(this::convertToDTO)
                .toList();
    }

    @Override
    public Resume getResumeById(Long resumeId) {

        return resumeRepository.findById(resumeId)
                .orElseThrow(() ->
                        new RuntimeException("Resume not found"));
    }

    @Override
    public void deleteResume(Long resumeId) {

        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() ->
                        new RuntimeException("Resume not found"));

        resumeRepository.delete(resume);
    }

    private ResumeResponseDTO convertToDTO(Resume resume) {

        ResumeResponseDTO dto = new ResumeResponseDTO();

        dto.setId(resume.getId());
        dto.setFileName(resume.getFileName());
        dto.setFileType(resume.getFileType());
        dto.setStatus(resume.getStatus());
        dto.setUploadedAt(resume.getUploadedAt());

        dto.setUserId(resume.getUser().getId());

        dto.setUserName(
                resume.getUser().getFirstName()
                        + " "
                        + resume.getUser().getLastName());

        return dto;
    }
}