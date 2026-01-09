package com.example.E_Grampanchayat.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.E_Grampanchayat.model.User;

public interface UserRepository extends JpaRepository<User, Long>
{
	 Optional<User> findByEmail(String name);	
}