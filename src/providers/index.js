"use client";

import AuthProvider from "./AuthProvider";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <PrimeReactProvider>{children}</PrimeReactProvider>
    </AuthProvider>
  );
};

export default Providers;
