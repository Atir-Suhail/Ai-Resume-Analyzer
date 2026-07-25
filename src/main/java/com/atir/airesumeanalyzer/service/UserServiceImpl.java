package com.atir.airesumeanalyzer.service;

import java.time.LocalDateTime;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.atir.airesumeanalyzer.dto.ApiResponse;
import com.atir.airesumeanalyzer.dto.LoginRequestDTO;
import com.atir.airesumeanalyzer.dto.LoginResponseDTO;
import com.atir.airesumeanalyzer.dto.RegisterRequestDTO;
import com.atir.airesumeanalyzer.entity.User;
import com.atir.airesumeanalyzer.exception.EmailAlreadyExistsException;
import com.atir.airesumeanalyzer.exception.InvalidCredentialsException;
import com.atir.airesumeanalyzer.exception.UserNotFoundException;
import com.atir.airesumeanalyzer.repository.UserRepository;
import com.atir.airesumeanalyzer.security.JwtUtil;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public UserServiceImpl(UserRepository userRepository,
                           PasswordEncoder passwordEncoder,
                           JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public ApiResponse register(RegisterRequestDTO request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new EmailAlreadyExistsException("Email already exists");
        }

        User user = new User();

        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole("ROLE_USER");
        user.setIsActive(true);
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());

        userRepository.save(user);

        return new ApiResponse(true, "User Registered Successfully");
    }

    @Override
    public LoginResponseDTO login(LoginRequestDTO request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new UserNotFoundException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new InvalidCredentialsException("Invalid Password");
        }

        String token = jwtUtil.generateToken(user.getEmail());

        return new LoginResponseDTO(true, "Login Successful", token);
    }
}