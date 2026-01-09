package com.example.E_Grampanchayat.repository;


import com.example.E_Grampanchayat.model.Directory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DirectoryRepository extends JpaRepository<Directory, Long> {
    List<Directory> findByCategory(String category);
}
