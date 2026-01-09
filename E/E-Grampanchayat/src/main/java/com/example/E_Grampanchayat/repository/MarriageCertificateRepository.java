package com.example.E_Grampanchayat.repository;

import com.example.E_Grampanchayat.model.MarriageCertificate;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MarriageCertificateRepository extends JpaRepository<MarriageCertificate, Long> {
    List<MarriageCertificate> findByUserId(Long userId);
}
