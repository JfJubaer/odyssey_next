"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import ThemeToggle from "@/components/ThemeToggle";

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
    <nav className="ui-nav sticky top-0 z-50 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="bw-link bw-link-focus text-xl font-bold tracking-tight">
          Zero Shop
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="bw-link bw-link-focus text-sm font-medium">
            Home
          </Link>
          <Link href="/items" className="bw-link bw-link-focus text-sm font-medium">
            Explore
          </Link>

          {!user ? (
            <>
              <Link href="/about" className="bw-link bw-link-focus text-sm font-medium">
                About
              </Link>
              <ThemeToggle />
              <Link href="/login" className="bw-btn bw-link-focus px-4 py-2 text-sm">
                Login
              </Link>
            </>
          ) : (
            <>
              <Link href="/items/manage" className="bw-link bw-link-focus text-sm font-medium">
                Dashboard
              </Link>
              <Link href="/blog" className="bw-link bw-link-focus text-sm font-medium">
                Blog
              </Link>
              <ThemeToggle />

              <div className="relative">
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="bw-btn-ghost bw-link-focus flex items-center gap-2 px-3 py-2 text-sm"
                >
                  <span className="ui-border ui-soft-bg ui-strong flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold">
                    {user.email?.charAt(0).toUpperCase()}
                  </span>
                  <span>Profile</span>
                </button>

                {dropdownOpen && (
                  <div className="surface-card fade-in absolute right-0 mt-3 w-64 p-3">
                    <p className="ui-subtle text-xs">Signed in as</p>
                    <p className="ui-strong mb-3 truncate text-sm font-semibold">{user.email}</p>

                    <div className="grid gap-1">
                      <Link
                        href="/items/add"
                        className="bw-link bw-link-focus ui-soft-hover rounded-lg px-3 py-2 text-sm"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Add Product
                      </Link>
                      <Link
                        href="/items/manage"
                        className="bw-link bw-link-focus ui-soft-hover rounded-lg px-3 py-2 text-sm"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Manage Products
                      </Link>
                      <Link
                        href="/about"
                        className="bw-link bw-link-focus ui-soft-hover rounded-lg px-3 py-2 text-sm"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Profile Details
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
            </>
          )}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bw-link bw-link-focus md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          ?
        </button>
      </div>

      {menuOpen && (
        <div className="fade-in ui-border ui-soft-bg border-t px-4 pb-4 md:hidden sm:px-6">
          <div className="grid gap-2 pt-3">
            <div className="pb-1">
              <ThemeToggle />
            </div>
            <Link
              href="/"
              className="bw-link bw-link-focus ui-soft-hover rounded-lg px-2 py-2 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/items"
              className="bw-link bw-link-focus ui-soft-hover rounded-lg px-2 py-2 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Explore
            </Link>

            {!user ? (
              <>
                <Link
                  href="/about"
                  className="bw-link bw-link-focus ui-soft-hover rounded-lg px-2 py-2 text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/login"
                  className="bw-btn bw-link-focus mt-2 px-4 py-2 text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/items/manage"
                  className="bw-link bw-link-focus ui-soft-hover rounded-lg px-2 py-2 text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/blog"
                  className="bw-link bw-link-focus ui-soft-hover rounded-lg px-2 py-2 text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/items/add"
                  className="bw-link bw-link-focus ui-soft-hover rounded-lg px-2 py-2 text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Add Product
                </Link>
                <button
                  onClick={handleLogout}
                  className="bw-btn bw-link-focus mt-2 px-4 py-2 text-sm"
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

