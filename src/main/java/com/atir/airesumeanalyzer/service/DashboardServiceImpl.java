package com.atir.airesumeanalyzer.service;

import org.springframework.stereotype.Service;

import com.atir.airesumeanalyzer.dto.DashboardResponseDTO;
import com.atir.airesumeanalyzer.entity.User;
import com.atir.airesumeanalyzer.repository.AnalysisHistoryRepository;
import com.atir.airesumeanalyzer.repository.ResumeAnalysisRepository;
import com.atir.airesumeanalyzer.repository.ResumeRepository;
import com.atir.airesumeanalyzer.repository.UserRepository;

@Service
public class DashboardServiceImpl
implements DashboardService {

    private final ResumeRepository resumeRepository;
    private final ResumeAnalysisRepository analysisRepository;
    private final UserRepository userRepository;
    private final AnalysisHistoryRepository historyRepository;
    public DashboardServiceImpl(
            ResumeRepository resumeRepository,
            ResumeAnalysisRepository analysisRepository,
            UserRepository userRepository,
            AnalysisHistoryRepository historyRepository) {

        this.resumeRepository = resumeRepository;
        this.analysisRepository = analysisRepository;
        this.userRepository = userRepository;
        this.historyRepository = historyRepository;
    }

    @Override
    public DashboardResponseDTO getDashboard(Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        DashboardResponseDTO dto =
                new DashboardResponseDTO();

        dto.setTotalResumes(
                resumeRepository.countByUserId(userId));

        dto.setTotalAnalysis(
                historyRepository.countByUserId(userId));

        dto.setRemainingFreeAnalysis(
                user.getFreeAnalysisCount());

        return dto;
    }
}