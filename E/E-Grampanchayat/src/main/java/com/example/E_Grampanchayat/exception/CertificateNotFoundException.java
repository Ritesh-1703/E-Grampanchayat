package com.example.E_Grampanchayat.exception;

@SuppressWarnings("serial")
public class CertificateNotFoundException extends RuntimeException {
    public CertificateNotFoundException(Long id) {
        super("Certificate with ID " + id + " not found.");
    }
}