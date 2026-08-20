package com.atir.airesumeanalyzer.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="analysis_history")
	public class AnalysisHistory {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private Long userId;

	    private Long resumeId;

	    private Long jobDescriptionId;

	    private LocalDateTime analyzedAt;

		public Long getUserId() {
			return userId;
		}

		public void setUserId(Long userId) {
			this.userId = userId;
		}

		public Long getResumeId() {
			return resumeId;
		}

		public void setResumeId(Long resumeId) {
			this.resumeId = resumeId;
		}

		public Long getJobDescriptionId() {
			return jobDescriptionId;
		}

		public void setJobDescriptionId(Long jobDescriptionId) {
			this.jobDescriptionId = jobDescriptionId;
		}

		public LocalDateTime getAnalyzedAt() {
			return analyzedAt;
		}

		public void setAnalyzedAt(LocalDateTime analyzedAt) {
			this.analyzedAt = analyzedAt;
		}
	

}
