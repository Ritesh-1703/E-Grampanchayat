package com.example.E_Grampanchayat.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.*;
import java.util.UUID;

@Service
public class CertificateStorageService {
    private final Path root = Paths.get("uploads");

    public String store(MultipartFile file) throws IOException {
        if (!Files.exists(root)) Files.createDirectories(root);
        String filename = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path destination = root.resolve(filename);
        Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);
        return destination.toString();
    }
}
