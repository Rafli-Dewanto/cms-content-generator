/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useCreateContent } from "@/hooks/contents/use-create-content";
import { toast } from "@/hooks/use-toast";
import { createContentSchema, type createContentSchemaType } from "@/types/schemas/content";
import { getCookie } from "@/utils/cookie";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

const CreateContentForm = () => {
  const router = useRouter();
  const userEmail = getCookie("userEmail");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<createContentSchemaType>({
    resolver: zodResolver(createContentSchema),
    defaultValues: {
      title: "",
      html: sessionStorage.getItem("puck-editor") ?? "",
      puckConf: sessionStorage.getItem("puck-editor-conf") ?? "",
      urlKey: sessionStorage.getItem("url-key") ?? "",
      active: false,
    },
  });
  const createContentMutation = useCreateContent();

  useEffect(() => {
    return () => {
      sessionStorage.removeItem("url-key");
      sessionStorage.removeItem("puck-editor");
      sessionStorage.removeItem("puck-editor-conf");
    };
  }, []);

  const onSubmit = async (data: createContentSchemaType) => {
    createContentMutation.mutate(
      { ...data, cookies: { userEmail } },
      {
        onSuccess: () => {
          router.replace("/");
        },
        onError: error => {
          toast({
            title: error.cause as string,
            description: error.message as string,
            variant: "destructive",
          });
        },
      }
    );
  };

  return (
    <div className="min-h-screen w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <h1 className="mb-20 text-xl font-bold">
          Please fill this form to proceed generating the content
        </h1>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            {...register("title", { required: "Title is required" })}
            placeholder="Content title"
            type="text"
          />
          <span className="text-red-500">{errors.title && errors.title.message}</span>
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="urlKey">URL Key</Label>
          <Input
            {...register("urlKey", { required: "URL Key is required" })}
            placeholder="Content URL Key"
            type="text"
          />
          <span className="text-red-500">{errors.urlKey && errors.urlKey.message}</span>
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="active">Status</Label>
          <Controller
            name="active"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Switch
                checked={value}
                onChange={onChange}
                onCheckedChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </div>
        <div className="mx-auto">
          <Button type="submit" className="max-w-lg" disabled={isSubmitting}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateContentForm;
