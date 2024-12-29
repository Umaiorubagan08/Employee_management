import React, { useState } from "react";

export default function Home() {
    const [employees, setEmployees] = useState([
        { id: 1, name: "Muthukumar S.H", position: "Founder and CEO" },
        { id: 2, name: "Ganesan", position: "Full Stack Developer" },
        { id: 3, name: "Balaji", position: "Junior Front-end Developer" },
        { id: 4, name: "Thenmozhi", position: "Data Analyst" },
        { id: 5, name: "Prakash", position: "Python Developer" },
        { id: 6, name: "Ramar", position: "Embedded Developer" },
        { id: 7, name: "Shree", position: "C++ Developer" },
        { id: 8, name: "Manoji", position: "Back-end Developer" },
        { id: 9, name: "Ganapathi", position: "VLSI Designer" },
        { id: 10, name: "Riya", position: "UI/UX Designer" },
    ]);
    const [newEmployee, setNewEmployee] = useState({ name: "", position: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };

    const handleAddEmployee = (e) => {
        e.preventDefault();
        if (newEmployee.name && newEmployee.position) {
            setEmployees([
                ...employees,
                { id: employees.length + 1, ...newEmployee },
            ]);
            setNewEmployee({ name: "", position: "" });
        }
    };

    return (
        <div className="h-screen flex flex-col bg-gradient-to-r from-gray-100 to-gray-300">
            {/* Header Section */}
            <header className="bg-blue-700 text-white p-4 shadow-md">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Employee Management</h1>
                    <button className="bg-blue-900 px-4 py-2 rounded-md hover:bg-blue-800">View Profile</button>
                </div>
            </header>

            {/* Main Content Section */}
            <main className="flex-grow p-6 overflow-y-auto">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-blue-700">Welcome to the Employee Management System</h2>
                    <p className="text-gray-600 mt-2">Manage employee details, view reports, and more!</p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-4 text-center">
                        <h3 className="text-xl font-bold text-gray-700">Total Employees</h3>
                        <p className="text-3xl text-blue-600 font-semibold mt-2">{employees.length}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 text-center">
                        <h3 className="text-xl font-bold text-gray-700">Active Tasks</h3>
                        <p className="text-3xl text-green-600 font-semibold mt-2">12</p>
                    </div>
                </div>

                {/* Manage Employees Section */}
                <div className="mt-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-700">Manage Employees</h3>
                    <button
                        className="bg-green-500 text-white px-6 py-2 rounded-md mt-4 hover:bg-green-600"
                        onClick={() => document.getElementById("addEmployeeModal").showModal()}
                    >
                        Add New Employee
                    </button>
                </div>

                {/* Employee List Section */}
                <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-700">Employee List</h3>
                    <div className="bg-white shadow-md rounded-lg mt-4 p-4 max-h-64 overflow-y-auto">
                        <ul className="space-y-2">
                            {employees.map((employee) => (
                                <li
                                    key={employee.id}
                                    className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md flex justify-between items-center"
                                >
                                    <span>
                                        <strong className="text-gray-800">{employee.name}</strong> - {employee.position}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>

            {/* Footer Section */}
            <footer className="bg-blue-700 text-white text-center py-4">
                <p>&copy; 2024 Company Name | All rights reserved</p>
            </footer>

            {/* Add New Employee Modal */}
            <dialog id="addEmployeeModal" className="rounded-lg shadow-lg p-6 bg-white max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">Add New Employee</h3>
                <form onSubmit={handleAddEmployee}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={newEmployee.name}
                            onChange={handleInputChange}
                            className="mt-1 p-2 border rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Position</label>
                        <input
                            type="text"
                            name="position"
                            value={newEmployee.position}
                            onChange={handleInputChange}
                            className="mt-1 p-2 border rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="px-4 py-2 bg-red-500 text-white rounded-md mr-2 hover:bg-red-600"
                            onClick={() => document.getElementById("addEmployeeModal").close()}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Add Employee
                        </button>
                    </div>
                </form>
            </dialog>
        </div>
    );
}
