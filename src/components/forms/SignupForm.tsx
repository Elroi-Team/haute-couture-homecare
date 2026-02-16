"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserPlus } from "lucide-react";

export function SignupForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setIsLoading(false);
      return;
    }

    try {
      // TODO: Implement Supabase authentication
      // const { error } = await supabase.auth.signUp({
      //   email,
      //   password,
      //   options: {
      //     data: {
      //       full_name: name,
      //       phone: phone,
      //     },
      //   },
      // });
      //
      // if (error) throw error;
      // router.push("/account/pending");

      // Placeholder - remove when Supabase is configured
      console.log("Signup attempt:", { name, email, phone, password });
      setError("Account creation is not yet available. Please contact us directly to set up care.");
    } catch (err) {
      setError("Unable to create account. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full"
          placeholder="Your full name"
          autoComplete="name"
        />
      </div>

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
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full"
          placeholder="(555) 555-5555"
          autoComplete="tel"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="w-full"
          placeholder="Minimum 8 characters"
          autoComplete="new-password"
        />
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
          className="w-full"
          placeholder="Confirm your password"
          autoComplete="new-password"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          required
          className="w-4 h-4 mt-1 accent-gold"
        />
        <label htmlFor="terms" className="text-sm text-charcoal-light">
          I agree to the{" "}
          <Link href="/terms" className="text-gold underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-gold underline">
            Privacy Policy
          </Link>
        </label>
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
          "Creating Account..."
        ) : (
          <>
            Create Account
            <UserPlus size={18} />
          </>
        )}
      </button>
    </form>
  );
}
