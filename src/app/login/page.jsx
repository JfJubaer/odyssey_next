"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const MIN_PASSWORD_LENGTH = 6;

export default function LoginPage() {
  const router = useRouter();
  const { loginUser, registerUser, googleLogin } = useAuth();

  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [googleSubmitting, setGoogleSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const emailError =
    email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? "Enter a valid email address."
      : "";

  const passwordError =
    password.length > 0 && password.length < MIN_PASSWORD_LENGTH
      ? `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`
      : "";

  const hasInlineErrors = Boolean(emailError || passwordError);

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setFormError("");

    if (hasInlineErrors) {
      return;
    }

    try {
      setSubmitting(true);

      if (isRegister) {
        await registerUser(email, password);
      } else {
        await loginUser(email, password);
      }

      router.push("/");
    } catch (error) {
      setFormError(error.message || "Authentication failed.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setFormError("");

    try {
      setGoogleSubmitting(true);
      await googleLogin();
      router.push("/");
    } catch (error) {
      setFormError(error.message || "Google sign-in failed.");
    } finally {
      setGoogleSubmitting(false);
    }
  };

  return (
    <section className="page-shell flex items-center justify-center">
      <div className="surface-card fade-in w-full max-w-md p-8">
        <header className="mb-6 text-center">
          <h1 className="title-lg">{isRegister ? "Create Account" : "Welcome Back"}</h1>
          <p className="mt-2 text-sm text-neutral-600">
            {isRegister ? "Register to continue." : "Log in to your account."}
          </p>
        </header>

        {formError && (
          <p className="mb-4 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm text-neutral-700">
            {formError}
          </p>
        )}

        <form
          onSubmit={handleEmailAuth}
          className="grid gap-4"
        >
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-neutral-800"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="bw-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <p className="mt-1 text-xs text-neutral-600">{emailError}</p>}
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-neutral-800"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="At least 6 characters"
              className="bw-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordError && (
              <p className="mt-1 text-xs text-neutral-600">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting || hasInlineErrors}
            className="bw-btn bw-link-focus mt-1 w-full px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting
              ? isRegister
                ? "Creating account..."
                : "Logging in..."
              : isRegister
                ? "Register"
                : "Login"}
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          disabled={googleSubmitting}
          className="bw-btn-ghost bw-link-focus mt-3 w-full px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-60"
        >
          {googleSubmitting ? "Signing in with Google..." : "Continue with Google"}
        </button>

        <p className="mt-5 text-center text-sm text-neutral-600">
          {isRegister ? "Already have an account?" : "Do not have an account?"}{" "}
          <button
            onClick={() => {
              setIsRegister((prev) => !prev);
              setFormError("");
            }}
            className="bw-link bw-link-focus font-semibold"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </section>
  );
}
