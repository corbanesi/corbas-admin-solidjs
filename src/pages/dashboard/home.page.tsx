import { CorbasCard, CorbasUserTable } from "@/components/atomic";
import { apiGetUsers } from "@/services/user.service";
import { Component, createResource } from "solid-js";

const fetchPeople = async (): Promise<User[]> => {
  const response = await apiGetUsers();
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
        <CorbasUserTable data={data()} />
      </div>
    </>
  );
};

export default HomePage;
