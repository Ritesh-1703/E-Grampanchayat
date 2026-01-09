package com.example.E_Grampanchayat.controller;

import com.example.E_Grampanchayat.model.MarriageCertificate;
import com.example.E_Grampanchayat.repository.MarriageCertificateRepository;
import com.example.E_Grampanchayat.exception.MarriageCertificateNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/marriage-certificates")
@CrossOrigin(origins = "http://localhost:3000")
public class MarriageCertificateController {

    @Autowired
    private MarriageCertificateRepository repo;

    @PostMapping("/apply")
    public ResponseEntity<MarriageCertificate> apply(@RequestBody MarriageCertificate cert) {
        cert.setStatus("PENDING");
        cert.setApplicationDate(LocalDate.now());
        return ResponseEntity.ok(repo.save(cert));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<MarriageCertificate>> getByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(repo.findByUserId(userId));
    }

    @GetMapping
    public ResponseEntity<List<MarriageCertificate>> getAll() {
        return ResponseEntity.ok(repo.findAll());
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateStatus(@PathVariable Long id, @RequestParam String status) {
        MarriageCertificate cert = repo.findById(id).orElseThrow(() -> new MarriageCertificateNotFoundException(id));
        cert.setStatus(status);
        return ResponseEntity.ok(repo.save(cert));
    }

    @PostMapping("/{id}/upload")
    public ResponseEntity<?> uploadCertificate(@PathVariable Long id, @RequestParam MultipartFile file) throws IOException {
        MarriageCertificate cert = repo.findById(id).orElseThrow(() -> new MarriageCertificateNotFoundException(id));
        cert.setCertificateFile(file.getBytes());
        cert.setCertificateFileName(file.getOriginalFilename());
        return ResponseEntity.ok(repo.save(cert));
    }

    @GetMapping("/{id}/download")
    public ResponseEntity<byte[]> download(@PathVariable Long id) {
        MarriageCertificate cert = repo.findById(id).orElseThrow(() -> new MarriageCertificateNotFoundException(id));
        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + cert.getCertificateFileName())
            .contentType(MediaType.APPLICATION_PDF)
            .body(cert.getCertificateFile());
    }
}
