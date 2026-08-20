package com.atir.airesumeanalyzer.dto;

public class GuestAnalysisRequestDTO {

    private String guestId;
    private Long resumeId;
	public String getGuestId() {
		return guestId;
	}
	public void setGuestId(String guestId) {
		this.guestId = guestId;
	}
	public Long getResumeId() {
		return resumeId;
	}
	public void setResumeId(Long resumeId) {
		this.resumeId = resumeId;
	}

   
}
