"use client";

import { useRouter } from "next/navigation";
import HomePage from "./(tabs)/home/page";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  });
  return <></>;
}
