package com.example.E_Grampanchayat.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class MarriageCertificate {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private String groomName;
    private String brideName;
    private LocalDate dateOfMarriage;
    private LocalDate applicationDate;
    private String status; // PENDING, APPROVED, REJECTED

    @Lob
    private byte[] certificateFile;

    private String certificateFileName;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getGroomName() {
		return groomName;
	}

	public void setGroomName(String groomName) {
		this.groomName = groomName;
	}

	public String getBrideName() {
		return brideName;
	}

	public void setBrideName(String brideName) {
		this.brideName = brideName;
	}

	public LocalDate getDateOfMarriage() {
		return dateOfMarriage;
	}

	public void setDateOfMarriage(LocalDate dateOfMarriage) {
		this.dateOfMarriage = dateOfMarriage;
	}

	public LocalDate getApplicationDate() {
		return applicationDate;
	}

	public void setApplicationDate(LocalDate applicationDate) {
		this.applicationDate = applicationDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public byte[] getCertificateFile() {
		return certificateFile;
	}

	public void setCertificateFile(byte[] certificateFile) {
		this.certificateFile = certificateFile;
	}

	public String getCertificateFileName() {
		return certificateFileName;
	}

	public void setCertificateFileName(String certificateFileName) {
		this.certificateFileName = certificateFileName;
	}

    // Getters and Setters
    
}
