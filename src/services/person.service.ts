import { server } from "./api.service";

export const apiGetPerson = async () => {
  return await server<PersonResponse>("/person");
};
