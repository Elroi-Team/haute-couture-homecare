import { Metadata } from "next";
import Link from "next/link";
import { SignupForm } from "@/components/forms/SignupForm";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create a Haute Couture Home Care client account.",
};

export default function SignupPage() {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 bg-gradient-to-b from-champagne-light to-ivory">
      <div className="container-luxury">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl text-charcoal mb-2">
              Create Account
            </h1>
            <p className="text-charcoal-light">
              Set up your client portal to manage care requests
            </p>
          </div>

          <div className="bg-warm-white border border-soft-gray p-8">
            <SignupForm />

            <div className="mt-6 pt-6 border-t border-soft-gray text-center">
              <p className="text-sm text-charcoal-light">
                Already have an account?{" "}
                <Link href="/login" className="text-gold hover:text-gold-dark">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
