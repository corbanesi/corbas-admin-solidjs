import { server } from "./api.service";

export const apiSignIn = async (email: string, password: string) => {
  return await server<SignInResponse>("/signin", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

export const apiSignOut = async () => {
  return await server("/signout", {
    method: "POST",
  });
};

export const apiCurrentUser = async () => {
  return await server<CurrentUserResponse>("/user-info");
};
