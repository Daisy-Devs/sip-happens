"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
}
