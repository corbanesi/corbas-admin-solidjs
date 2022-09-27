import { server } from "./api.service";

export const apiSignIn = async (email: string, password: string) => {
  await server("/signin", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

export const apiSignOut = async () => {
  await server("/signout", {
    method: "POST",
  });
};

export const apiCurrentUser = async () => {
  return await server<CurrentUserResponse>("/user-info");
};
