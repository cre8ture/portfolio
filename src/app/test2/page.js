"use client";
import Imgs from "../../components/animations/anim_8_1/Load_Anim";
import { useState } from "react";
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <div className="w-full items-center justify-between font-mono text-sm lg:flex">
        <Imgs />
      </div>
    </main>
  );
}
