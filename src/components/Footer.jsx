import Link from "next/link";

export default function Footer() {
  return (
    <footer className="ui-footer py-10">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <h2 className="ui-strong text-lg font-bold">Zero Shop</h2>
          <p className="ui-muted mt-3 text-sm leading-6">
            A modern shopping experience focused on discoverability, accessibility, and secure sign-in.
          </p>
          <p className="ui-muted mt-4 text-sm">Contact: hello@zeroshop.example</p>
        </div>

        <div>
          <h3 className="ui-strong text-sm font-semibold uppercase tracking-wide">Quick Links</h3>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <Link href="/" className="bw-link bw-link-focus">
                Home
              </Link>
            </li>
            <li>
              <Link href="/items" className="bw-link bw-link-focus">
                Explore
              </Link>
            </li>
            <li>
              <Link href="/about" className="bw-link bw-link-focus">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="bw-link bw-link-focus">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="ui-strong text-sm font-semibold uppercase tracking-wide">Account</h3>
          <ul className="ui-muted mt-3 grid gap-2 text-sm">
            <li>
              <Link href="/login" className="bw-link bw-link-focus">
                Login
              </Link>
            </li>
            <li>
              <Link href="/items/add" className="bw-link bw-link-focus">
                Add Product
              </Link>
            </li>
            <li>
              <Link href="/items/manage" className="bw-link bw-link-focus">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="ui-strong text-sm font-semibold uppercase tracking-wide">Social</h3>
          <ul className="ui-muted mt-3 grid gap-2 text-sm">
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="bw-link bw-link-focus">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="bw-link bw-link-focus">
                X / Twitter
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="bw-link bw-link-focus">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ui-subtle ui-border mx-auto mt-8 w-full max-w-7xl border-t px-4 pt-6 text-center text-xs sm:px-6">
        Copyright 2026 Zero Shop. All rights reserved.
      </div>
    </footer>
  );
}

