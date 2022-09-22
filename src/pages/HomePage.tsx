import { Card } from "@components/Card";
import { NavBar } from "@components/NavBar";
import type { Component } from "solid-js";

const HomePage: Component = () => {
  return (
    <>
      <NavBar />
      <div class="flex flex-row flex-wrap justify-center gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default HomePage;
