"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogIn } from "lucide-react";

export function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      // TODO: Implement Supabase authentication
      // const { error } = await supabase.auth.signInWithPassword({
      //   email,
      //   password,
      // });
      //
      // if (error) throw error;
      // router.push("/account");

      // Placeholder - remove when Supabase is configured
      console.log("Login attempt:", { email, password });
      setError("Authentication is not yet configured. Please contact us directly.");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full"
          placeholder="your@email.com"
          autoComplete="email"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-charcoal"
          >
            Password
          </label>
          <Link
            href="/forgot-password"
            className="text-sm text-gold hover:text-gold-dark"
          >
            Forgot password?
          </Link>
        </div>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="w-full"
          placeholder="Enter your password"
          autoComplete="current-password"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 p-3 text-red-700 text-sm rounded">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="btn btn-primary w-full disabled:opacity-50"
      >
        {isLoading ? (
          "Signing in..."
        ) : (
          <>
            Sign In
            <LogIn size={18} />
          </>
        )}
      </button>
    </form>
  );
}
