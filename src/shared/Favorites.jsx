import React from "react";

export default function Documents() {
  const documents = [
    {
      title: "Employee Handbook",
      description: "A comprehensive guide to company policies, benefits, and more.",
      type: "PDF",
      date: "2024-09-15"
    },
    {
      title: "Annual Financial Report",
      description: "Detailed analysis of the company’s financial and performance for the year.",
      type: "Excel",
      date: "2024-11-20"
    },
    {
      title: "Project Proposal",
      description: "Proposal for the upcoming development project including timelines, materials, report and resources.",
      type: "Word",
      date: "2024-12-05"
    }
  ];

  const handleView = (documentTitle) => {
    alert(`Viewing document: ${documentTitle}`);
    // Replace with actual functionality (e.g., opening the document)
  };

  const handleDownload = (documentTitle) => {
    alert(`Downloading document: ${documentTitle}`);
    // Replace with actual functionality (e.g., triggering a download)
  };

  const styles = {
    container: {
      backgroundColor: "#f9f9f9",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "90%",
      margin: "auto",
      textAlign: "center",
      maxWidth: "1200px"
    },
    title: {
      fontfamily: "Poppins",
      fontSize: "2.5rem",
      color: "#333",
      marginBottom: "30px",
    },
    documentList: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "20px"
    },
    documentCard: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s, box-shadow 0.3s",
      cursor: "pointer",
      textAlign: "left"
    },
    documentCardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)"
    },
    documentTitle: {
      fontSize: "1.6rem",
      fontfamily: "Poppins",
      fontWeight: "bold",
      color: "#333"
    },
    documentDescription: {
      fontSize: "1rem",
      color: "#555",
      marginTop: "10px",
    },
    documentType: {
      fontSize: "0.9rem",
      color: "#777",
      marginTop: "5px",
    },
    documentDate: {
      fontSize: "0.9rem",
      color: "#777",
      marginTop: "5px",
    },
    documentActions: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "15px"
    },
    actionBtn: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "8px 16px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "background-color 0.3s"
    },
    actionBtnHover: {
      backgroundColor: "#0056b3"
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}> DOCUMENTS </h1>
      <div style={styles.documentList}>
        {documents.map((document, index) => (
          <div
            key={index}
            style={styles.documentCard}
            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <h2 style={styles.documentTitle}>{document.title}</h2>
            <p style={styles.documentDescription}>{document.description}</p>
            <p style={styles.documentType}>Type: {document.type}</p>
            <p style={styles.documentDate}>Added on: {document.date}</p>
            <div style={styles.documentActions}>
              <button
                style={styles.actionBtn}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.actionBtnHover.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.actionBtn.backgroundColor}
                onClick={() => handleView(document.title)}
              >
                View
              </button>
              <button
                style={styles.actionBtn}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.actionBtnHover.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.actionBtn.backgroundColor}
                onClick={() => handleDownload(document.title)}
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
