package com.example.E_Grampanchayat.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class ProjectNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(ProjectNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String projectNotFoundHandler(ProjectNotFoundException ex) {
        return ex.getMessage();
    }
}
