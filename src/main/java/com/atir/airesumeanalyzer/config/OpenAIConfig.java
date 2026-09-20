package com.atir.airesumeanalyzer.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;

@Configuration
public class OpenAIConfig {

    @Bean
    public RestClient restClient() {
        return RestClient.create();
    }
}