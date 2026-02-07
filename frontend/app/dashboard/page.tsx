import Link from 'next/link';
import { Eye, Search } from 'lucide-react';
import DashboardNavbar from '@/components/dashboard-navbar';

export default function DashboardPage() {
  // Mock data for demonstration
  const stats = {
    totalNEOs: 14205,
    weekChange: '+2.1% from this week',
    hazardousObjects: 8,
    alertStatus: 'Immediate attention required',
    closestApproach: {
      distance: '0.5 LD',
      asteroid: '2023 DZ2',
    },
    fastestVelocity: {
      speed: '45k',
      unit: 'km/h',
      text: 'Relative to Earth',
    },
  };

  const asteroids = [
    {
      id: '2023-dz2',
      name: '2023 DZ2',
      designation: 'Apollo class',
      diameter: 0.045,
      velocity: 20.900,
      missDistance: { km: 170.600, ld: 0.5 },
      riskLevel: 'High',
    },
    {
      id: '1999-rq36',
      name: '1999 RQ36',
      designation: 'Bennu',
      diameter: 0.490,
      velocity: 101.900,
      missDistance: { km: 2.3, ld: null },
      riskLevel: 'Medium',
    },
    {
      id: '2001-fo32',
      name: '2001 FO32',
      designation: 'Apollo class',
      diameter: 0.910,
      velocity: 123.500,
      missDistance: { km: 2.0, ld: 2.1 },
      riskLevel: 'Low',
    },
    {
      id: '99942',
      name: 'Apophis',
      designation: '99942',
      diameter: 0.370,
      velocity: 30.700,
      missDistance: { km: 31.000, ld: null },
      riskLevel: 'High',
    },
    {
      id: '2024-bx1',
      name: '2024 BX1',
      designation: 'Aten class',
      diameter: 0.001,
      velocity: 52.000,
      missDistance: { text: 'Impact', detail: 'Hit atmosphere' },
      riskLevel: 'Low',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <DashboardNavbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Mission Control Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">Mission Control</h1>
          <p className="text-sm sm:text-base text-gray-400">Real-time tracking of Near-Earth Objects (NEOs)</p>
          <div className="text-sm text-gray-500 mt-2 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Last updated: 1 mins 00:04:32
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {/* Total NEOs */}
          <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 sm:p-6">
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <h3 className="text-gray-400 text-sm font-medium">Total NEOs</h3>
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold mb-1">{stats.totalNEOs.toLocaleString()}</div>
            <div className="text-xs text-green-400">{stats.weekChange}</div>
          </div>

          {/* Hazardous Objects */}
          <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 sm:p-6">
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <h3 className="text-gray-400 text-sm font-medium">Hazardous Objects</h3>
              <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                </svg>
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold mb-1">{stats.hazardousObjects}</div>
            <div className="text-xs text-red-400">{stats.alertStatus}</div>
          </div>

          {/* Closest Approach */}
          <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 sm:p-6">
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <h3 className="text-gray-400 text-sm font-medium">Closest Approach</h3>
              <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                </svg>
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold mb-1">{stats.closestApproach.distance}</div>
            <div className="text-xs text-gray-400">Object: {stats.closestApproach.asteroid}</div>
          </div>

          {/* Fastest Velocity */}
          <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 sm:p-6">
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <h3 className="text-gray-400 text-sm font-medium">Fastest Velocity</h3>
              <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                </svg>
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold mb-1">
              {stats.fastestVelocity.speed}
              <span className="text-sm text-gray-400 ml-1">{stats.fastestVelocity.unit}</span>
            </div>
            <div className="text-xs text-gray-400">{stats.fastestVelocity.text}</div>
          </div>
        </div>

        {/* Asteroid Data Feed */}
        <div className="bg-[#0d1117] border border-gray-800 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-gray-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4">
              <h2 className="text-lg sm:text-xl font-semibold">Asteroid Data Feed</h2>
              <button className="text-sm text-blue-400 hover:text-blue-300 self-start sm:self-auto">Export CSV</button>
            </div>
            
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search by Asteroid Name or ID"
                  className="w-full bg-[#0a0e1a] border border-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex gap-2 sm:gap-3">
                <button className="flex-1 sm:flex-none px-4 py-2 bg-[#0a0e1a] border border-gray-800 rounded-lg text-sm hover:border-gray-700 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  <span className="hidden sm:inline">Filters</span>
                </button>
                <button className="flex-1 sm:flex-none px-4 py-2 bg-[#0a0e1a] border border-gray-800 rounded-lg text-sm hover:border-gray-700 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-500" />
                  <span className="hidden sm:inline">Hazardous Only</span>
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800 text-xs text-gray-400 uppercase">
                  <th className="text-left px-6 py-4 font-medium">Name / Designation</th>
                  <th className="text-left px-6 py-4 font-medium">Diameter (km)</th>
                  <th className="text-left px-6 py-4 font-medium">Velocity (km/h)</th>
                  <th className="text-left px-6 py-4 font-medium">Miss Distance</th>
                  <th className="text-left px-6 py-4 font-medium">Risk Level</th>
                  <th className="text-left px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {asteroids.map((asteroid, idx) => (
                  <tr key={idx} className="border-b border-gray-800 hover:bg-[#161b22] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                          <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">{asteroid.name}</div>
                          <div className="text-xs text-gray-500">{asteroid.designation}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">{asteroid.diameter}</td>
                    <td className="px-6 py-4 text-sm">{asteroid.velocity.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm">
                      {asteroid.missDistance.text ? (
                        <div>
                          <div>{asteroid.missDistance.text}</div>
                          <div className="text-xs text-gray-500">{asteroid.missDistance.detail}</div>
                        </div>
                      ) : (
                        <div>
                          <div>{(asteroid.missDistance.km ?? 0).toLocaleString()} km</div>
                          {asteroid.missDistance.ld && (
                            <div className="text-xs text-gray-500">{asteroid.missDistance.ld} LD</div>
                          )}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          asteroid.riskLevel === 'High'
                            ? 'bg-red-500/10 text-red-400'
                            : asteroid.riskLevel === 'Medium'
                            ? 'bg-yellow-500/10 text-yellow-400'
                            : 'bg-green-500/10 text-green-400'
                        }`}
                      >
                        {asteroid.riskLevel}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/dashboard/asteroids/${asteroid.id}`}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-800 flex items-center justify-between text-sm">
            <div className="text-gray-400">
              Showing <span className="font-medium text-white">1</span> to <span className="font-medium text-white">5</span> of{' '}
              <span className="font-medium text-white">14,205</span> results
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-[#0a0e1a] border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Solar System Overview */}
        <div className="mt-8 bg-[#0d1117] border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Solar System Overview</h2>
          <p className="text-gray-400 text-sm mb-6">Live positions of tracked NEOs relative to Earth</p>
          
          <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#1a1f2e] rounded-lg overflow-hidden">
            {/* Placeholder for visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 mx-auto mb-4 shadow-lg shadow-yellow-500/50" />
                <div className="flex gap-8 items-center justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400" />
                    <span className="text-xs text-gray-400">Earth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="text-xs text-gray-400">Hazardous</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
