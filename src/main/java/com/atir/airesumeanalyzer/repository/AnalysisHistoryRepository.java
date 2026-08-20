package com.atir.airesumeanalyzer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atir.airesumeanalyzer.entity.AnalysisHistory;

public interface AnalysisHistoryRepository
        extends JpaRepository<AnalysisHistory, Long> {

    long countByUserId(Long userId);
}