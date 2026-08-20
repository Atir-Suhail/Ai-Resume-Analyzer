package com.atir.airesumeanalyzer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atir.airesumeanalyzer.entity.JobDescription;

public interface JobDescriptionRepository
        extends JpaRepository<JobDescription, Long> {

}