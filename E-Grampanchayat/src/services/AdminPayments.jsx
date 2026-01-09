import React, { useEffect, useState } from "react";
import styles from "./AdminPayments.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import AdminNavbar from "../components/AdminNavbar";
import Footer3 from "../components/Footer3";

const AdminPayments = () => {
  const [payments, setPayments] = useState([]);

  const fetchPayments = async () => {
    try {
      const res = await axios.get("http://localhost:8082/api/payments");
      setPayments(res.data);
    } catch (error) {
      toast.error("Failed to load payments.");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:8082/api/payments/${id}/status`, null, {
        params: { status },
      });
      toast.success(`Payment ${status}`);
      fetchPayments();
    } catch (error) {
      toast.error("Failed to update status.");
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className={styles.container}>
        <h2>Admin Payment Panel</h2>
        {payments.length === 0 ? (
          <p>No payment records found.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Purpose</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Screenshot</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p.id}>
                  <td>{p.userId}</td>
                  <td>{p.purpose}</td>
                  <td>₹{p.amount}</td>
                  <td>{p.status}</td>
                  <td>{p.paymentDate}</td>
                  <td>
                    <a
                      href={`http://localhost:8082/api/payments/${p.id}/screenshot`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  </td>
                  <td>
                    <button onClick={() => updateStatus(p.id, "APPROVED")}>
                      Approve
                    </button>
                    <button onClick={() => updateStatus(p.id, "REJECTED")}>
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer3 />
    </>
  );
};

export default AdminPayments;
