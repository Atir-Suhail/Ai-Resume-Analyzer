package com.atir.airesumeanalyzer.dto;

public class DashboardResponseDTO {

    private Long totalResumes;
    private Long totalAnalysis;
    private Integer remainingFreeAnalysis;

    public DashboardResponseDTO() {
    }

    public Long getTotalResumes() {
        return totalResumes;
    }

    public void setTotalResumes(Long totalResumes) {
        this.totalResumes = totalResumes;
    }

    public Long getTotalAnalysis() {
        return totalAnalysis;
    }

    public void setTotalAnalysis(Long totalAnalysis) {
        this.totalAnalysis = totalAnalysis;
    }

    public Integer getRemainingFreeAnalysis() {
        return remainingFreeAnalysis;
    }

    public void setRemainingFreeAnalysis(Integer remainingFreeAnalysis) {
        this.remainingFreeAnalysis = remainingFreeAnalysis;
    }
}