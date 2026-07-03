"use client";
import { useLoginMutation } from "@/store/services/api/authApi";
import { loggedIn } from "@/store/services/slice/authSlice";
import { Button, Input, LoginSchema } from "@sip-happens/shared";
import { ArrowRight, Eye, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const [login] = useLoginMutation();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({ email: "", password: "" });
  const router = useRouter();
  const dispatch = useDispatch();
  const loginHandler = () => {
    const result = LoginSchema.safeParse(credentials);
    if (!result.success) {
      setError(result.error.flatten().fieldErrors);
      console.log(result.error.issues);

      return;
    }
    login(credentials)
      .unwrap()
      .then((res) => {
        console.log(res);
        dispatch(
          loggedIn({
            name:res.user.name,
            email: res.user.email,
            position: res.user.position,
            addingProduct: false,
            token: res.session.access_token,
            refreshToken: res.session.refresh_token
          }),
        );
        document.cookie = `token=${res.session.access_token}; path=/`;
        router.push("/");
        setCredentials({ email: "", password: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section
      className="flex-grow flex items-center justify-center relative px-7 md:px-30 py-22 w-full h-full"
      id="steam-container"
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl">
        <div className="hidden md:flex md:w-1/2 relative bg-primary-container items-center justify-center p-xl">
          <Image
            alt="Cafe Interior"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            width={500}
            height={500}
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          />
          <div className="relative z-10 text-center">
            <h1 className="headline-xl text-secondary-container mb-6 italic">
              Sip Happens
            </h1>
            <p className="body-lg max-w-xs mx-auto text-primary-fixed">
              Managing artisanal moments with precision and warmth.
            </p>
          </div>
        </div>
        <div className="w-full space-y-6 md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-surface-container-low">
          <div className="mb-lg text-center md:text-left">
            <h2 className="headline-lg text-primary mb-xs">Welcome Back</h2>
            <p className="body-md">
              Please enter your credentials to access the dashboard.
            </p>
          </div>
          <div className="space-y-xs">
            <label className="label-md text-secondary" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <Input
                error={error.email}
                placeholder="jojo@example"
                onChange={(e) =>
                  setCredentials((prev) => ({ ...prev, email: e.target.value }))
                }
                value={credentials.email}
                leftIcon={<Mail />}
              />
            </div>
          </div>
          <div className="space-y-xs">
            <div className="flex justify-between items-center">
              <label className="label-md text-secondary" htmlFor="password">
                Password
              </label>
              <Link
                className="label-sm text-secondary hover:underline transition-all"
                href="/auth/forgotpassword"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                placeholder="••••••••••••"
                type={!showPassword ? "password" : "text"}
                value={credentials.password}
                error={error.password}
                onChange={(e) =>
                  setCredentials((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                leftIcon={<Lock />}
                rightIcon={
                  <Button
                    variant="link"
                    size="sm"
                    className="align-middle ml-15"
                    onClick={() => {
                      setShowPassword((prev) => !prev);
                    }}
                  >
                    <Eye className="text-primary" />
                  </Button>
                }
              />
            </div>
          </div>
          <Button
            type="submit"
            rightIcon={<ArrowRight />}
            className="flex"
            variant="light_brown"
            onClick={() => {
              loginHandler();
            }}
          >
            Sign In
          </Button>
          <div className="mt-xl pt-lg border-t border-outline-variant/30 text-center">
            <p className="label-sm text-on-surface-variant uppercase tracking-widest">
              Artisanal Management Suite
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
