"use client";

import OfferBlock from "@/components/OfferBlock";
import Login from "@/components/Login";
import Loader from "@/components/Loader";
import {useEffect, useState} from "react";
import Header from "@/components/Header";
import {AppProvider} from "@/AppProvider";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

  }, []);

  return (
    <AppProvider>
        {!isLoaded
            ? <Loader />
            : (
                <>
                  <Header/>
                  <main className="">
                    <OfferBlock/>
                    {/*<Tarot/>*/}
                    <Login/>
                  </main>
                </>
            )
        }
    </AppProvider>
  );
};
