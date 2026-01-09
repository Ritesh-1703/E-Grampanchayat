package com.example.E_Grampanchayat.controller;

import com.example.E_Grampanchayat.model.BirthCertificate;
import com.example.E_Grampanchayat.service.BirthCertificateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/birth-certificates")
@CrossOrigin(origins = "https://e-grampanchayat-gamma.vercel.app", allowCredentials = "true")
public class BirthCertificateController {

    @Autowired
    private BirthCertificateService service;

    @PostMapping("/apply")
    public ResponseEntity<BirthCertificate> apply(@RequestBody BirthCertificate certificate) {
        return ResponseEntity.ok(service.apply(certificate));
    }

    @GetMapping("/all")
    public List<BirthCertificate> getAll() {
        return service.getAllCertificates();
    }

    @GetMapping("/user/{userId}")
    public List<BirthCertificate> getByUserId(@PathVariable Long userId) {
        return service.getByUserId(userId);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<BirthCertificate> updateStatus(@PathVariable Long id, @RequestParam String status) {
        return ResponseEntity.ok(service.updateStatus(id, status));
    }

    @PostMapping("/{id}/upload")
    public ResponseEntity<BirthCertificate> uploadFile(
            @PathVariable Long id,
            @RequestParam("file") MultipartFile file) throws IOException {

        return ResponseEntity.ok(service.uploadCertificate(
                id,
                file.getBytes(),
                file.getOriginalFilename(),
                file.getContentType()));
    }

    @GetMapping("/{id}/download")
    public ResponseEntity<byte[]> downloadCertificate(@PathVariable Long id) {
        BirthCertificate cert = service.getCertificateById(id);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + cert.getFileName())
                .contentType(MediaType.parseMediaType(cert.getFileType()))
                .body(cert.getCertificateFile());
    }
}