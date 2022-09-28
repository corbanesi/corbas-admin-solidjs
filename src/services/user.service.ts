import { server } from "./api.service";

export const apiGetUsers = async () => {
  return await server<UserResponse>("/person");
};
