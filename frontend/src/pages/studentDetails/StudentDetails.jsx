import React from 'react'

function StudentDetails() {
  return (
    <div className="flex bg-gray-100 min-h-screen justify-center items-center">
    {/* Container */}
    <div className="bg-white shadow-lg rounded-lg w-11/12 grid grid-cols-3 gap-8 p-8">
      {/* Left Section: Profile */}
      <div className="col-span-1 bg-gray-50 rounded-md p-6">
        <div className="text-center mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="rounded-full mx-auto w-28 h-28 border-2 border-purple-600"
          />
          <h2 className="text-xl font-bold mt-2">Nancy Nguyen</h2>
          <p className="text-gray-500 text-sm">Student ID: 12346765</p>
        </div>
        <div className="space-y-4 text-sm text-gray-600">
          <div>
            <h3 className="font-semibold">PROGRAM</h3>
            <p>Bachelor of Arts (BA) 4 Year <br /> Major in Visual Arts</p>
          </div>
          <div>
            <h3 className="font-semibold">CAMPUS</h3>
            <p>Main Campus</p>
          </div>
          <div>
            <h3 className="font-semibold">CURRENT ADDRESS</h3>
            <p>123 Fake Street, London, ON <br /> Canada A1B 2C4</p>
          </div>
          <div>
            <h3 className="font-semibold">PHONE</h3>
            <p>519-123-4567</p>
          </div>
          <div>
            <h3 className="font-semibold">EMAIL</h3>
            <p>name123@uwo.ca</p>
          </div>
        </div>
        <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md">
          Edit Contact Info
        </button>
      </div>

      {/* Right Section: Stats */}
      <div className="col-span-2">
        {/* Tabs */}
        <div className="flex items-center space-x-8 mb-6">
          <h2 className="text-lg font-semibold text-purple-600">Academic Stats</h2>
          <h2 className="text-lg font-semibold text-gray-400">
            Program Requirements
          </h2>
        </div>

        {/* Chart Section */}
        <div>
          <h3 className="text-gray-700 font-semibold mb-4">Term Overview</h3>
          <div className="relative bg-gray-100 h-32 mb-6">
            {/* Mock Line Graph */}
            <div className="absolute top-1/2 border-t border-gray-300 w-full"></div>
            <div className="absolute w-full flex justify-around">
              <div className="relative">
                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                <p className="text-gray-500 mt-1 text-xs text-center">VAS 2274</p>
              </div>
              <div className="relative">
                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                <p className="text-gray-500 mt-1 text-xs text-center">VAS 2275</p>
              </div>
              <div className="relative">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <p className="text-gray-500 mt-1 text-xs text-center">COMPSCI 1033</p>
              </div>
              <div className="relative">
                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                <p className="text-gray-500 mt-1 text-xs text-center">SOCIO 2050</p>
              </div>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 mb-1">VAS 2274</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="w-3/4 h-full bg-purple-600 rounded-full"></div>
              </div>
            </div>
            <div>
              <p className="text-gray-600 mb-1">COMPSCI 1033</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="w-2/4 h-full bg-purple-400 rounded-full"></div>
              </div>
            </div>
            <div>
              <p className="text-gray-600 mb-1">SOCIO 2050</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="w-5/6 h-full bg-purple-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Circular Progress Stats */}
        <div className="flex justify-around mt-8">
          <CircleProgress percentage={77} label="GRADE AVERAGE" />
          <CircleProgress percentage={90} label="ATTENDANCE" />
          <CircleProgress percentage={100} label="ASSIGNMENTS COMPLETED" />
        </div>
      </div>
    </div>
  </div>
);
}

const CircleProgress = ({ percentage, label }) => {
return (
  <div className="text-center">
    <div className="relative w-24 h-24 mb-2">
      <svg className="w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r="40%"
          stroke="gray"
          strokeWidth="8"
          fill="none"
        ></circle>
        <circle
          cx="50%"
          cy="50%"
          r="40%"
          stroke="purple"
          strokeWidth="8"
          strokeDasharray="251"
          strokeDashoffset={251 - (percentage / 100) * 251}
          fill="none"
        ></circle>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-lg">{percentage}%</span>
      </div>
    </div>
    <p className="text-gray-600 text-sm">{label}</p>
  </div>    
  )
}



export default StudentDetails