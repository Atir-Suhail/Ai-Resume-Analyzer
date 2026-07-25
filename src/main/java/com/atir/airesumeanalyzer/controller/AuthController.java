package com.atir.airesumeanalyzer.controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;
import com.atir.airesumeanalyzer.dto.LoginRequestDTO;
import com.atir.airesumeanalyzer.dto.ApiResponse;
import com.atir.airesumeanalyzer.dto.LoginResponseDTO;
import com.atir.airesumeanalyzer.dto.RegisterRequestDTO;
import com.atir.airesumeanalyzer.service.UserService;



@RestController
@RequestMapping("/api/auth")
public class AuthController {
	  private final UserService userService;

	    public AuthController(UserService userService) {
	        this.userService = userService;
	    }
	    
	    
	    @PostMapping("/register")
	    public ApiResponse register(@Valid @RequestBody RegisterRequestDTO request) {
	        return userService.register(request);
	    }
	    @PostMapping("/login")
	    public LoginResponseDTO login(@Valid @RequestBody LoginRequestDTO request) {
	        return userService.login(request);
	    }
}
