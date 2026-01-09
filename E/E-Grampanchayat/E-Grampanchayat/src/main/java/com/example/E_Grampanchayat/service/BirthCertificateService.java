package com.example.E_Grampanchayat.service;

import com.example.E_Grampanchayat.exception.CertificateNotFoundException;
import com.example.E_Grampanchayat.model.BirthCertificate;
import com.example.E_Grampanchayat.repository.BirthCertificateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BirthCertificateService {

    @Autowired
    private BirthCertificateRepository repo;

    public BirthCertificate apply(BirthCertificate certificate) {
        certificate.setStatus("Pending");
        certificate.setApplicationDate(java.time.LocalDate.now());
        return repo.save(certificate);
    }

    public List<BirthCertificate> getAllCertificates() {
        return repo.findAll();
    }

    public List<BirthCertificate> getByUserId(Long userId) {
        return repo.findByUserId(userId);
    }

    public BirthCertificate updateStatus(Long id, String status) {
        BirthCertificate cert = repo.findById(id)
                .orElseThrow(() -> new CertificateNotFoundException(id));
        cert.setStatus(status);
        return repo.save(cert);
    }

    public BirthCertificate uploadCertificate(Long id, byte[] fileData, String fileName, String fileType) {
        BirthCertificate cert = repo.findById(id)
                .orElseThrow(() -> new CertificateNotFoundException(id));

        if (!"Approved".equalsIgnoreCase(cert.getStatus())) {
            throw new IllegalStateException("Certificate can only be uploaded when status is 'Approved'");
        }

        cert.setCertificateFile(fileData);
        cert.setFileName(fileName);
        cert.setFileType(fileType);
        return repo.save(cert);
    }

    public BirthCertificate getCertificateById(Long id) {
        return repo.findById(id).orElseThrow(() -> new CertificateNotFoundException(id));
    }
}