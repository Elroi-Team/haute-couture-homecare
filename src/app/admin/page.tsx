import { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  FileText,
  UserPlus,
  Settings,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Haute Couture Home Care administrative dashboard.",
};

// Placeholder data - replace with actual data from Supabase
const stats = [
  { label: "Pending Requests", value: 3, icon: Clock, color: "text-yellow-600" },
  { label: "Active Clients", value: 12, icon: Users, color: "text-green-600" },
  { label: "Completed Requests", value: 47, icon: CheckCircle, color: "text-blue-600" },
  { label: "Pending Approvals", value: 2, icon: AlertCircle, color: "text-orange-600" },
];

const recentRequests = [
  {
    id: "REQ-003",
    name: "John Smith",
    date: "2024-01-16",
    services: ["Personal Care", "Companion Care"],
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "REQ-004",
    name: "Mary Johnson",
    date: "2024-01-15",
    services: ["Memory Care Support"],
    status: "In Review",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "REQ-005",
    name: "Robert Williams",
    date: "2024-01-14",
    services: ["Respite Care"],
    status: "Approved",
    statusColor: "bg-green-100 text-green-800",
  },
];

const pendingUsers = [
  {
    id: 1,
    name: "Sarah Thompson",
    email: "sarah@example.com",
    phone: "(555) 234-5678",
    registeredAt: "2024-01-16",
  },
  {
    id: 2,
    name: "Michael Brown",
    email: "michael@example.com",
    phone: "(555) 345-6789",
    registeredAt: "2024-01-15",
  },
];

export default function AdminDashboardPage() {
  // TODO: Implement admin authentication check
  // const { user, role } = await getUser();
  // if (!user || !['admin', 'intake_coordinator'].includes(role)) {
  //   redirect("/login");
  // }

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 min-h-screen bg-ivory">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h1 className="font-serif text-3xl text-charcoal mb-2">
              Admin Dashboard
            </h1>
            <p className="text-charcoal-light">
              Manage care requests, users, and settings
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/admin/users" className="btn btn-secondary text-sm">
              <UserPlus size={16} />
              Add User
            </Link>
            <Link href="/admin/settings" className="btn btn-primary text-sm">
              <Settings size={16} />
              Settings
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-warm-white border border-soft-gray p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon size={24} className={stat.color} />
                <span className="font-serif text-3xl text-charcoal">
                  {stat.value}
                </span>
              </div>
              <p className="text-sm text-charcoal-light">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Care Requests */}
          <div className="lg:col-span-2">
            <section className="bg-warm-white border border-soft-gray p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl text-charcoal">
                  Recent Care Requests
                </h2>
                <Link
                  href="/admin/requests"
                  className="text-sm text-gold hover:text-gold-dark"
                >
                  View All
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-soft-gray">
                      <th className="text-left py-3 font-medium text-charcoal">
                        ID
                      </th>
                      <th className="text-left py-3 font-medium text-charcoal">
                        Client
                      </th>
                      <th className="text-left py-3 font-medium text-charcoal hidden md:table-cell">
                        Services
                      </th>
                      <th className="text-left py-3 font-medium text-charcoal">
                        Status
                      </th>
                      <th className="text-right py-3 font-medium text-charcoal">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentRequests.map((request) => (
                      <tr
                        key={request.id}
                        className="border-b border-soft-gray last:border-0"
                      >
                        <td className="py-4 text-charcoal">{request.id}</td>
                        <td className="py-4">
                          <p className="text-charcoal">{request.name}</p>
                          <p className="text-muted-gray text-xs">
                            {request.date}
                          </p>
                        </td>
                        <td className="py-4 text-charcoal-light hidden md:table-cell">
                          {request.services.join(", ")}
                        </td>
                        <td className="py-4">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${request.statusColor}`}
                          >
                            {request.status}
                          </span>
                        </td>
                        <td className="py-4 text-right">
                          <Link
                            href={`/admin/requests/${request.id}`}
                            className="text-gold hover:text-gold-dark"
                          >
                            Review
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Pending User Approvals */}
          <div>
            <section className="bg-warm-white border border-soft-gray p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl text-charcoal">
                  Pending Approvals
                </h2>
                <Users size={20} className="text-gold" />
              </div>

              {pendingUsers.length > 0 ? (
                <div className="space-y-4">
                  {pendingUsers.map((user) => (
                    <div
                      key={user.id}
                      className="p-4 bg-ivory border border-soft-gray"
                    >
                      <p className="font-medium text-charcoal">{user.name}</p>
                      <p className="text-sm text-charcoal-light">{user.email}</p>
                      <p className="text-sm text-muted-gray">{user.phone}</p>
                      <p className="text-xs text-muted-gray mt-2">
                        Registered: {user.registeredAt}
                      </p>
                      <div className="flex gap-2 mt-4">
                        <button className="flex-1 py-2 text-sm bg-green-600 text-white hover:bg-green-700">
                          Approve
                        </button>
                        <button className="flex-1 py-2 text-sm border border-red-600 text-red-600 hover:bg-red-50">
                          Decline
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-charcoal-light text-center py-8">
                  No pending user approvals.
                </p>
              )}

              <Link
                href="/admin/users"
                className="block mt-6 text-center text-sm text-gold hover:text-gold-dark"
              >
                Manage All Users
              </Link>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
