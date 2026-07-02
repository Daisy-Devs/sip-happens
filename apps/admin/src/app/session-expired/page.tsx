"use client";
import { loggedOut } from "@/store/services/slice/authSlice";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "@sip-happens/shared";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const SessionExpired = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen bg-background">
      <DotLottieReact className="h-60 ml-5" height={500} width={500} src="/CoffeeCup.lottie" loop autoplay />
      <h1 className="headline-xl text-primary mb-5">Session Expired</h1>
      <Button
        variant={"dark_brown"}
        onClick={() => {
          dispatch(loggedOut());
          router.replace("/auth/login");
        }}
      >
        Logout
      </Button>
    </main>
  );
};

export default SessionExpired;
