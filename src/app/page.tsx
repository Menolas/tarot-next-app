"use client";

import OfferBlock from "@/components/OfferBlock";
import Tarot from "@/components/Tarot";
import Login from "@/components/Login";
import Loader from "@/components/Loader";
import {useEffect, useState} from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

  }, []);

  return (
    <>
        {!isLoaded
            ? <Loader />
            : (
                <>
                    <OfferBlock/>
                    <Tarot/>
                    <Login/>
                </>
            )
        }
    </>
  );
}
