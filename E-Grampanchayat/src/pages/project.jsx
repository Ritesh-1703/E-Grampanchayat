import { useEffect, useState } from "react";
import CitizenNavbar from "../components/CitizenNavbar";
import Footer3 from "../components/Footer3";
import styles from "./Project.module.css";

function Project() {
  const [projects, setProjects] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    fetch("http://localhost:8082/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const filteredProjects =
    filterStatus === "All"
      ? projects
      : projects.filter((p) => p.status === filterStatus);

  return (
    <div className={styles.pageWrapper}>
      <CitizenNavbar />

      <div className={styles.filter}>
        <label>Filter by Status: </label>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Planned">Planned</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>Village Development Projects</h2>
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <div key={project.project_id} className={styles.card}>
              <h3>{project.project_name}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Status:</strong> {project.status}
              </p>
              <p>
                <strong>Start:</strong> {project.start_date}
              </p>
              <p>
                <strong>End:</strong> {project.end_date || "N/A"}
              </p>
              <p>
                <strong>Estimated Budget:</strong> ₹{project.estimated_budget}
              </p>
              <p>
                <strong>Actual Budget:</strong> ₹
                {project.actual_budget || "N/A"}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer3 />
    </div>
  );
}

export default Project;
