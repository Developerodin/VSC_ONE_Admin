"use client"
import "./globals.scss";
import { Provider } from "react-redux";
import store from "@/shared/redux/store";
import PrelineScript from "./PrelineScript";
import {   useState, useEffect } from "react";
import { Initialload } from "@/shared/contextapi";
import { Inter } from "next/font/google";
import { basePath } from "@/next.config";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({children}:any) =>{
  const [pageloading , setpageloading] = useState(false)

  useEffect(() => {
    const loadPreline = async () => {
      try {
        await import('preline/preline');
        // Initialize Preline after the import
        if (typeof window !== 'undefined' && window.HSStaticMethods) {
          window.HSStaticMethods.autoInit();
        }
      } catch (error) {
        console.error('Error loading Preline:', error);
      }
    };

    loadPreline();
  }, []);

  return(
    <>
    <Provider store={store}>
      <Initialload.Provider value={{ pageloading , setpageloading }}>
        {children}
      </Initialload.Provider>
    </Provider>
    <PrelineScript/>
    </>
  )
}

export default RootLayout
