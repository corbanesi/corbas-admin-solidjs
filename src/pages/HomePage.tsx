import { Card } from "@components/Card";
import { Component } from "solid-js";

const HomePage: Component = () => {
  return (
    <>
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
