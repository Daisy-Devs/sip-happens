"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Badge, Button, Input } from "@sip-happens/shared";
import { useForgotPasswordMutation } from "@/store/services/api/authApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    try {
      await forgotPassword({ email }).unwrap();
      setIsSubmitted(true);
    } catch (err) {
      const error = err as FetchBaseQueryError & {
        data?: { message?: string };
      };
      setErrorMsg(
        error?.data?.message || "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-surface-container-low flex flex-col lg:flex-row font-sans overflow-x-hidden">
      <div
        className="hidden lg:flex relative w-full lg:w-1/2 lg:min-h-screen flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-16 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url('/Cafebg.png')` }}
      >
        <div className="absolute inset-0 bg-[#1A100A]/90 mix-blend-multiply z-0" />
        <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-10 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-secondary/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none z-0" />
        <div className="h-4 lg:h-6 z-10" />
        <div className="relative z-10 my-auto py-6 sm:py-10 flex flex-col items-center justify-center text-center mx-auto max-w-md">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-on-primary-container tracking-wide font-medium">
            Sip Happens
          </h1>
          <p className="px-4 sm:px-6 mt-4 text-primary-fixed text-sm md:text-base leading-relaxed">
            Managing artisanal moments with precision and warmth.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-3 justify-center">
            <Badge variant="green">Secure Access</Badge>
            <Badge variant="green">Admin v2.4</Badge>
          </div>
        </div>
        <div className="h-4 lg:h-6 z-10 hidden lg:block" />
      </div>

      <div className="w-full lg:w-1/2 min-h-screen lg:min-h-0 flex flex-col justify-between p-10 md:p-20 bg-surface-container-low space-y-6">
        <div className="w-full flex items-center justify-between text-sm">
          <Link
            href="/auth/login"
            className="flex items-center gap-2 label-md text-secondary hover:underline transition-all group"
          >
            <ArrowLeft
              size={14}
              className="transform group-hover:-translate-x-0.5 transition-transform"
            />
            Back to Login
          </Link>
        </div>

        <div className="w-full max-w-md mx-auto my-auto py-6">
          <div className="space-y-6">
            {!isSubmitted ? (
              <>
                <div className="mb-lg text-center md:text-left">
                  <h2 className="headline-lg text-primary mb-xs">
                    Forgot Password?
                  </h2>
                  <p className="body-md">
                    Enter your registered email address and we&apos;ll send you
                    instructions to reset your password.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 pt-2">
                  {errorMsg && (
                    <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="space-y-xs">
                    <label className="label-md text-secondary" htmlFor="email">
                      Email Address
                    </label>
                    <div className="relative">
                      <Input
                        variant="default"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="manager@siphappens.cafe"
                        leftIcon={<Mail />}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="light_brown"
                    size="lg"
                    disabled={isLoading}
                    rightIcon={<ArrowRight />}
                    className="flex w-full justify-center"
                  >
                    {isLoading ? "Sending..." : "Send Reset Link"}
                  </Button>
                </form>
              </>
            ) : (
              <div className="space-y-4 text-center py-4 animated fadeIn">
                <div className="flex justify-center text-emerald-600">
                  <CheckCircle2 size={56} strokeWidth={1.5} />
                </div>
                <div className="space-y-xs">
                  <h2 className="headline-lg text-primary">Check your email</h2>
                  <p className="body-md max-w-sm mx-auto">
                    We have sent a password reset link to{" "}
                    <strong className="text-primary">{email}</strong>. Please
                    click the link inside that email to update your password.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full pt-6 border-t border-outline-variant/30 text-center">
          <p className="label-sm text-on-surface-variant uppercase tracking-widest">
            Artisanal Management Suite
          </p>
        </div>
      </div>
    </div>
  );
}
