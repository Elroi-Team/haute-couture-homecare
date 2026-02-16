import { Metadata } from "next";
import Link from "next/link";
import { User, FileText, Clock, Settings, LogOut } from "lucide-react";

export const metadata: Metadata = {
  title: "My Account",
  description: "Manage your Haute Couture Home Care client account.",
};

// Placeholder data - replace with actual data from Supabase
const mockUser = {
  name: "Jane Smith",
  email: "jane@example.com",
  phone: "(555) 123-4567",
  memberSince: "January 2024",
};

const mockRequests = [
  {
    id: "REQ-001",
    date: "2024-01-15",
    services: ["Companion Care", "Transportation"],
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "REQ-002",
    date: "2024-01-10",
    services: ["Personal Care"],
    status: "Completed",
    statusColor: "bg-gray-100 text-gray-800",
  },
];

export default function AccountPage() {
  // TODO: Implement authentication check
  // const { user } = await getUser();
  // if (!user) redirect("/login");

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 min-h-screen bg-ivory">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h1 className="font-serif text-3xl text-charcoal mb-2">
              Welcome, {mockUser.name}
            </h1>
            <p className="text-charcoal-light">
              Client since {mockUser.memberSince}
            </p>
          </div>
          <Link
            href="/request-care"
            className="btn btn-primary mt-4 md:mt-0"
          >
            New Care Request
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Care Requests */}
            <section className="bg-warm-white border border-soft-gray p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl text-charcoal">
                  Care Request History
                </h2>
                <FileText size={20} className="text-gold" />
              </div>

              {mockRequests.length > 0 ? (
                <div className="space-y-4">
                  {mockRequests.map((request) => (
                    <div
                      key={request.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-ivory border border-soft-gray"
                    >
                      <div>
                        <p className="font-medium text-charcoal">
                          {request.id}
                        </p>
                        <p className="text-sm text-charcoal-light">
                          {request.services.join(", ")}
                        </p>
                        <p className="text-sm text-muted-gray">
                          Submitted: {request.date}
                        </p>
                      </div>
                      <span
                        className={`mt-2 sm:mt-0 px-3 py-1 text-xs font-medium rounded-full ${request.statusColor}`}
                      >
                        {request.status}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-charcoal-light text-center py-8">
                  No care requests yet.{" "}
                  <Link href="/request-care" className="text-gold">
                    Submit your first request
                  </Link>
                </p>
              )}
            </section>

            {/* Upcoming Appointments */}
            <section className="bg-warm-white border border-soft-gray p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl text-charcoal">
                  Upcoming Care
                </h2>
                <Clock size={20} className="text-gold" />
              </div>

              <p className="text-charcoal-light text-center py-8">
                No upcoming appointments scheduled.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Account Info */}
            <section className="bg-warm-white border border-soft-gray p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl text-charcoal">
                  Account Details
                </h2>
                <User size={20} className="text-gold" />
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-muted-gray">Name</p>
                  <p className="text-charcoal">{mockUser.name}</p>
                </div>
                <div>
                  <p className="text-muted-gray">Email</p>
                  <p className="text-charcoal">{mockUser.email}</p>
                </div>
                <div>
                  <p className="text-muted-gray">Phone</p>
                  <p className="text-charcoal">{mockUser.phone}</p>
                </div>
              </div>

              <Link
                href="/account/settings"
                className="flex items-center gap-2 mt-6 text-sm text-gold hover:text-gold-dark"
              >
                <Settings size={16} />
                Edit Account Settings
              </Link>
            </section>

            {/* Quick Actions */}
            <section className="bg-charcoal p-8 text-ivory">
              <h2 className="font-serif text-xl mb-6">Need Help?</h2>
              <p className="text-ivory/70 text-sm mb-6">
                Our care team is here to assist you with any questions.
              </p>
              <Link
                href="/contact"
                className="btn btn-gold w-full text-sm mb-3"
              >
                Contact Us
              </Link>
              <button className="flex items-center justify-center gap-2 w-full py-2 text-sm text-ivory/70 hover:text-ivory">
                <LogOut size={16} />
                Sign Out
              </button>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
