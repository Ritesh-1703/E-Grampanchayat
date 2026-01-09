package com.example.E_Grampanchayat.repository;

import com.example.E_Grampanchayat.model.DeathCertificate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DeathCertificateRepository extends JpaRepository<DeathCertificate, Long> {
    List<DeathCertificate> findByUserId(Long userId);
}
