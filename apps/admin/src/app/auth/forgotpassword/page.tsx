"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Badge, Button, Input } from "@sip-happens/shared";
import { useForgotPasswordMutation } from "@/store/services/api/authApi"; 
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if mail was successfully sent
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    
    try {
      await forgotPassword({ email }).unwrap();
      setIsSubmitted(true); // Switch to success state view
    } catch (err) {
      const error = err as FetchBaseQueryError & {
              data?: { message?: string };
            };
      setErrorMsg(error?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FFFDF9] flex flex-col lg:flex-row font-sans overflow-x-hidden">
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

      <div className="w-full lg:w-1/2 min-h-screen lg:min-h-0 flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-20 relative bg-[#FEF9F2]">
        <div className="h-2 lg:h-5" />
        <div className="w-full max-w-md mx-auto my-auto py-6 sm:py-12">
          <div className="space-y-6">
            
            {!isSubmitted ? (
              <>
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-medium tracking-tight">
                    Forgot Password?
                  </h2>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Enter your registered email address and we&apos;ll send you
                    instructions to reset your password.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 pt-2">
                  {errorMsg && (
                    <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-200">
                      {errorMsg}
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-secondary uppercase tracking-wider block">
                      Email Address
                    </label>
                    <div className="relative rounded-xl shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline z-10">
                        <Mail size={18} />
                      </div>
                      <Input
                        variant="default"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="manager@siphappens.cafe"
                        className="pl-11 pr-4 py-5 sm:py-6 text-sm w-full"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="square_brown"
                    text={isLoading ? "Sending..." : "Send Reset Link"}
                    size="lg"
                    disabled={isLoading}
                    rightIcon={<ArrowRight size={18} color="#231005" />}
                    className="w-full py-3 sm:py-4 disabled:opacity-50"
                  />
                </form>
              </>
            ) : (
              <div className="space-y-4 text-center py-4 animated fadeIn">
                <div className="flex justify-center text-emerald-600">
                  <CheckCircle2 size={56} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-medium text-primary tracking-tight">
                    Check your email
                  </h2>
                  <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm mx-auto">
                    We have sent a password reset link to <strong className="text-stone-800">{email}</strong>. 
                    Please click the link inside that email to update your password.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-2 flex flex-col items-center justify-center gap-4">
              <Link
                href="/login"
                className="text-stone-600 hover:text-stone-800 font-medium text-sm flex items-center gap-2 group transition-colors"
              >
                <ArrowLeft
                  size={14}
                  className="transform group-hover:-translate-x-0.5 transition-transform"
                />
                Back to Login
              </Link>
            </div>
          </div>
        </div>

        
        <div className="w-full pt-6 text-center border-t border-stone-200/60 mt-6 lg:mt-0">
          <span className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase block">
            Artisanal Management Suite
          </span>
        </div>
      </div>
    </div>
  );
}