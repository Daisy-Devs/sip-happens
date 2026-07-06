"use client";

import { persistor, store, useAppSelector } from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { selectIsGlobalLoading } from "@/store/services/slice/loaderSlice";
import emptyAnimation from "../../public/CoffeeBeans.json";
import ComponentLoader from "../../../../packages/shared/components/ComponentsLoader";

function GlobalLoaderOverlay({ children }: { children: React.ReactNode }) {
  const isGlobalLoading = useAppSelector(selectIsGlobalLoading);
  console.log("animationData", "/CoffeeCup.lottie");
  return (
    <div className="min-h-screen w-full relative">
      {isGlobalLoading && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-md z-9999 flex flex-col items-center justify-center">
          <ComponentLoader
            animationData={emptyAnimation}
            width={300}
            height={300}
          />

          <p className="text-stone-700 font-medium tracking-wide mt-2 animate-pulse">
            Pouring your data...
          </p>
        </div>
      )}
      {children}
    </div>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalLoaderOverlay>{children}</GlobalLoaderOverlay>
      </PersistGate>
    </Provider>
  );
}
