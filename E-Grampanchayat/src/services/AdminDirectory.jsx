import { useState, useEffect } from "react";
import styles from "./AdminDirectory.module.css"; // Ensure this file exists
import AdminNavbar from "../components/AdminNavbar";
import Footer3 from "../components/Footer3";

function AdminDirectory() {
  const [directory, setDirectory] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    contactNo: "",
    address: "",
    email: "",
  });
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    fetchDirectory();
  }, []);

  const fetchDirectory = () => {
    fetch("https://e-grampanchayat-jufy.onrender.com/api/directory")
      .then((res) => res.json())
      .then((data) => setDirectory(data))
      .catch((error) => console.error("Error fetching directory:", error));
  };

  const handleDelete = (id) => {
    if (!id) {
      alert("Error: Unable to delete entry (Invalid ID)");
      return;
    }
    if (window.confirm("Are you sure you want to delete this entry?")) {
      fetch(`https://e-grampanchayat-jufy.onrender.com/api/directory/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          alert("Entry deleted successfully");
          fetchDirectory();
        })
        .catch((error) => alert("Error deleting entry: " + error.message));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "contactNo" ? value.replace(/\D/g, "") : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://e-grampanchayat-jufy.onrender.com/api/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        fetchDirectory();
        setFormData({
          category: "",
          name: "",
          contactNo: "",
          address: "",
          email: "",
        });
      })
      .catch((error) => console.error("Error adding entry:", error));
  };

  const handleEditClick = (item) => {
    setEditData({ ...item });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: name === "contactNo" ? value.replace(/\D/g, "") : value,
    }));
  };

  const handleUpdate = () => {
    if (!editData) return;
    fetch(
      `https://e-grampanchayat-jufy.onrender.com/api/directory/${editData.directoryId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editData),
      }
    )
      .then(() => {
        fetchDirectory();
        setEditData(null);
      })
      .catch((error) => console.error("Error updating entry:", error));
  };

  return (
    <>
      <AdminNavbar />
      <div className={styles.container}>
        <h2 className={styles.heading}>Manage Grampanchayat Directory</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="contactNo"
            placeholder="Contact No"
            value={formData.contactNo}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className={styles.addButton}>
            Add Entry
          </button>
        </form>

        <div className={styles.grid}>
          {directory.map((item) => (
            <div key={item.directoryId} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.name}</h3>
              <p>
                <strong>Category:</strong> {item.category}
              </p>
              <p>
                <strong>Contact:</strong> {item.contactNo}
              </p>
              <p>
                <strong>Email:</strong> {item.email}
              </p>
              <p>
                <strong>Address:</strong> {item.address}
              </p>
              <div className={styles.buttonGroup}>
                <button
                  onClick={() => handleEditClick(item)}
                  className={styles.editButton}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.directoryId)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {editData && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h3>Edit Entry</h3>
              <input
                type="text"
                name="category"
                value={editData.category}
                onChange={handleEditInputChange}
              />
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleEditInputChange}
              />
              <input
                type="tel"
                name="contactNo"
                value={editData.contactNo}
                onChange={handleEditInputChange}
              />
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleEditInputChange}
              />
              <input
                type="text"
                name="address"
                value={editData.address}
                onChange={handleEditInputChange}
              />
              <button onClick={handleUpdate} className={styles.updateButton}>
                Update
              </button>
              <button
                onClick={() => setEditData(null)}
                className={styles.cancelButton}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer3 />
    </>
  );
}

export default AdminDirectory;
