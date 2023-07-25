"use client";
import Graph from "../../components/graph/Graph3";
// import '../../components/graph/text-updater-node.module.css';
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <Graph />
      </div>
    </main>
  );
}
