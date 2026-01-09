import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "./AdminCertificate.module.css";

const AdminMarriageCertificate = () => {
  const [applications, setApplications] = useState([]);
  const apiUrl =
    "https://e-grampanchayat-jufy.onrender.com/api/marriage-certificates";

  const fetchData = async () => {
    try {
      const res = await axios.get(`${apiUrl}`);
      setApplications(res.data);
    } catch (err) {
      toast.error("Failed to fetch marriage certificates");
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`${apiUrl}/${id}/status`, null, {
        params: { status },
      });
      toast.success(`Application ${status}`);
      fetchData();
    } catch (err) {
      toast.error("Status update failed");
    }
  };

  const handleUpload = async (id, file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      await axios.post(`${apiUrl}/${id}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("File uploaded");
      fetchData();
    } catch (err) {
      toast.error("Upload failed");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.panel}>
      <h3>Marriage Certificate Applications</h3>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Groom & Bride</th>
              <th>Date of Marriage</th>
              <th>Status</th>
              <th>Actions</th>
              <th>Certificate</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>
                  {app.groomName} & {app.brideName}
                </td>
                <td>{app.dateOfMarriage}</td>
                <td>
                  <span
                    className={`${styles.status} ${
                      app.status === "APPROVED"
                        ? styles["status-approved"]
                        : app.status === "REJECTED"
                        ? styles["status-rejected"]
                        : styles["status-pending"]
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => handleStatusChange(app.id, "APPROVED")}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusChange(app.id, "REJECTED")}
                  >
                    Reject
                  </button>
                </td>
                <td>
                  {app.status === "APPROVED" && !app.certificateFile ? (
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleUpload(app.id, e.target.files[0])}
                    />
                  ) : app.certificateFile ? (
                    <a
                      href={`${apiUrl}/${app.id}/download`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.downloadBtn}
                    >
                      Download
                    </a>
                  ) : (
                    <span style={{ color: "#999" }}>No file</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminMarriageCertificate;
