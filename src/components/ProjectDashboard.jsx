import React from "react";

const projects = [
    { id: 1, name: "Keerthi Iyer", status: "Complete", projectName: "Website Redesign" },
    { id: 2, name: "Iniya Nair", status: "Pending", projectName: "Mobile App Development" },
    { id: 3, name: "Govind Verma", status: "Upcoming", projectName: "Database Migration" },
    { id: 4, name: "Nisha Patel", status: "Complete", projectName: "Cloud Integration" },
    { id: 5, name: "Karan Menon", status: "Pending", projectName: "E-commerce Platform" },
];

export default function ProjectDashboard() {
    const handleButtonClick = (project) => {
        alert(`Project "${project.projectName}" is currently: ${project.status}`);
    };

    return (
        <div style={{
            padding: "30px", 
            fontFamily: "Poppins, sans-serif", 
            backgroundColor: "white", 
            borderRadius: "5px", 
            color: "black", 
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
            transition: "all 0.3s ease-in-out", 
            margin: "auto",
        }}>
            <h1 style={{ 
                fontFamily: "Poppins, sans-serif", 
                fontSize: "2.5rem", 
                color: "black", 
                textTransform: "uppercase",
                textAlign: "center", 
                marginBottom: "20px", 
                fontWeight: "bold"
            }}>
                Project Dashboard
            </h1>

            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px"}}>
                <thead>
                    <tr style={{ backgroundColor: "#555", color: "black" }}>
                        <th style={{ border: "1px solid #ccc", padding: "10px" }}>Name</th>
                        <th style={{ border: "1px solid #ccc", padding: "10px" }}>Project Name</th>
                        <th style={{ border: "1px solid #ccc", padding: "10px" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>{project.name}</td>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>{project.projectName}</td>
                            <td style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center"}}>
                                <button
                                    style={{
                                        padding: "5px 15px", // Increased padding for better button size
                                        backgroundColor:
                                            project.status === "Complete"
                                                ? "green"
                                                : project.status === "Pending"
                                                ? "orange"
                                                : "blue",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "5px",
                                        textTransform: "uppercase",
                                        cursor: "pointer",
                                        fontSize: "1rem" // Optional: Adjust button font size
                                    }}
                                    onClick={() => handleButtonClick(project)}
                                >
                                    {project.status}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <footer style={{ marginTop: "20px", textAlign: "center" }}>
                <p>&copy; 2024 EmpHub | All rights reserved</p>
            </footer>
        </div>
    );
}
