import React, { useState } from "react";
import { data } from './data'; // If you're importing from a file

function Table() {
    const [search, setSearch] = useState(""); // Search state
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const rowsPerPage = 4; // Number of rows per page

    // Pagination logic
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    // Search and Filter Logic
    const filteredData = data.filter((item) => {
        const searchTerm = search.toLowerCase(); // Convert search term to lowercase once
        return (
            search === "" || // No search term, return all
            item.first_name.toLowerCase().includes(searchTerm) || // First name
            item.last_name.toLowerCase().includes(searchTerm) || // Last name
            item.email.toLowerCase().includes(searchTerm) || // Email
            item.Number.includes(searchTerm) // Number (case-insensitive not needed here)
        );
    });

    const currentData = filteredData.slice(startIndex, endIndex); // Data for the current page
    const totalPages = Math.ceil(filteredData.length / rowsPerPage); // Total pages

    return (
        <div>
            <div className="container mt-2 bg-white p-10">
                <h3 className="employee">Employee Database</h3>
                <form method="post" className="col-md-6">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="form-control"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value); // Update search term
                            setCurrentPage(1); // Reset to the first page on a new search
                        }} 
                    />
                </form>

                <table className="table table-bordered table-striped mt-3 table-auto table_data">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.length > 0 ? (
                            currentData.map((item) => (
                                <tr key={item.id}> 
                                    <td>{item.id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.Number}</td>
                                    <td>{item.Address}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" style={{ textAlign: "center" }}>
                                    No results found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Pagination Controls */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <button 
                        className="btn btn-secondary"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        Previous
                    </button>

                    <span>
                        Page {currentPage} of {totalPages}
                    </span>

                    <button 
                        className="btn btn-secondary"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Table;
