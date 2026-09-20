package com.atir.airesumeanalyzer.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import com.atir.airesumeanalyzer.dto.AIAnalysisResponseDTO;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class OpenAIService {

    private final RestClient restClient;
    private final ObjectMapper objectMapper;

    @Value("${openai.api.key}")
    private String apiKey;

    @Value("${openai.api.url}")
    private String apiUrl;

    // Constructor
    public OpenAIService(RestClient restClient, ObjectMapper objectMapper) {
        this.restClient = restClient;
        this.objectMapper = objectMapper;
    }

    // Resume ko AI se analyze karega
    public AIAnalysisResponseDTO analyzeResume(String resumeText) {

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
                  "model": "gpt-4.1-mini",
                  "input": %s
                }
                """.formatted(toJsonString(prompt));

        try {

            // OpenAI API call
            String rawResponse = restClient.post()
                    .uri(apiUrl)
                    .header("Authorization", "Bearer " + apiKey)
                    .header("Content-Type", "application/json")
                    .body(requestBody)
                    .retrieve()
                    .body(String.class);

            // Complete OpenAI response ko JSON me convert karo
            JsonNode rootNode = objectMapper.readTree(rawResponse);

            // Actual AI generated text nikalo
            String aiText = rootNode
                    .path("output")
                    .get(0)
                    .path("content")
                    .get(0)
                    .path("text")
                    .asText();

            System.out.println("===== AI ANALYSIS =====");
            System.out.println(aiText);
            System.out.println("=======================");

            // AI JSON ko Java DTO me convert karo
            return objectMapper.readValue(
                    aiText,
                    AIAnalysisResponseDTO.class
            );

        } catch (Exception e) {

            e.printStackTrace();

            throw new RuntimeException(
                    "Failed to analyze resume using AI: "
                            + e.getMessage()
            );
        }
    }

    // Java String ko JSON-safe String banane ke liye
    private String toJsonString(String value) {

        return "\"" + value
                .replace("\\", "\\\\")
                .replace("\"", "\\\"")
                .replace("\n", "\\n")
                .replace("\r", "\\r")
                .replace("\t", "\\t")
                + "\"";
    }
}