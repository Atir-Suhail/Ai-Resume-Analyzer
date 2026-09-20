import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Navbar />

        <main className="
p-6
min-h-screen
bg-gradient-to-br
from-slate-950
via-slate-900
to-slate-950
">
          {children}
        </main>
      </div>
    </div>
  );
}