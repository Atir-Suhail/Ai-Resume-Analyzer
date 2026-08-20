package com.atir.airesumeanalyzer.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.atir.airesumeanalyzer.dto.JobDescriptionRequestDTO;
import com.atir.airesumeanalyzer.entity.JobDescription;
import com.atir.airesumeanalyzer.repository.JobDescriptionRepository;

@Service
public class JobDescriptionServiceImpl
        implements JobDescriptionService {

    private final JobDescriptionRepository repository;

    public JobDescriptionServiceImpl(
            JobDescriptionRepository repository) {

        this.repository = repository;
    }

    @Override
    public JobDescription saveJobDescription(
            JobDescriptionRequestDTO dto) {

        JobDescription jd =
                new JobDescription();

        jd.setCompanyName(dto.getCompanyName());
        jd.setJobTitle(dto.getJobTitle());
        jd.setJobDescriptionText(
                dto.getJobDescriptionText());

        jd.setCreatedAt(
                LocalDateTime.now());

        return repository.save(jd);
    }
    @Override
    public List<JobDescription> getAllJobDescriptions() {

        return repository.findAll();
    }

    @Override
    public JobDescription getJobDescriptionById(Long id) {

        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Job Description not found"));
    }

    @Override
    public void deleteJobDescription(Long id) {

        JobDescription jd =
                repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Job Description not found"));

        repository.delete(jd);
    }
}