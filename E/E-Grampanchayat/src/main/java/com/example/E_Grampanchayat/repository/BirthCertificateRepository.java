package com.example.E_Grampanchayat.repository;

import com.example.E_Grampanchayat.model.BirthCertificate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BirthCertificateRepository extends JpaRepository<BirthCertificate, Long> {
    List<BirthCertificate> findByUserId(Long userId);
}