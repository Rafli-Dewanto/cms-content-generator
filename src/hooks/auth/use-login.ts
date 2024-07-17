import { loginUser } from "@/api/auth/login";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationFn: loginUser,
  });
}
