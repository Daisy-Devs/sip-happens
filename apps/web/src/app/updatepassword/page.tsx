
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, ArrowRight, ArrowLeft, Shield } from "lucide-react";
import { Badge, Input } from "@sip-happens/shared";

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard"); // Routed to dashboard on successful change
  };

  return (
    <div className="min-h-screen w-full bg-[#FFFDF9] flex flex-col lg:flex-row font-sans overflow-x-hidden">
      <div
        className="hidden lg:flex relative w-full lg:w-1/2 lg:min-h-screen flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-16 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url('/Image.png')` }}
      >
        <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-amber-500/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-10 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-orange-700/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none z-0" />

        <div className="h-4 lg:h-6 z-10" />
        <div className="z-10 self-start">
          <Badge className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider text-white uppercase">
            <Shield size={14} className="text-[#C68B59]" />
            Admin Portal
          </Badge>
        </div>

        <div className="relative z-10 my-auto py-6 sm:py-10 flex flex-col items-center lg:items-end text-center lg:text-right w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#FEF9F2] tracking-wide font-medium">
            Sip Happens
          </h1>
          <p className="mt-4 text-primary-fixed text-sm leading-relaxed font-light max-w-sm">
            Managing artisanal moments with precision and warmth.
          </p>
        </div>

        <div className="h-4 lg:h-6 z-10 hidden lg:block" />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-20 relative bg-[#FFFDF9]">
        <div className="w-full flex items-center justify-between text-sm mb-4 lg:mb-0">
          <Link
            href="/forgotpassword"
            className="flex items-center gap-2 text-secondary  transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="transform group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to Dashboard</span>
          </Link>
        </div>

        <div className="w-full max-w-md mx-auto my-auto py-6 sm:py-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-medium tracking-tight">
                Update Password
              </h2>
              <p className="text-on-surface-variant text-sm leading-relaxed ">
                Please choose a strong new password for your account. Ensure it
                contains a mix of characters for maximum security.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
             
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-secondary block">
                  New Password
                </label>
                <div className="relative rounded-xl shadow-sm ">
                  <Input
                    required
                    placeholder="Min. 12 characters"
                    className="pl-11 pr-4 py-5 sm:py-6 text-sm w-full"
                  />
                  <a
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center z-10 cursor-pointer text-stone-400 hover:text-stone-600 select-none"
                  >
                    <Eye size={18} />
                  </a>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-secondary block">
                  Confirm New Password
                </label>
                <div className="relative rounded-xl shadow-sm ">
                  <Input
                    required
                    placeholder="Repeat new password"
                    className="pl-11 pr-4 py-5 sm:py-6 text-sm w-full"
                  />
                  <a
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center z-10 cursor-pointer text-stone-400 hover:text-stone-600 select-none"
                  >
                    <Eye size={18} />
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 px-6 bg-[#FCDFCB] hover:bg-[#FAD0B4] text-[#5C3A21] font-medium rounded-xl shadow-[0_4px_14px_rgba(252,223,203,0.2)] transition-all duration-200 flex items-center justify-center gap-2 group text-sm mt-4"
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

        <div className="w-full pt-6 text-center border-t border-stone-200/60 mt-6 lg:mt-0">
          <p className="text-xs text-on-surface-variant">
            Having trouble?{" "}
            <a
              href="#support"
              className="text-[#845326] font-medium hover:underline"
            >
              Contact IT Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
