import { Outlet } from '@tanstack/react-router';
import Sidebar from '../components/Sidebar.jsx';
const DashboardPage = () => {
  return (
     <div className="flex">
      <div className="hidden md:block">
  <Sidebar/>
      </div>
  <main className="flex-1 p-6 max-w-full overflow-hidden">
    <Outlet />
  </main>
    </div>
  )
}

export default DashboardPage
