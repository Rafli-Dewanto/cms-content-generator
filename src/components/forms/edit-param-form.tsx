import { Status } from "@/types/status";
import { getErrorMessage } from "@/utils/get-error-msg";
import React, { useEffect, useState } from "react";
import { Flex, Show } from "@elements";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui/select";

type DataType = "STRING" | "NUMBER" | "BOOLEAN";

type Props = {
  paramName: string;
  dataType: DataType;
  defaultValue: string | number | boolean;
  description?: string;
};

const EditParamForm = (props: Props) => {
  const {
    dataType: initialDataType,
    defaultValue: initialDefaultValue,
    description: initialDescription,
    paramName: initialParamName,
  } = props;

  const [dataType, setDataType] = useState<DataType>(initialDataType);
  const [paramName, setParamName] = useState(initialParamName);
  const [defaultValue, setDefaultValue] = useState<string | number | boolean>(initialDefaultValue);
  const [description, setDescription] = useState(initialDescription);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [paramError, setParamError] = useState("");

  function handleParamChange(e: React.ChangeEvent<HTMLInputElement>) {
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

  function handleSelectDataType(value: string) {
    setDataType(value as DataType);
    setDefaultValue("");
  }

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
        `${process.env.NEXT_PUBLIC_HOST_API_REMOTE_CONFIG}/remote-config?parameter_name=${initialParamName}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        if (data?.error) {
          setError("Please fill in all required fields");
          setStatus("idle");
          return;
        }
        const msg = getErrorMessage(data);
        setError(msg);
        setStatus("error");
        return;
      }
      await response.json();
      window.location.reload();
      setStatus("success");
    } catch (error) {
      const msg = getErrorMessage(error);
      setError(msg);
      setStatus("error");
    }
  }

  return (
    <Show when={Boolean(paramName) !== undefined}>
      <form onSubmit={handleSubmit} className="space-y-4 px-4 py-4">
        <Flex direction="col" className="space-y-2">
          <span>Parameter name</span>
          <Input
            value={paramName}
            onChange={e => handleParamChange(e)}
            type="text"
            required
            placeholder="Enter parameter name"
          />
          <span className="text-xs text-red-600">{paramError}</span>
        </Flex>
        <Flex direction="col" className="space-y-2">
          <span>Data type</span>
          <Select value={dataType} onValueChange={(value: string) => handleSelectDataType(value)}>
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
            <Input
              type="text"
              onChange={e => setDefaultValue(e.target.value)}
              value={defaultValue as string}
              required
            />
          </Show>
          <Show when={dataType === "NUMBER"}>
            <Input
              required
              type="number"
              onChange={e => setDefaultValue(e.target.value)}
              value={defaultValue as number}
            />
          </Show>
          <Show when={dataType === "BOOLEAN"}>
            <Select
              required
              defaultValue={defaultValue as string}
              onValueChange={(value: string) => setDefaultValue(value)}
            >
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
          <Input
            onChange={e => setDescription(e.target.value)}
            placeholder="optional"
            value={description}
          />
        </Flex>
        <span className="block px-2 text-red-500">{error}</span>
        <Button disabled={status === "loading"} variant={"outline"}>
          Save
        </Button>
      </form>
    </Show>
  );
};

export default EditParamForm;
