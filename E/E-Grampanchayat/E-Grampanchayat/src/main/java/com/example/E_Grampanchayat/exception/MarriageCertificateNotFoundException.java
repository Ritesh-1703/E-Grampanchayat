package com.example.E_Grampanchayat.exception;

public class MarriageCertificateNotFoundException extends RuntimeException {
    public MarriageCertificateNotFoundException(Long id) {
        super("Marriage certificate not found with id: " + id);
    }
}
