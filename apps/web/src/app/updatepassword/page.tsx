"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Eye,
  ArrowRight,
  ArrowLeft,
  Shield,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { Badge, Button, Input } from "@sip-happens/shared";

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/updatepassword");
  };

  return (
    <div className="min-h-screen w-full bg-[#FFFDF9] flex flex-col lg:flex-row font-sans overflow-x-hidden">
      {/* ================= LEFT SIDE PANEL (Branding & Imagery) ================= */}
      <div
        className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen  flex flex-col justify-between p-8 md:p-12 lg:p-16 bg-cover bg-center bg-no-repeat  overflow-hidden"
        style={{ backgroundImage: `url('/Image.png')` }}
      >
        {/* Ambient Warm Coffee Lighting effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-orange-700/10 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="h-6 z-10" />
        {/* Top Portal Badge matching Html → Body (1).png */}
        <div className="z-10 self-start">
          <Badge className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider text-white uppercase">
            <Shield size={14} className="text-[#C68B59]" />
            Admin Portal
          </Badge>
        </div>

        {/* Steaming Ceramic Cup Visual Placeholder Context */}
        <div className="relative z-10 my-auto py-10 flex flex-col items-end lg:items-end text-center lg:text-left">
          <h1 className="font-serif italic text-5xl md:text-6xl text-white tracking-wide font-medium">
            Sip Happens
          </h1>
          <p className="mt-4 text-amber-100/60 text-sm md:text-base max-w-sm leading-relaxed font-light">
            Managing artisanal moments with precision and warmth.
          </p>
        </div>

        <div className="z-10 text-[10px] uppercase tracking-[0.2em] text-white/20 select-none hidden lg:block">
          © Sip Happens Coffee Co.
        </div>
      </div>

      {/* ================= RIGHT SIDE PANEL (Interactive Form Actions) ================= */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-8 md:p-12 lg:p-20 relative bg-[#FFFDF9]">
        {/* Navigation Action header text */}
        <div className="w-full flex items-center justify-between text-sm">
          <Link
            href="/forgot-password"
            className="flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="transform group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to Dashboard</span>
          </Link>
        </div>

        <div className="w-full max-w-md mx-auto my-auto py-12">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-serif text-[#1A100A] font-medium tracking-tight">
                Update Password
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed">
                Please choose a strong new password for your account. Ensure it
                contains a mix of characters for maximum security.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              {/* New Password Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-600 block">
                  New Password
                </label>
                <div className="relative rounded-xl flex items-center">
                  <Input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Min. 12 characters"
                    className="pl-11 pr-4 py-6 text-sm"
                  />
                  <a
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 pr-4 flex items-center shadow-none"
                  >
                    <Eye size={18} />
                  </a>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-600 block">
                  Confirm New Password
                </label>
                <div className="relative rounded-xl flex items-center">
                  <Input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Repeat new password"
                    className="pl-11 pr-4 py-6 text-sm"
                  />
                  <a
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 pr-4 flex items-center text-stone-400 hover:text-stone-600 bg-transparent border-none shadow-none"
                  >
                    <Eye size={18} />
                  </a>
                </div>
              </div>

              {/* Requirement Check Indicators matching Html → Body (1).png */}
              <div className="flex flex-wrap gap-2 pt-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
                  <CheckCircle2 size={13} />
                  <span>Special characters</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-medium border border-stone-200/60">
                  <Circle size={13} className="text-stone-400" />
                  <span>Min. 12 chars</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-[#FCDFCB] hover:bg-[#FAD0B4] text-[#5C3A21] font-medium rounded-xl shadow-[0_4px_14px_rgba(252,223,203,0.2)] transition-all duration-200 flex items-center justify-center gap-2 group text-sm pt-2"
              >
                <span>Update Password</span>
                <ArrowRight
                  size={16}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>

        <div className="w-full pt-6 text-center border-t border-stone-100">
          <p className="text-xs text-stone-500">
            Having trouble?{" "}
            <a
              href="#support"
              className="text-[#8C6239] font-medium hover:underline"
            >
              Contact IT Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
