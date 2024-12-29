import React from "react";
import Table from "./Table"; // Ensure Table component is working fine

export default function Dashboard() {
    console.log("Rendering Dashboard component");
    return (
        <div>
            
            {/* Table Component */}
            <Table />
        </div>
    );
}
