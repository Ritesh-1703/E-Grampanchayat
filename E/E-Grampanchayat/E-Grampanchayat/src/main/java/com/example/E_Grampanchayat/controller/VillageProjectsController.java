package com.example.E_Grampanchayat.controller;

import org.springframework.web.bind.annotation.*;

import com.example.E_Grampanchayat.exception.ProjectNotFoundException;
import com.example.E_Grampanchayat.model.VillageDevelopmentProject;
import com.example.E_Grampanchayat.repository.VillageProjectRepository;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin("https://e-grampanchayat-gamma.vercel.app")
public class VillageProjectsController {

    private final VillageProjectRepository repository;

    public VillageProjectsController(VillageProjectRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<VillageDevelopmentProject> getAllProjects() {
        return repository.findAll();
    }

    @PostMapping
    public VillageDevelopmentProject addProject(@RequestBody VillageDevelopmentProject project) {
        return repository.save(project);
    }

    @PutMapping("/{id}")
    public VillageDevelopmentProject updateProjectStatus(@PathVariable int id,
            @RequestBody VillageDevelopmentProject updatedProject) {
        return repository.findById(id).map(project -> {
            project.setStatus(updatedProject.getStatus());
            project.setActual_budget(updatedProject.getActual_budget());
            return repository.save(project);
        }).orElseThrow(() -> new ProjectNotFoundException(id));
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable int id) {
        if (!repository.existsById(id))
            throw new ProjectNotFoundException(id);
        repository.deleteById(id);
    }
}