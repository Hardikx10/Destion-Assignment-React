import React, { useState } from 'react';
import { Menu, X, Home, User, Settings, Bell, Search, LogIn, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-indigo-700 text-white transform transition-transform duration-300 ease-in-out z-30 lg:relative lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 bg-indigo-800">
          <div className="text-2xl font-bold">Dashboard</div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white hover:text-gray-200">
            <X size={24} />
          </button>
        </div>
        <nav className="mt-6">
          <a href="#" className="flex items-center py-3 px-6 text-gray-100 hover:bg-indigo-600 transition-colors duration-200">
            <Home size={20} className="mr-3" />
            Dashboard
          </a>
          <a href="#" className="flex items-center py-3 px-6 text-gray-100 hover:bg-indigo-600 transition-colors duration-200">
            <User size={20} className="mr-3" />
            Profile
          </a>
          <a href="#" className="flex items-center py-3 px-6 text-gray-100 hover:bg-indigo-600 transition-colors duration-200">
            <Settings size={20} className="mr-3" />
            Settings
          </a>
        </nav>
        {/* New Login and Signup buttons */}
        <div className="mt-auto p-4">
          <button
            onClick={() => navigate('/login')}
            className="w-full mb-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
          >
            <LogIn size={20} className="mr-2" />
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
          >
            <UserPlus size={20} className="mr-2" />
            Signup
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  className="lg:hidden text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu size={24} />
                </button>
                <h1 className="ml-3 text-2xl font-semibold text-gray-800">Dashboard</h1>
              </div>
              <div className="flex items-center">
                <div className="relative mx-4">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Search size={20} className="text-gray-400" />
                  </span>
                  <input
                    className="form-input w-full sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600"
                    type="text"
                    placeholder="Search"
                  />
                </div>
                <button className="p-1 text-gray-400 hover:text-gray-500 focus:outline-none">
                  <Bell size={24} />
                </button>
                <img
                  className="h-8 w-8 rounded-full ml-4"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Dashboard content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
                <p className="text-gray-500 text-xl">Dashboard content goes here</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;