package com.atir.airesumeanalyzer.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import com.atir.airesumeanalyzer.dto.AIAnalysisResponseDTO;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;


@Service
public class GeminiServiceImpl implements GeminiService {

    private final RestClient restClient;
    private final ObjectMapper objectMapper;

    @Value("${gemini.api.key}")
    private String apiKey;

    @Value("${gemini.api.url}")
    private String apiUrl;

    public GeminiServiceImpl(RestClient restClient, ObjectMapper objectMapper) {
        this.restClient = restClient;
        this.objectMapper = objectMapper;
        System.out.println("Gemini Service Initialized");
       
    }

    @Override
    public AIAnalysisResponseDTO analyzeResume(String resumeText) {
    	
    	  System.out.println("===== STEP G1 =====");
    	    
    	    System.out.println("API URL = " + apiUrl);
        String prompt = """
                Analyze the following resume.

                Return ONLY valid JSON in this exact format:

                {
                  "resumeScore": 0,
                  "skills": "",
                  "experience": "",
                  "education": "",
                  "strengths": "",
                  "weaknesses": "",
                  "suggestions": ""
                }

                resumeScore must be between 0 and 100.

                Resume:
                """ + resumeText;

        String requestBody = """
                {
                  "contents": [
                    {
                      "parts": [
                        {
                          "text": %s
                        }
                      ]
                    }
                  ]
                }
                """.formatted(toJsonString(prompt));

        try {
        	
        	System.out.println("API URL = " + apiUrl);
        	

        	
            // Gemini API Call
            String rawResponse = restClient.post()
                    .uri(apiUrl + "?key=" + apiKey)
                    .header("Content-Type", "application/json")
                    .body(requestBody)
                    .retrieve()
                    .body(String.class);

System.out.println("===== RAW RESPONSE =====");
System.out.println(rawResponse);
System.out.println("========================");
            System.out.println("Step G3");
            JsonNode rootNode = objectMapper.readTree(rawResponse);

            String aiText = rootNode
                    .path("candidates")
                    .get(0)
                    .path("content")
                    .path("parts")
                    .get(0)
                    .path("text")
                    .asText();

            System.out.println("===== GEMINI ANALYSIS =====");
            System.out.println(aiText);
            System.out.println("===========================");

            return objectMapper.readValue(
                    aiText,
                    AIAnalysisResponseDTO.class
            );

        } catch (Exception e) {

            e.printStackTrace();
            System.out.println("Step G4");
            throw new RuntimeException(
                    "Failed to analyze resume using Gemini: "
                            + e.getMessage()
            );
        }
    }

    private String toJsonString(String value) {
    	System.out.println("Step G5");
        return "\"" + value
                .replace("\\", "\\\\")
                .replace("\"", "\\\"")
                .replace("\n", "\\n")
                .replace("\r", "\\r")
                .replace("\t", "\\t")
                + "\"";
    }
}