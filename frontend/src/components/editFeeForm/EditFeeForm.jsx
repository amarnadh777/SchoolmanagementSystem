import React, { useState } from 'react'

function EditFeeForm() {

// Form state management
  const [formData, setFormData] = useState({
    studentId: "",
    feeType: "",
    amount: "",
    paymentDate: "",
    remarks: "",
  });

  const [errors, setErrors] = useState({});

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.studentId.trim()) newErrors.studentId = "Student ID is required.";
    if (!formData.feeType.trim()) newErrors.feeType = "Fee type is required.";
    if (!formData.amount || isNaN(formData.amount)) newErrors.amount = "Amount must be a number.";
    if (!formData.paymentDate) newErrors.paymentDate = "Payment date is required.";
    if (!formData.remarks.trim()) newErrors.remarks = "Remarks are required.";
    return newErrors;
  };
      // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted", formData);

      // Submit data to backend (mocked here)
      fetch("https://api.example.com/fees-remarks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Fees remark added successfully!");
          console.log(data);
          setFormData({
            studentId: "",
            feeType: "",
            amount: "",
            paymentDate: "",
            remarks: "",
          });
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  return (
    <div>

        
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-purple-600 mb-6">Edit Fees Remark</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Student ID */}
        <div>
          <label className="block text-gray-700 font-medium">Student ID</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter Student ID"
          />
          {errors.studentId && <p className="text-red-500 text-sm">{errors.studentId}</p>}
        </div>

        {/* Fee Type */}
        <div>
          <label className="block text-gray-700 font-medium">Fee Type</label>
          <input
            type="text"
            name="feeType"
            value={formData.feeType}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter Fee Type (e.g., Tuition, Library)"
          />
          {errors.feeType && <p className="text-red-500 text-sm">{errors.feeType}</p>}
        </div>

        {/* Amount */}
        <div>
          <label className="block text-gray-700 font-medium">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter Amount"
          />
          {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
        </div>

        {/* Payment Date */}
        <div>
          <label className="block text-gray-700 font-medium">Payment Date</label>
          <input
            type="date"
            name="paymentDate"
            value={formData.paymentDate}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.paymentDate && <p className="text-red-500 text-sm">{errors.paymentDate}</p>}
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-gray-700 font-medium">Remarks</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            rows="3"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter remarks about the payment status"
          ></textarea>
          {errors.remarks && <p className="text-red-500 text-sm">{errors.remarks}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default EditFeeForm