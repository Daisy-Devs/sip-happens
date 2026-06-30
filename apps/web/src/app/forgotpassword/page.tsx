"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { Badge, Button, Input } from "@sip-happens/shared";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/updatepassword");
  };

  return (
    <div className="min-h-screen w-full bg-[#FFFDF9] flex flex-col lg:flex-row font-sans overflow-x-hidden">
      {/* ================= LEFT SIDE PANEL (Branding & Imagery) ================= */}
      <div
        className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen flex flex-col justify-between p-8 md:p-12 lg:p-16 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url('/Cafebg.png')` }} // Replace with your file path asset
      >
        {/* Dark brand tinted overlay matching the espresso vibe of Html → Body (2).jpg */}
        <div className="absolute inset-0 bg-[#1A100A]/90 mix-blend-multiply z-0" />

        {/* Ambient Warm Coffee Lighting effects layered over image background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-orange-700/10 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="h-6 z-10" />

        {/* Brand content completely centered on both mobile and large screens */}
        <div className="relative z-10 my-auto py-10 flex flex-col items-center justify-center text-center mx-auto max-w-md">
          <h1 className="font-serif italic text-5xl md:text-6xl text-white tracking-wide font-medium">
            Sip Happens
          </h1>
          <p className="mt-4 text-amber-100/70 text-sm md:text-base leading-relaxed font-light">
            Managing artisanal moments with precision and warmth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Badge variant="green">Secure Access</Badge>
            <Badge variant="green">Admin v2.4</Badge>
          </div>
        </div>
      </div>

      {/* ================= RIGHT SIDE PANEL (Interactive Form Actions) ================= */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-8 md:p-12 lg:p-20 relative bg-[#FFFDF9]">
        <div className="h-5" />

        <div className="w-full max-w-md mx-auto my-auto py-12">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-serif text-[#1A100A] font-medium tracking-tight">
                Forgot Password?
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed">
                Enter your registered email address and we'll send you
                instructions to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 pt-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#8C6239] uppercase tracking-wider block">
                  Email Address
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400 z-10">
                    <Mail size={18} />
                  </div>
                  <Input
                    type="email"
                    required
                    placeholder="manager@siphappens.cafe"
                    className="pl-11 pr-4 py-6 text-sm"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="square_brown"
                text="Send Reset Link"
                size="lg"
                rightIcon={<ArrowRight size={18} color="#fff" />}
                className="w-full"
              />
            </form>

            <div className="pt-4 flex flex-col items-center justify-center gap-4">
              <Link
                href="/login"
                className="text-stone-500 hover:text-stone-800 font-medium text-sm flex items-center gap-2 group transition-colors"
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

        <div className="w-full pt-6 text-center border-t border-stone-100">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-stone-400 uppercase block">
            Artisanal Management Suite
          </span>
        </div>
      </div>
    </div>
  );
}
