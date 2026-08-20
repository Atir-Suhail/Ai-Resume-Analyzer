package com.atir.airesumeanalyzer.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.atir.airesumeanalyzer.dto.JobDescriptionRequestDTO;
import com.atir.airesumeanalyzer.entity.JobDescription;
import com.atir.airesumeanalyzer.service.JobDescriptionService;

@RestController
@RequestMapping("/api/jd")
public class JobDescriptionController {

    private final JobDescriptionService service;

    public JobDescriptionController(
            JobDescriptionService service) {

        this.service = service;
    }

    @PostMapping
    public JobDescription saveJD(
            @RequestBody JobDescriptionRequestDTO dto) {

        return service.saveJobDescription(dto);
    }

    @GetMapping("/all")
    public List<JobDescription> getAllJD() {

        return service.getAllJobDescriptions();
    }

    @GetMapping("/{id}")
    public JobDescription getJDById(
            @PathVariable Long id) {

        return service.getJobDescriptionById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteJD(
            @PathVariable Long id) {

        service.deleteJobDescription(id);

        return "Job Description Deleted Successfully";
    }
}