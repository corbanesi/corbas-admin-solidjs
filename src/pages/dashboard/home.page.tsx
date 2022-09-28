import { CorbasCard, CorbasPersonTable } from "@/components/atomic";
import { apiGetPerson } from "@/services/person.service";
import { Component, createResource } from "solid-js";

const fetchPeople = async (): Promise<Person[]> => {
  const response = await apiGetPerson();
  return response.data;
};

const HomePage: Component = () => {
  const [data, {}] = createResource(fetchPeople);

  return (
    <>
      <div class="flex flex-row flex-wrap justify-center gap-4">
        <CorbasCard />
        <CorbasCard />
        <CorbasCard />
        <CorbasCard />
      </div>
      <div class="my-4 px-4">
        <CorbasPersonTable data={data()} />
      </div>
    </>
  );
};

export default HomePage;
