package com.atir.airesumeanalyzer.dto;

public class AnalysisResultDTO {

    private Integer resumeScore;
    private String skills;
    private String strengths;

    private Integer remainingFreeAnalyses;

	public Integer getResumeScore() {
		return resumeScore;
	}

	public void setResumeScore(Integer resumeScore) {
		this.resumeScore = resumeScore;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public String getStrengths() {
		return strengths;
	}

	public void setStrengths(String strengths) {
		this.strengths = strengths;
	}

	public Integer getRemainingFreeAnalyses() {
		return remainingFreeAnalyses;
	}

	public void setRemainingFreeAnalyses(Integer remainingFreeAnalyses) {
		this.remainingFreeAnalyses = remainingFreeAnalyses;
	}
}
