package com.example.E_Grampanchayat.model;

import jakarta.persistence.*;

@Entity
public class Directory {

    @Id
    @GeneratedValue
    @Column(name = "directory_id")
    private Long directoryId;
    private String category;
    private String name;
    @Column(name="contact_no")
    private String contactNo;
    private String address;
    private String email;

    // Default Constructor
   
    // Getters and Setters
    public Long getDirectoryId() {
        return directoryId;
    }

    public void setDirectoryId(Long directoryId) {
        this.directoryId = directoryId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
