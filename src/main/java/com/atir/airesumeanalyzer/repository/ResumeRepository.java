package com.atir.airesumeanalyzer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atir.airesumeanalyzer.entity.Resume;
import com.atir.airesumeanalyzer.entity.User;

public interface ResumeRepository extends JpaRepository<Resume, Long> {

    List<Resume> findByUser(User user);

}