import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";

const feeHistory = [{
    id:1,
    feetype:"Exam fee",
    paymentdate:"12-02-2002",
    amount:"200",
    status:"Paid"
} ,

{
    id:2,
    feetype:"Mess fee",
    paymentdate:"13-02-2002",
    amount:"150",
    status:"Partilay paid"
},
{
    id:2,
    feetype:"Mess fee",
    paymentdate:"13-02-2002",
    amount:"150",
    status:"Partilay paid"
},
{
    id:2,
    feetype:"Mess fee",
    paymentdate:"13-02-2002",
    amount:"150",
    status:"Partilay paid"
},{
    id:2,
    feetype:"Mess fee",
    paymentdate:"13-02-2002",
    amount:"150",
    status:"Partilay paid"
},
,{
    id:2,
    feetype:"Clening fee",
    paymentdate:"13-02-2002",
    amount:"150",
    status:"Failed"
}
]

function FeesHistory() {

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

<div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">
        Fee History{" "}
        
          </h1>
          
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-gray-600 text-sm border-b">
                <th className="py-2 px-4 text-left">Fee type</th>
                <th className="py-2 px-4 text-left">Payment date</th>
                <th className="py-2 px-4 text-left">Amount</th>
                <th className="py-2 px-4 text-left">Remark</th>
                <th className="py-2 px-4 text-left">Status</th>
                
           
                <th className="py-2 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {feeHistory.map((each) => (
                <tr
                  key={each.id}
                  className={`text-gray-700 text-sm ${
                    selectedInvoices.includes(each.id)
                      ? "bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <td className="py-2 px-4 flex items-center space-x-2">
            
                    <span>{each.feetype}</span>
                  </td>
                  <td className="py-2 px-4">{each.paymentdate}</td>
                  <td
                    className={`py-2 px-4 ${
                    each.status === "Paid"
                        ? "text-green-600" 
                        :  each.status ==='Partilay paid' ?   "text-yellow-500" : "text-red-500"
                    }`}
                  >
                    {each.status}
                  </td>
                  <td className="py-2 px-4">{each.amount}</td>
                  <td className="py-2 px-4">{each.status}</td>
                  <td>
                  <Link to='/editfee'>
                Edit

                </Link>
                  </td>
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
  )
}

export default FeesHistory