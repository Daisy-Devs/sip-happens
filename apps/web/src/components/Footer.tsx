import React from "react";

const Footer = () => {
  return (
    <footer className="bg-surface p-20  border-t border-primary-container/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <div className="font-headline-md text-3xl font-black text-primary mb-6 tracking-tighter">
            Sip Happens
          </div>
          <p className="text-on-surface-variant font-body-md leading-relaxed mb-8">
            Crafting moments of joy, one exceptional cup at a time. Join our
            community of flavor seekers.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-surface-variant hover:bg-on-surface-variant hover:text-primary-container transition-all"
              href="https://x.com/"
              aria-label="X (Twitter)"
            >
              <svg
                fill="#C68B59"
                width="30px"
                height="30px"
                viewBox="-0.075 -0.15 0.9 0.9"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
                className="jam jam-twitter"
              >
                <path d="M0.75 0.071a0.3 0.3 0 0 1 -0.088 0.024 0.15 0.15 0 0 0 0.068 -0.084 0.3 0.3 0 0 1 -0.098 0.037 0.156 0.156 0 0 0 -0.112 -0.048 0.153 0.153 0 0 0 -0.154 0.151q0 0.018 0.004 0.035A0.438 0.438 0 0 1 0.052 0.028a0.15 0.15 0 0 0 -0.021 0.076 0.15 0.15 0 0 0 0.068 0.126 0.15 0.15 0 0 1 -0.07 -0.019v0.002c0 0.073 0.053 0.135 0.123 0.148a0.15 0.15 0 0 1 -0.041 0.005q-0.015 0 -0.029 -0.003a0.153 0.153 0 0 0 0.144 0.105 0.312 0.312 0 0 1 -0.191 0.065q-0.019 0 -0.037 -0.002a0.441 0.441 0 0 0 0.236 0.068c0.283 0 0.438 -0.231 0.438 -0.431L0.673 0.15A0.3 0.3 0 0 0 0.75 0.071" />
              </svg>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-surface-variant hover:bg-on-surface-variant hover:text-primary-container transition-all"
              href="https://www.instagram.com/"
              aria-label="Instagram"
            >
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 0.47 0.47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.235 0.158a0.077 0.077 0 1 0 0 0.158 0.077 0.077 0 0 0 0 -0.158"
                  fill="#C68B59"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.14 0A0.143 0.143 0 0 0 0 0.14v0.188a0.143 0.143 0 0 0 0.14 0.14h0.188A0.143 0.143 0 0 0 0.47 0.328V0.14A0.143 0.143 0 0 0 0.328 0zM0.125 0.235a0.11 0.11 0 1 1 0.22 0 0.11 0.11 0 0 1 -0.22 0M0.343 0.125h0.03V0.092H0.343z"
                  fill="#C68B59"
                />
              </svg>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-surface-variant hover:bg-on-surface-variant hover:text-primary-container transition-all"
              href="https://www.facebook.com/"
              aria-label="Facebook"
            >
              <svg
                fill="#C68B59"
                width="25px"
                height="25px"
                viewBox="0 0 0.75 0.75"
                id="facebook"
                data-name="Flat Color"
                xmlns="http://www.w3.org/2000/svg"
                className="icon flat-color"
              >
                <path
                  id="primary"
                  d="M0.438 0.188h0.093A0.031 0.031 0 0 0 0.562 0.157V0.093A0.031 0.031 0 0 0 0.531 0.063H0.438a0.158 0.158 0 0 0 -0.157 0.157v0.093H0.219a0.031 0.031 0 0 0 -0.031 0.031v0.063a0.031 0.031 0 0 0 0.031 0.031h0.063v0.219a0.031 0.031 0 0 0 0.031 0.031H0.375A0.031 0.031 0 0 0 0.406 0.656V0.437H0.475A0.033 0.033 0 0 0 0.506 0.413L0.522 0.351A0.031 0.031 0 0 0 0.491 0.313H0.406V0.219A0.031 0.031 0 0 1 0.437 0.188"
                  style={{
                    fill: "#C68B59",
                  }}
                />
              </svg>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-surface-variant hover:bg-on-surface-variant hover:text-primary-container transition-all"
              href="https://in.pinterest.com/"
              aria-label="Pinterest"
            >
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 0.75 0.75"
                id="meteor-icon-kit__solid-pinterest"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.75 0.375c0 0.207 -0.168 0.375 -0.375 0.375 -0.039 0 -0.076 -0.006 -0.111 -0.017 0.015 -0.025 0.038 -0.066 0.047 -0.098l0.023 -0.089c0.012 0.023 0.048 0.043 0.086 0.043 0.113 0 0.195 -0.104 0.195 -0.233 0 -0.124 -0.101 -0.217 -0.231 -0.217 -0.162 0 -0.248 0.109 -0.248 0.227 0 0.055 0.029 0.124 0.076 0.145 0.007 0.003 0.011 0.002 0.013 -0.005 0.001 -0.005 0.008 -0.031 0.01 -0.043a0.011 0.011 0 0 0 -0.003 -0.011c-0.015 -0.019 -0.028 -0.053 -0.028 -0.086 0 -0.083 0.063 -0.163 0.169 -0.163 0.092 0 0.157 0.063 0.157 0.153 0 0.101 -0.051 0.172 -0.118 0.172 -0.037 0 -0.064 -0.03 -0.055 -0.068 0.011 -0.045 0.031 -0.093 0.031 -0.125 0 -0.029 -0.015 -0.053 -0.048 -0.053 -0.038 0 -0.068 0.039 -0.068 0.091 0 0.033 0.011 0.056 0.011 0.056s-0.037 0.157 -0.044 0.186c-0.008 0.032 -0.005 0.078 -0.001 0.108C0.099 0.67 0 0.534 0 0.375 0 0.168 0.168 0 0.375 0s0.375 0.168 0.375 0.375"
                  fill="#C68B59"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div>
            <h5 className="font-bold text-primary mb-6 uppercase tracking-widest text-xs">
              Support
            </h5>
            <ul className="space-y-4">
              <li className="">
                <a
                  className="text-on-surface-variant hover:text-on-surface-variant transition-all"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li className="">
                <a
                  className="text-on-surface-variant hover:text-on-surface-variant transition-all"
                  href="#"
                >
                  FAQ
                </a>
              </li>
              <li className="">
                <a
                  className="text-on-surface-variant hover:text-on-surface-variant transition-all"
                  href="#"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-primary-container/5 flex flex-col md:flex-row justify-between items-center text-on-surface-variant text-sm">
        <p className="">
          © 2026 Sip Happens Artisanal Café. All rights reserved.
        </p>
        <p className="">Crafted with Passion &amp; Caffeine.</p>
      </div>
    </footer>
  );
};

export default Footer;
