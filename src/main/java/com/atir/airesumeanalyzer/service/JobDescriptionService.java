package com.atir.airesumeanalyzer.service;

import java.util.List;

import com.atir.airesumeanalyzer.dto.JobDescriptionRequestDTO;
import com.atir.airesumeanalyzer.entity.JobDescription;

public interface JobDescriptionService {

    JobDescription saveJobDescription(
            JobDescriptionRequestDTO dto);

    List<JobDescription> getAllJobDescriptions();

    JobDescription getJobDescriptionById(Long id);

    void deleteJobDescription(Long id);
}