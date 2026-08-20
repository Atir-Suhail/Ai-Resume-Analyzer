package com.atir.airesumeanalyzer.service;

import com.atir.airesumeanalyzer.dto.DashboardResponseDTO;

public interface DashboardService {

    DashboardResponseDTO getDashboard(Long userId);
}