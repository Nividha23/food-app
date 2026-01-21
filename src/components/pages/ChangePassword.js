import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";  // ✅ added

function ChangePassword() {
  const navigate = useNavigate();  // ✅ added

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("❌ New passwords do not match.");
      return;
    }

    if (newPassword.length < 8) {
      setMessage("❌ New password must be at least 8 characters.");
      return;
    }

    try {
      const res = await fetch("/api/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Password changed successfully.");
        setTimeout(() => {
          navigate("/main");  // ✅ redirect to home after 1.5 sec
        }, 1500);
      } else {
        setMessage(`❌ ${data.error || "Something went wrong"}`);
      }
    } catch (err) {
      setMessage("❌ Something went wrong.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
        <Link to="/main" className="back-btn">← Back</Link>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
          style={{ width: "100%", margin: "8px 0", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          style={{ width: "100%", margin: "8px 0", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{ width: "100%", margin: "8px 0", padding: "8px" }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#ec4899",
            color: "white",
            border: "none",
            padding: "10px",
            width: "100%",
            cursor: "pointer",
          }}
        >
          Change Password
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ChangePassword;
