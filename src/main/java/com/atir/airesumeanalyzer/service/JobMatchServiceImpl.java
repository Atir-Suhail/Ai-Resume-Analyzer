package com.atir.airesumeanalyzer.service;

import org.springframework.stereotype.Service;

import com.atir.airesumeanalyzer.dto.JobMatchResponseDTO;
import com.atir.airesumeanalyzer.entity.JobDescription;
import com.atir.airesumeanalyzer.entity.Resume;
import com.atir.airesumeanalyzer.repository.JobDescriptionRepository;
import com.atir.airesumeanalyzer.repository.ResumeRepository;

@Service
public class JobMatchServiceImpl
        implements JobMatchService {

    private final ResumeRepository resumeRepository;
    private final JobDescriptionRepository jobDescriptionRepository;
    private final GeminiService geminiService;

    public JobMatchServiceImpl(
            ResumeRepository resumeRepository,
            JobDescriptionRepository jobDescriptionRepository,
            GeminiService geminiService) {

        this.resumeRepository = resumeRepository;
        this.jobDescriptionRepository = jobDescriptionRepository;
        this.geminiService = geminiService;
    }

    @Override
    public JobMatchResponseDTO matchResumeWithJD(
            Long resumeId,
            Long jdId) {

        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Resume not found"));

        JobDescription jd =
                jobDescriptionRepository.findById(jdId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Job Description not found"));

        return geminiService.analyzeJobMatch(
                resume.getExtractedText(),
                jd.getJobDescriptionText());
    }
}