import { CorbasCard } from "@/components/atomic";
import { Component } from "solid-js";

const HomePage: Component = () => {
  return (
    <>
      <div class="flex flex-row flex-wrap justify-center gap-4">
        <CorbasCard />
        <CorbasCard />
        <CorbasCard />
        <CorbasCard />
      </div>
    </>
  );
};

export default HomePage;
