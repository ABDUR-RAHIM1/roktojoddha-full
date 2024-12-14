import React from 'react'
import AdminDashboard from '../../../Dashboard/AdminDashboard'
import TotalRequest from './Cards/TotalRequest'
import TotalVolunteer from './Cards/TotalVolunteer'
import TotalDonars from './Cards/TotalDonars'
import RecentDonars from './RecentInfo/RecentDonars'

export default function Dashboard() {


  return (
    <AdminDashboard>
      <div className="min-h-screen bg-gray-100 p-6">
        <h2 className="text-3xl font-semibold mb-6">Blood Donation Dashboard</h2>


        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <TotalDonars />
          <TotalRequest />
          <TotalVolunteer />
        </div>


        {/* Chart and Table Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Donations Chart */}
          <div className="     bg-white shadow-lg rounded-lg p-6 h-[450px] overflow-y-scroll ">
            <h3 className="text-xl font-semibold mb-4">Recent Donations</h3>
            {/* Placeholder for Chart */}
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">[Chart]</span>
            </div>
          </div>

          {/* Recent Donors Table */}
          <RecentDonars />
        </div>
      </div>
    </AdminDashboard>
  )
}
