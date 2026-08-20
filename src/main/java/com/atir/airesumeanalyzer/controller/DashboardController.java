package com.atir.airesumeanalyzer.controller;

import org.springframework.web.bind.annotation.*;

import com.atir.airesumeanalyzer.dto.DashboardResponseDTO;
import com.atir.airesumeanalyzer.service.DashboardService;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(
            DashboardService dashboardService) {

        this.dashboardService = dashboardService;
    }

    @GetMapping("/{userId}")
    public DashboardResponseDTO getDashboard(
            @PathVariable Long userId) {

        return dashboardService.getDashboard(userId);
    }
}