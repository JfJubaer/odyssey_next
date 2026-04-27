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
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="bw-link bw-link-focus text-xl font-bold tracking-tight"
        >
          ShopNest
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="bw-link bw-link-focus text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="/items"
            className="bw-link bw-link-focus text-sm font-medium"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="bw-link bw-link-focus text-sm font-medium"
          >
            About
          </Link>

          {!user ? (
            <Link
              href="/login"
              className="bw-btn bw-link-focus px-4 py-2 text-sm"
            >
              Login
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="bw-btn-ghost bw-link-focus flex items-center gap-2 px-3 py-2 text-sm"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 text-xs font-semibold text-neutral-800">
                  {user.email?.charAt(0).toUpperCase()}
                </span>
                <span className="max-w-40 truncate">{user.email}</span>
              </button>

              {dropdownOpen && (
                <div className="surface-card fade-in absolute right-0 mt-3 w-64 p-3">
                  <p className="text-xs text-neutral-500">Logged in as</p>
                  <p className="mb-3 truncate text-sm font-semibold text-neutral-900">
                    {user.email}
                  </p>

                  <div className="grid gap-1">
                    <Link
                      href="/items/add"
                      className="bw-link bw-link-focus rounded-lg px-3 py-2 text-sm hover:bg-neutral-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Add Product
                    </Link>
                    <Link
                      href="/items/manage"
                      className="bw-link bw-link-focus rounded-lg px-3 py-2 text-sm hover:bg-neutral-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Manage Products
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="bw-btn-ghost bw-link-focus mt-1 w-full px-3 py-2 text-left text-sm"
                    >
                      Logout
                    </button>
                  </div>
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
        <div className="fade-in border-t border-neutral-200 bg-white px-4 pb-4 md:hidden sm:px-6">
          <div className="grid gap-2 pt-3">
            <Link
              href="/"
              className="bw-link bw-link-focus rounded-lg px-2 py-2 text-sm hover:bg-neutral-100"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/items"
              className="bw-link bw-link-focus rounded-lg px-2 py-2 text-sm hover:bg-neutral-100"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="bw-link bw-link-focus rounded-lg px-2 py-2 text-sm hover:bg-neutral-100"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            {!user ? (
              <Link
                href="/login"
                className="bw-btn bw-link-focus mt-2 px-4 py-2 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            ) : (
              <>
                <div className="surface-soft mt-2 rounded-xl p-3">
                  <p className="text-xs text-neutral-500">Logged in as</p>
                  <p className="truncate text-sm font-semibold">{user.email}</p>
                </div>

                <Link
                  href="/items/add"
                  className="bw-link bw-link-focus rounded-lg px-2 py-2 text-sm hover:bg-neutral-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Add Product
                </Link>
                <Link
                  href="/items/manage"
                  className="bw-link bw-link-focus rounded-lg px-2 py-2 text-sm hover:bg-neutral-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Manage Products
                </Link>

                <button
                  onClick={handleLogout}
                  className="bw-btn-ghost bw-link-focus mt-2 px-4 py-2 text-sm"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
