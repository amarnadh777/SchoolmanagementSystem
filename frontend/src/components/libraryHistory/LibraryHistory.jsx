import React, { useState } from 'react'

function LibraryHistory() {
    const billingData = [
        {
          id: 1,
          invoice: "Invoice #011 - Jun 2026",
          date: "June 25, 2026",
          status: "Paid",
          amount: "USD $25.00",
          plan: "Basic",
        },
        {
          id: 2,
          invoice: "Invoice #010 - May 2026",
          date: "June 25, 2026",
          status: "Paid",
          amount: "USD $35.00",
          plan: "Pro",
        },
        {
          id: 3,
          invoice: "Invoice #009 - Apr 2026",
          date: "June 25, 2026",
          status: "Failed",
          amount: "USD $40.00",
          plan: "Premium",
        },
        {
          id: 4,
          invoice: "Invoice #008 - Mar 2026",
          date: "June 25, 2026",
          status: "Paid",
          amount: "USD $15.00",
          plan: "Elite",
        },
        {
          id: 5,
          invoice: "Invoice #007 - Feb 2026",
          date: "June 25, 2026",
          status: "Paid",
          amount: "USD $25.00",
          plan: "Pro",
        },
        {
          id: 6,
          invoice: "Invoice #006 - Jan 2026",
          date: "June 25, 2026",
          status: "Failed",
          amount: "USD $35.00",
          plan: "Basic",
        },
        {
          id: 7,
          invoice: "Invoice #005 - Dec 2025",
          date: "June 25, 2026",
          status: "Paid",
          amount: "USD $25.00",
          plan: "Basic",
        },
      ];
      const [selectedInvoices, setSelectedInvoices] = useState([]);
    
        const handleCheckboxChange = (id) => {
          setSelectedInvoices((prev) =>
            prev.includes(id)
              ? prev.filter((invoiceId) => invoiceId !== id)
              : [...prev, id]
          );
        };
  return (
    <div>

<div>

<div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">
        Libary history{" "}
            <span className="text-blue-600 text-sm font-normal">187 Total</span>
          </h1>
          <div className="flex space-x-4">
            <button className="border px-4 py-2 rounded hover:bg-gray-100">
              Export
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Download
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-gray-600 text-sm border-b">
                <th className="py-2 px-4 text-left">Book name</th>
                <th className="py-2 px-4 text-left">Borrow date</th>
                <th className="py-2 px-4 text-left">Return date</th>
                <th className="py-2 px-4 text-left">Amount</th>

                <th className="py-2 px-4 text-left">Status</th>
        
              </tr>
            </thead>
            <tbody>
              {billingData.map((invoice) => (
                <tr
                  key={invoice.id}
                  className={`text-gray-700 text-sm ${
                    selectedInvoices.includes(invoice.id)
                      ? "bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <td className="py-2 px-4 flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedInvoices.includes(invoice.id)}
                      onChange={() => handleCheckboxChange(invoice.id)}
                      className="w-4 h-4"
                    />
                    <span>{invoice.invoice}</span>
                  </td>
                  <td className="py-2 px-4">{invoice.date}</td>
                  <td
                    className={`py-2 px-4 ${
                      invoice.status === "Paid"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {invoice.status}
                  </td>
                  <td className="py-2 px-4">{invoice.amount}</td>
                  <td className="py-2 px-4">{invoice.plan}</td>
                  <td className="py-2 px-4">
                    <button className="text-blue-500 hover:underline">
                      ⬇
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <button className="hover:underline">Previous</button>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className={`px-3 py-1 rounded ${
                  num === 5 ? "bg-blue-600 text-white" : "hover:bg-gray-200"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          <button className="hover:underline">Next</button>
          <span>Showing 100 of 1,000 results</span>
        </div>
      </div>
    </div>
    </div>
        
    </div>
  )
}

export default LibraryHistory