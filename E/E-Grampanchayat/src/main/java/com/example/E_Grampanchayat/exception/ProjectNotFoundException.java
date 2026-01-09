package com.example.E_Grampanchayat.exception;

public class ProjectNotFoundException extends RuntimeException {
    public ProjectNotFoundException(int id) {
        super("Project with ID " + id + " not found");
    }
}