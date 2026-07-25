package com.atir.airesumeanalyzer.service;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.atir.airesumeanalyzer.dto.ApiResponse;
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

        // 1. User find karo
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // 2. Empty file validation
        if (file.isEmpty()) {
            return new ApiResponse(false, "Please select a file to upload.");
        }

        // 3. File type validation
        String contentType = file.getContentType();

        if (!"application/pdf".equals(contentType)
                && !"application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        .equals(contentType)) {

            return new ApiResponse(
                    false,
                    "Only PDF and DOCX files are allowed.");
        }

        // 4. File size validation - Maximum 5 MB
        long maxSize = 5 * 1024 * 1024;

        if (file.getSize() > maxSize) {
            return new ApiResponse(
                    false,
                    "File size should not exceed 5 MB.");
        }

        // 5. Upload directory
        String uploadDir = System.getProperty("user.dir")
                + File.separator
                + "uploads";

        File directory = new File(uploadDir);

        if (!directory.exists() && !directory.mkdirs()) {
            return new ApiResponse(
                    false,
                    "Unable to create upload directory.");
        }

        // 6. Unique file name generate karo
        String uniqueFileName = UUID.randomUUID()
                + "_"
                + file.getOriginalFilename();

        String filePath = uploadDir
                + File.separator
                + uniqueFileName;

        // 7. File uploads folder me save karo
        try {

            file.transferTo(new File(filePath));

        } catch (IOException e) {

            e.printStackTrace();

            return new ApiResponse(
                    false,
                    "Failed to upload resume.");
        }

     // 8. Resume se text extract karo
        String extractedText;
        try {

        	 extractedText =
        	        resumeParserService.extractText(filePath, contentType);

            System.out.println(
                    "===== EXTRACTED RESUME TEXT =====");

            System.out.println(extractedText);

            System.out.println(
                    "=================================");

        } catch (Exception e) {

            e.printStackTrace();

            return new ApiResponse(
                    false,
                    "Failed to extract text: " + e.getMessage());
        }

        // 9. Resume metadata database me save karo
        Resume resume = new Resume();

        resume.setFileName(file.getOriginalFilename());
        resume.setFileType(contentType);
        resume.setFilePath(filePath);
        resume.setExtractedText(extractedText);
        resume.setUploadedAt(LocalDateTime.now());
        resume.setStatus("UPLOADED");
        resume.setUser(user);

        resumeRepository.save(resume);

        // 10. Success response
        return new ApiResponse(
                true,
                "Resume uploaded successfully.");
    }
}