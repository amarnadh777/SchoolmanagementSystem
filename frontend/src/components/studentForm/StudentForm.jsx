import React, { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    division: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.class.trim()) newErrors.class = "Class name is required.";
    if (!formData.division.trim()) newErrors.division = "Division is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Data Submitted: ", formData);
      setSubmittedData(formData);
      setErrors({}); // Clear errors on successful submit
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">
          Create Student Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Program */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Class</label>
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleChange}
              placeholder="Enter class name"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            {errors.class && <p className="text-red-500 text-sm">{errors.class}</p>}
          </div>

          {/* Division */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Division</label>
            <input
              type="text"
              name="division"
              value={formData.division}
              onChange={handleChange}
              placeholder="Enter division name"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            {errors.division && <p className="text-red-500 text-sm">{errors.division}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter full address"
              rows="3"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Submit
          </button>
        </form>

        {/* Display submitted data */}
        {submittedData && (
          <div className="mt-6 p-4 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Submitted Details:</h3>
            <ul className="text-gray-700 space-y-1">
              <li>
                <strong>Name:</strong> {submittedData.name}
              </li>
              <li>
                <strong>Email:</strong> {submittedData.email}
              </li>
              <li>
                <strong>Phone:</strong> {submittedData.phone}
              </li>
              <li>
                <strong>Class:</strong> {submittedData.class}
              </li>
              <li>
                <strong>Division:</strong> {submittedData.division}
              </li>
              <li>
                <strong>Address:</strong> {submittedData.address}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentForm;
