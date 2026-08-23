import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-sand text-ink">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col bg-espresso text-white md:flex">
        <div className="p-6 text-xl font-medium tracking-wide">C&C Admin</div>
        <nav className="flex-1 space-y-1 px-3">
          {[
            { name: 'Dashboard', href: '/admin' },
            { name: 'Bookings', href: '/admin/bookings' },
            { name: 'Services', href: '/admin/services' },
            { name: 'Offers', href: '/admin/offers' },
            { name: 'Availability', href: '/admin/availability' },
            { name: 'Settings', href: '/admin/settings' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm hover:bg-white/10"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-ivory flex flex-col h-screen">
        <div className="md:hidden bg-espresso text-white p-4 flex justify-between items-center shrink-0">
          <span className="font-medium">C&C Admin</span>
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
        <div className="p-4 md:p-8 flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
