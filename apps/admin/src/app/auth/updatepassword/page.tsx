"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, Lock, ArrowRight, ArrowLeft, Shield } from "lucide-react";
import { Badge, Button, Input, toast } from "@sip-happens/shared";
import { useUpdatePasswordMutation } from "@/store/services/api/authApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      await updatePassword({ password }).unwrap();
      toast.success("Password updated successfully!");
      router.push("/auth/login");
    } catch (err) {
      const error = err as FetchBaseQueryError & {
        data?: { message?: string };
      };
      toast.error(
        error?.data?.message || "Failed to update password. Please try again.",
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-surface-container-low flex flex-col lg:flex-row font-sans overflow-x-hidden">
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

      <div className="w-full lg:w-1/2 flex flex-col justify-between p-10 md:p-20 bg-surface-container-low space-y-6">
        <div className="w-full flex items-center justify-between text-sm">
          <Link
            href="/forgotpassword"
            className="flex items-center gap-2 label-md text-secondary hover:underline transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="transform group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to Forgot Password</span>
          </Link>
        </div>

        <div className="w-full max-w-md mx-auto my-auto py-6">
          <div className="space-y-6">
            <div className="mb-lg text-center md:text-left">
              <h2 className="headline-lg text-primary mb-xs">
                Update Password
              </h2>
              <p className="body-md">
                Please choose a strong new password for your account. Ensure it
                contains a mix of characters for maximum security.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 pt-2">
              <div className="space-y-xs">
                <label className="label-md text-secondary block">
                  New Password
                </label>
                <div className="relative">
                  <Input
                    required
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 12 characters"
                    leftIcon={<Lock />}
                    rightIcon={
                      <Button
                        type="button"
                        variant="link"
                        size="sm"
                        className="align-middle ml-15"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        <Eye className="text-primary" />
                      </Button>
                    }
                  />
                </div>
              </div>

              <div className="space-y-xs">
                <label className="label-md text-secondary block">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Input
                    required
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat new password"
                    leftIcon={<Lock />}
                    rightIcon={
                      <Button
                        type="button"
                        variant="link"
                        size="sm"
                        className="align-middle ml-15"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        <Eye className="text-primary" />
                      </Button>
                    }
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="light_brown"
                size="lg"
                disabled={isLoading}
                rightIcon={<ArrowRight />}
                className="flex w-full justify-center mt-4"
              >
                {isLoading ? "Updating..." : "Update Password"}
              </Button>
            </form>
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
