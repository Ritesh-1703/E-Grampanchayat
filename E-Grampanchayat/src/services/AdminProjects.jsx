import { useEffect, useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import Footer3 from "../components/Footer3";
import styles from "./AdminProjects.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    project_name: "",
    description: "",
    start_date: "",
    end_date: "",
    estimated_budget: "",
    actual_budget: "",
    status: "Planned",
  });
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    fetch("https://e-grampanchayat-jufy.onrender.com/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => toast.error("Error fetching projects"));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://e-grampanchayat-jufy.onrender.com/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        toast.success("Project added successfully");
        fetchProjects();
        setFormData({
          project_name: "",
          description: "",
          start_date: "",
          end_date: "",
          estimated_budget: "",
          actual_budget: "",
          status: "Planned",
        });
      })
      .catch(() => toast.error("Failed to add project"));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      fetch(`https://e-grampanchayat-jufy.onrender.com/api/projects/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          toast.success("Project deleted successfully");
          fetchProjects();
        })
        .catch(() => toast.error("Error deleting project"));
    }
  };

  const handleStatusChange = (id, newStatus) => {
    fetch(
      `https://e-grampanchayat-jufy.onrender.com/api/projects/${id}/status`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      }
    )
      .then(() => {
        toast.success("Status updated successfully");
        fetchProjects();
      })
      .catch(() => toast.error("Error updating status"));
  };

  const filteredProjects =
    filterStatus === "All"
      ? projects
      : projects.filter((p) => p.status === filterStatus);

  return (
    <>
      <AdminNavbar />
      <div className={styles.container}>
        <h2 className={styles.title}>Admin - Manage Development Projects</h2>

        {/* Add Project Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="project_name"
            placeholder="Project Name"
            value={formData.project_name}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="start_date"
            value={formData.start_date}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="end_date"
            value={formData.end_date}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="estimated_budget"
            placeholder="Estimated Budget"
            value={formData.estimated_budget}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="actual_budget"
            placeholder="Actual Budget"
            value={formData.actual_budget}
            onChange={handleInputChange}
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option>Planned</option>
            <option>Ongoing</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
          <button type="submit" className={styles.addBtn}>
            Add Project
          </button>
        </form>

        {/* Filter */}
        <div className={styles.filter}>
          <label>Filter by Status: </label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option>All</option>
            <option>Planned</option>
            <option>Ongoing</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((proj) => (
            <div key={proj.project_id} className={styles.card}>
              <h3>{proj.project_name}</h3>
              <p>{proj.description}</p>
              <p>
                <strong>Start:</strong> {proj.start_date}
              </p>
              <p>
                <strong>End:</strong> {proj.end_date || "N/A"}
              </p>
              <p>
                <strong>Estimated:</strong> ₹{proj.estimated_budget}
              </p>
              <p>
                <strong>Actual:</strong> ₹{proj.actual_budget}
              </p>
              <p>
                <strong>Status:</strong> {proj.status}
              </p>
              <select
                value={proj.status}
                onChange={(e) =>
                  handleStatusChange(proj.project_id, e.target.value)
                }
                className={styles.statusDropdown}
              >
                <option>Planned</option>
                <option>Ongoing</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(proj.project_id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer3 />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default AdminProjects;
