package com.example.E_Grampanchayat.controller;

import com.example.E_Grampanchayat.exception.DirectoryNotFoundException;
import com.example.E_Grampanchayat.model.Directory;
import com.example.E_Grampanchayat.repository.DirectoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/directory")
@CrossOrigin("e-grampanchayat-p1j6a98wn-ritesh-dhamales-projects.vercel.app")
public class DirectoryController {

    @Autowired
    private DirectoryRepository directoryRepository;

    // Add a new directory entry
    @PostMapping
    public Directory addDirectory(@RequestBody Directory directory) {
        return directoryRepository.save(directory);
    }

    // Get all directory entries
    @GetMapping
    public List<Directory> getAllDirectories() {
        return directoryRepository.findAll();
    }

    // Get a directory entry by ID
    @GetMapping("/{id}")
    public Directory getDirectoryById(@PathVariable Long id) {
        return directoryRepository.findById(id)
                .orElseThrow(() -> new DirectoryNotFoundException(id));
    }

    // Get directory entries by category
    @GetMapping("/category/{category}")
    public List<Directory> getDirectoryByCategory(@PathVariable String category) {
        return directoryRepository.findByCategory(category);
    }

    // Update an existing directory entry
    @PutMapping("/{id}")
    public Directory updateDirectory(@PathVariable Long id, @RequestBody Directory newDirectory) {
        return directoryRepository.findById(id)
                .map(directory -> {
                    directory.setCategory(newDirectory.getCategory());
                    directory.setName(newDirectory.getName());
                    directory.setContactNo(newDirectory.getContactNo());
                    directory.setAddress(newDirectory.getAddress());
                    directory.setEmail(newDirectory.getEmail());
                    return directoryRepository.save(directory);
                }).orElseThrow(() -> new DirectoryNotFoundException(id));
    }

    // Delete a directory entry
    @DeleteMapping("/{id}")
    public String deleteDirectory(@PathVariable Long id) {
        if (!directoryRepository.existsById(id)) {
            throw new DirectoryNotFoundException(id);
        }
        directoryRepository.deleteById(id);
        return "Directory entry with ID " + id + " has been deleted successfully.";
    }
}