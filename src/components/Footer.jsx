import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 py-10">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <h2 className="text-lg font-bold text-neutral-900">Zero Shop</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            A clean shopping experience focused on speed, clarity, and secure
            sign-in.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
            Quick Links
          </h3>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="bw-link bw-link-focus"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/items"
                className="bw-link bw-link-focus"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="bw-link bw-link-focus"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="bw-link bw-link-focus"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
            Built With
          </h3>
          <ul className="mt-3 grid gap-2 text-sm text-neutral-600">
            <li>Next.js App Router</li>
            <li>Tailwind CSS</li>
            <li>Firebase Auth</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-7xl border-t border-neutral-200 px-4 pt-6 text-center text-xs text-neutral-500 sm:px-6">
        Copyright 2026 Zero Shop. All rights reserved.
      </div>
    </footer>
  );
}
