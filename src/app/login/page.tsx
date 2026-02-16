import { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/forms/LoginForm";

export const metadata: Metadata = {
  title: "Client Login",
  description: "Log in to your Haute Couture Home Care client account.",
};

export default function LoginPage() {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 bg-gradient-to-b from-champagne-light to-ivory">
      <div className="container-luxury">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl text-charcoal mb-2">
              Client Login
            </h1>
            <p className="text-charcoal-light">
              Access your care request history and account
            </p>
          </div>

          <div className="bg-warm-white border border-soft-gray p-8">
            <LoginForm />

            <div className="mt-6 pt-6 border-t border-soft-gray text-center">
              <p className="text-sm text-charcoal-light">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-gold hover:text-gold-dark">
                  Create Account
                </Link>
              </p>
            </div>
          </div>

          <p className="text-center mt-6 text-sm text-muted-gray">
            <Link href="/request-care" className="hover:text-charcoal">
              Request care without an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
