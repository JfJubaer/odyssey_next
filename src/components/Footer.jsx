import Link from "next/link";

export default function Footer() {
  return (
    <footer className="ui-footer py-10">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <h2 className="ui-strong text-lg font-bold">Zero Shop</h2>
          <p className="ui-muted mt-3 text-sm leading-6">
            A clean shopping experience focused on speed, clarity, and secure
            sign-in.
          </p>
        </div>

        <div>
          <h3 className="ui-strong text-sm font-semibold uppercase tracking-wide">
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
          <h3 className="ui-strong text-sm font-semibold uppercase tracking-wide">
            Built With
          </h3>
          <ul className="ui-muted mt-3 grid gap-2 text-sm">
            <li>Next.js App Router</li>
            <li>Tailwind CSS</li>
            <li>Firebase Auth</li>
          </ul>
        </div>
      </div>

      <div className="ui-subtle ui-border mx-auto mt-8 w-full max-w-7xl border-t px-4 pt-6 text-center text-xs sm:px-6">
        Copyright 2026 Zero Shop. All rights reserved.
      </div>
    </footer>
  );
}
