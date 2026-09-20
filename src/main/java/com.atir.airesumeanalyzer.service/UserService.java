package com.atir.airesumeanalyzer.service;

import com.atir.airesumeanalyzer.dto.ApiResponse;
import com.atir.airesumeanalyzer.dto.LoginRequestDTO;
import com.atir.airesumeanalyzer.dto.LoginResponseDTO;
import com.atir.airesumeanalyzer.dto.RegisterRequestDTO;

public interface UserService {
	 ApiResponse register(RegisterRequestDTO request);

	    LoginResponseDTO login(LoginRequestDTO request);

}
