import { cn } from "@/lib/utils";
import { Status } from "@/types/status";
import { getErrorMessage } from "@/utils/get-error-msg";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Flex, Show } from "@elements";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Separator } from "@ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

type DataType = "STRING" | "NUMBER" | "BOOLEAN";

const CreateParamForm = () => {
  const mobile = useMediaQuery("(max-width: 768px)");
  const [dataType, setDataType] = useState<DataType>("STRING");
  const [paramName, setParamName] = useState("");
  const [defaultValue, setDefaultValue] = useState<string | number | boolean>("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [paramError, setParamError] = useState("");

  function handleParamChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError("");
    const containsWhitespace = /\s/.test(e.target.value);
    if (containsWhitespace) {
      setParamError(
        "Your parameter key contains an invalid character. Parameter keys must start with an underscore or English letter character [A-Z, a-z], and may also include numbers."
      );
      return;
    }
    setParamError("");
    setParamName(e.target.value);
  }

  useEffect(() => {
    handleParamChange({ target: { value: paramName } } as React.ChangeEvent<HTMLInputElement>);
  }, [paramName]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    let defaultValueData;
    if (dataType === "BOOLEAN") {
      defaultValueData = defaultValue === "true";
    }

    const payload = {
      param_name: paramName,
      data_type: dataType,
      default_value: defaultValueData || defaultValue,
      description,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_API_REMOTE_CONFIG}/remote-config`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (data?.error) {
        setError(data?.error);
        setStatus("error");
        return;
      }
      window.location.reload();
      setStatus("success");
    } catch (error) {
      const msg = getErrorMessage(error);
      setError(msg);
      setStatus("error");
    }
  }

  return (
    <Sheet>
      <SheetContent
        side={mobile ? "top" : "right"}
        className={cn("px-0", {
          "min-w-[37.5rem]": !mobile,
        })}
      >
        <SheetHeader className="px-4 pb-6">
          <SheetTitle>Add new parameter</SheetTitle>
        </SheetHeader>
        <Separator />
        <form onSubmit={handleSubmit} className="container space-y-4 py-4">
          <Flex direction="col" className="space-y-2">
            <span>Parameter name</span>
            <Input
              onChange={e => handleParamChange(e)}
              type="text"
              required
              placeholder="Enter parameter name"
            />
            <span className="text-xs text-red-600">{paramError}</span>
          </Flex>
          <Flex direction="col" className="space-y-2">
            <span>Data type</span>
            <Select onValueChange={(value: string) => setDataType(value as DataType)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="String" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="STRING">String</SelectItem>
                <SelectItem value="BOOLEAN">Boolean</SelectItem>
                <SelectItem value="NUMBER">Number</SelectItem>
              </SelectContent>
            </Select>
          </Flex>
          <Flex direction="col" className="space-y-2">
            <span>Default value</span>
            <Show when={dataType === "STRING"}>
              <Input type="text" onChange={e => setDefaultValue(e.target.value)} />
            </Show>
            <Show when={dataType === "NUMBER"}>
              <Input type="number" onChange={e => setDefaultValue(e.target.value)} />
            </Show>
            <Show when={dataType === "BOOLEAN"}>
              <Select onValueChange={value => setDefaultValue(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue defaultValue={"true"} placeholder="True" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">True</SelectItem>
                  <SelectItem value="false">False</SelectItem>
                </SelectContent>
              </Select>
            </Show>
          </Flex>
          <Flex direction="col" className="space-y-2">
            <span>Description</span>
            <Input onChange={e => setDescription(e.target.value)} placeholder="optional" />
          </Flex>
          <span className="inline-block pt-1 text-red-500">{error}</span>
          <div className="flex gap-x-3">
            <Button disabled={status === "loading"} variant={"outline"}>
              Save
            </Button>
            <SheetClose
              disabled={status === "loading"}
              className={`inline-flex items-center justify-between gap-x-2 whitespace-nowrap rounded-md bg-background px-2 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50`}
            >
              Cancel
            </SheetClose>
          </div>
        </form>
      </SheetContent>
      <SheetTrigger className="inline-flex items-center justify-between gap-x-2 whitespace-nowrap rounded-md border border-input bg-background bg-white px-2 text-sm font-medium text-white ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        <Plus color="black" />
        <p className="hidden bg-none text-gray-900 sm:block">Add new parameter</p>
      </SheetTrigger>
    </Sheet>
  );
};

export default CreateParamForm;
