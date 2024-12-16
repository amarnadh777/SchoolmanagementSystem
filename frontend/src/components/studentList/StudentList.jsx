import React, { useState } from 'react'
import { Link } from "react-router-dom";

function StudentList() {
  const studentsData = [
    {
      id: 1,
      name: "Elend Venture",
      email: "elendv@gmail.com",
      registrationDate: "BCA",
      coursesTaken: "2ND YEWR",
    },
    {
      id: 2,
      name: "Vin M.",
      email: "vin@gmail.com",
      registrationDate: "BCA",
      coursesTaken: "2ND YEWR",
    },
    {
      id: 3,
      name: "Tessa Grey",
      email: "tessagrey@spirallabyrinth.com",
      registrationDate: "BCA",
      coursesTaken: "2ND YEWR",
    },
    {
      id: 4,
      name: "Simon Lewis",
      email: "simonlewis@nyinstitute.com",
      registrationDate: "BCA",
      coursesTaken: "2ND YEWR",
    },
    {
      id: 5,
      name: "Daniel James",
      email: "danieljames@gmail.com",
      registrationDate: "BCA",
      coursesTaken: "2ND YEWR",
    },
  ];
  const [students, setStudents] = useState(studentsData);
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );
  
  
  return (
    <div>

<div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Students</h1>

        {/* Top controls */}
        <div className="flex justify-between items-center mb-4">
   
        
        </div>

        {/* Students Table */}
        <table className="w-full border-collapse bg-white text-left">
          <thead>
            <tr className="border-b">
              <th className="p-4">
                <input type="checkbox" />
              </th>
              <th className="p-4">Students</th>
              <th className="p-4">Email</th>
              <th className="p-4">Class</th>
              <th className="p-4">Division</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-100">
                <td className="p-4">
                  <input type="checkbox" />
                </td>
                <td className="p-4">{student.name}</td>
                <td className="p-4">{student.email}</td>
                <td className="p-4">{student.registrationDate}</td>
                <td className="p-4">{student.coursesTaken}</td>
                <td className="p-4">
                  <Link to='/studentDetails'>
                  <button className="text-blue-500 hover:underline mx-2">
                    Details
                  </button>
                  </Link>
                
                  <Link to="/feehistory">   <button className="text-blue-500 hover:underline mx-2">
                    view fee history
                  </button> </Link>
                  <Link to="/libaryhistory">
                  <button className="text-blue-500 hover:underline mx-2">
                    view libary records
                  </button>
                  </Link>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default StudentList