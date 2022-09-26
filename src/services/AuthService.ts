import { server } from "./API";

export const apiSignIn = async (email: string, password: string) => {
  return await server<SignInResponse>("/signin", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

export const apiCurrentUser = async () => {
  return await server<CurrentUserResponse>("/user-info");
};
