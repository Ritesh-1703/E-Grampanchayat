package com.example.E_Grampanchayat.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.E_Grampanchayat.model.User;
import com.example.E_Grampanchayat.repository.UserRepository;

@RestController
@CrossOrigin("https://e-grampanchayat-gamma.vercel.app")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // Register new user
    @PostMapping("/user")
    public ResponseEntity<?> createUser(@RequestBody User newUser) {
        if (newUser.getEmail() == null || newUser.getPassword() == null) {
            return ResponseEntity.badRequest().body("Email and Password are required.");
        }

        Optional<User> existingUser = userRepository.findByEmail(newUser.getEmail());
        if (existingUser.isPresent()) {
            return ResponseEntity.badRequest().body("User with this email already exists.");
        }

        User savedUser = userRepository.save(newUser);
        return ResponseEntity.ok(savedUser);
    }

    // Get all users (Admin)
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Login user
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {
        Optional<User> user = userRepository.findByEmail(loginRequest.getEmail());

        if (user.isPresent() && user.get().getPassword().equals(loginRequest.getPassword())) {
            User loggedInUser = user.get();

            // Return limited user info (exclude password)
            return ResponseEntity.ok(new LoginResponse(
                    loggedInUser.getId(),
                    loggedInUser.getName(),
                    loggedInUser.getEmail(),
                    loggedInUser.getPhone(),
                    loggedInUser.getAddress(),
                    loggedInUser.getRole()));
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }

    // Get user by ID (Optional)
    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Login response DTO
    static class LoginResponse {
        private Long id;
        private String name;
        private String email;
        private long phone;
        private String address;
        private String role;

        public LoginResponse(Long id, String name, String email, long phone, String address, String role) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.address = address;
            this.role = role;
        }

        // Getters (for JSON serialization)
        public Long getId() {
            return id;
        }

        public String getName() {
            return name;
        }

        public String getEmail() {
            return email;
        }

        public long getPhone() {
            return phone;
        }

        public String getAddress() {
            return address;
        }

        public String getRole() {
            return role;
        }
    }
}
