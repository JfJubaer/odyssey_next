"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, logoutUser } = useAuth();

  const handleLogout = async () => {
    await logoutUser();
    setDropdownOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          ShopNest
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="/items"
            className="hover:text-blue-600 transition"
          >
            Items
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            href="/dashboard"
            className="hover:text-blue-600 transition"
          >
            Dashboard
          </Link>

          {!user ? (
            <Link
              href="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Login
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100"
              >
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  {user.displayName?.charAt(0).toUpperCase()}
                </span>
                <span>{user.displayName}</span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white border rounded-xl shadow-lg p-4">
                  <p className="text-sm text-gray-500">Logged in as</p>
                  <p className="font-semibold text-gray-900 truncate mb-4">
                    {user.email}
                  </p>

                  <Link
                    href="/add-product"
                    className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    Add Product
                  </Link>

                  <Link
                    href="/manage-products"
                    className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    Manage Products
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 mt-2"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <Link href="/">Home</Link>
          <Link href="/items">Items</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>

          {!user ? (
            <Link
              href="/login"
              className="bg-blue-600 text-white py-2 rounded text-center"
            >
              Login
            </Link>
          ) : (
            <>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Logged in as</p>
                <p className="font-semibold truncate">{user.displayName}</p>
              </div>

              <Link href="/add-product">Add Product</Link>
              <Link href="/manage-products">Manage Products</Link>

              <button
                onClick={handleLogout}
                className="bg-red-600 text-white py-2 rounded"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
