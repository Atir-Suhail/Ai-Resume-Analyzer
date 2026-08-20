package com.atir.airesumeanalyzer.dto;

public class JobMatchResponseDTO {

    private Integer matchPercentage;
    private String missingSkills;
    private String atsFeedback;
    private String recommendations;

    public Integer getMatchPercentage() {
        return matchPercentage;
    }

    public void setMatchPercentage(Integer matchPercentage) {
        this.matchPercentage = matchPercentage;
    }

    public String getMissingSkills() {
        return missingSkills;
    }

    public void setMissingSkills(String missingSkills) {
        this.missingSkills = missingSkills;
    }

    public String getAtsFeedback() {
        return atsFeedback;
    }

    public void setAtsFeedback(String atsFeedback) {
        this.atsFeedback = atsFeedback;
    }

    public String getRecommendations() {
        return recommendations;
    }

    public void setRecommendations(String recommendations) {
        this.recommendations = recommendations;
    }
}