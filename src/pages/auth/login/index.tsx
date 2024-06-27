import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@/hooks/auth/use-login";
import { toast } from "@/hooks/use-toast";
import { LoginSchemaType } from "@/types/schemas/login";
import { setCookie } from "@/utils/cookie";
import { generateToken } from "@/utils/generate-token";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const loginMutation = useLogin();

  function handleLogin(loginPayload: LoginSchemaType) {
    loginMutation.mutate(loginPayload, {
      onSuccess: (data, { email }) => {
        setCookie("token", generateToken(15), 1);
        if ("output" in data) {
          setCookie("userEmail", data.output.email, 1);
        }
        setCookie("userEmail", email, 1);
        router.replace("/");
      },
      onError: error => {
        toast({
          title: "Login failed",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  }

  return (
    <main className="grid min-h-screen place-items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="youremail@erajaya.com"
                  required
                  type="email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  placeholder="•••••••••"
                  id="password"
                  required
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>
              <Button disabled={isSubmitting} className="w-full" type="submit">
                Login
              </Button>
              {loginMutation.isError && (
                <p className="text-red-500">{loginMutation.error.message}</p>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
