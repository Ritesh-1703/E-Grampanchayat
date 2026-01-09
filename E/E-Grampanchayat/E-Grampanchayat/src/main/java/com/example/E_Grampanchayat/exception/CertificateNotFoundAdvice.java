package com.example.E_Grampanchayat.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class CertificateNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(CertificateNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String handleNotFound(CertificateNotFoundException ex) {
        return ex.getMessage();
    }
}