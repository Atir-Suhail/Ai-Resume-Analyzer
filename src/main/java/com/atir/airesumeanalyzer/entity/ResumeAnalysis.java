package com.atir.airesumeanalyzer.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "resume_analysis")
public class ResumeAnalysis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Kis resume ka analysis hai
    @OneToOne
    @JoinColumn(name = "resume_id", nullable = false)
    private Resume resume;

    // AI generated score (0-100)
    private Integer resumeScore;

    // Resume me detected skills
    @Column(columnDefinition = "TEXT")
    private String skills;

    // Experience related analysis
    @Column(columnDefinition = "TEXT")
    private String experience;

    // Education related analysis
    @Column(columnDefinition = "TEXT")
    private String education;

    // Resume ki strengths
    @Column(columnDefinition = "TEXT")
    private String strengths;

    // Resume me problems / missing areas
    @Column(columnDefinition = "TEXT")
    private String weaknesses;

    // AI improvement suggestions
    @Column(columnDefinition = "TEXT")
    private String suggestions;

    private LocalDateTime analyzedAt;

    public ResumeAnalysis() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Resume getResume() {
        return resume;
    }

    public void setResume(Resume resume) {
        this.resume = resume;
    }

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

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getStrengths() {
        return strengths;
    }

    public void setStrengths(String strengths) {
        this.strengths = strengths;
    }

    public String getWeaknesses() {
        return weaknesses;
    }

    public void setWeaknesses(String weaknesses) {
        this.weaknesses = weaknesses;
    }

    public String getSuggestions() {
        return suggestions;
    }

    public void setSuggestions(String suggestions) {
        this.suggestions = suggestions;
    }

    public LocalDateTime getAnalyzedAt() {
        return analyzedAt;
    }

    public void setAnalyzedAt(LocalDateTime analyzedAt) {
        this.analyzedAt = analyzedAt;
    }
}