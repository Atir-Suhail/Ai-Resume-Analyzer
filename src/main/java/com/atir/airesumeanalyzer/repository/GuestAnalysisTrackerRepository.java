package com.atir.airesumeanalyzer.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atir.airesumeanalyzer.entity.GuestAnalysisTracker;

public interface GuestAnalysisTrackerRepository
extends JpaRepository <GuestAnalysisTracker, Long> {

Optional<GuestAnalysisTracker>
findByGuestId(String guestId);
}
