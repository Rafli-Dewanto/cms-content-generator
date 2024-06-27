import { ClientOnly } from "@/components/elements";
import { config } from "@/components/puck-editor";
import { Config, Data, Render } from "@measured/puck";
import { useLocalStorage } from "usehooks-ts";

const Preview = () => {
  const [storedConfig] = useLocalStorage("puck-editor-preview", {});

  return (
    <ClientOnly>
      <Render config={config as Config} data={(storedConfig as unknown as Data) ?? {}} />
    </ClientOnly>
  );
};

export default Preview;
