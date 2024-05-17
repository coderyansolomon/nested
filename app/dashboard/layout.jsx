import Link from 'next/link';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-gray-100 p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard">
              <span className="block p-2 hover:bg-gray-700 rounded cursor-pointer">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings">
              <span className="block p-2 hover:bg-gray-700 rounded cursor-pointer">Dashboard Settings</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile">
              <span className="block p-2 hover:bg-gray-700 rounded cursor-pointer">Dashboard Profile</span>
            </Link>
          </li>
        </ul>
      </aside>
      <section className="flex-1 p-8 bg-gray-900 text-gray-100">{children}</section>
    </div>
  );
};

export default DashboardLayout;
