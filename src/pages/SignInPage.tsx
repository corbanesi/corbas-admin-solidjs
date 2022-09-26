import { CorbasButton, CorbasInput } from "@/components/atomic";
import { LoadingIcon, LockIcon } from "@/components/icons";
import { RoutesEnum } from "@/routes";
import { useLogin } from "@composables/auth/useLogin";
import { useAuthStateProvider } from "@providers/AuthProvider";
import { useNavigate } from "@solidjs/router";
import { Component, onMount } from "solid-js";
import { createStore } from "solid-js/store";

const SignInPage: Component = () => {
  const authState = useAuthStateProvider();
  const navigate = useNavigate();
  const { isLoading, doLogin } = useLogin();

  const [form, setForm] = createStore({
    email: "",
    password: "",
  });

  onMount(() => {
    if (authState.isAuthenticated) {
      navigate(RoutesEnum.HOME_PAGE, { replace: true });
    }
  });

  const handleSignIn = (e: Event) => {
    e.preventDefault();
    doLogin(form.email, form.password);
  };

  return (
    <>
      <div class="flex min-h-full items-center justify-center">
        <div class="w-full max-w-md">
          <div>
            <img
              class="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h1 class="mt-4 text-center text-2xl font-semibold tracking-tight">
              Account sign in
            </h1>
          </div>
          <form class="space-y-4" onSubmit={handleSignIn}>
            <div class="space-y-4">
              <CorbasInput
                label="E-mail address"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail address"
                required
                onInput={(e) => setForm("email", e.currentTarget.value)}
              />
            </div>
            <div class="space-y-4">
              <CorbasInput
                label="Password"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                onInput={(e) => setForm("password", e.currentTarget.value)}
              />
            </div>
            <div>
              <CorbasButton
                isLoading={isLoading()}
                icon={isLoading() ? <LoadingIcon /> : <LockIcon />}
                full
              >
                Sign in
              </CorbasButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
