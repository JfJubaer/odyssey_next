"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">ShopNest</h1>

        {/* Desktop Menu */}
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
            href="/contact"
            className="hover:text-blue-600 transition"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <Link href="/">Home</Link>
          <Link href="/items">Items</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <button className="bg-blue-600 text-white py-2 rounded">Login</button>
        </div>
      )}
    </nav>
  );
}
