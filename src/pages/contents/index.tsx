import { Show } from "@/components/elements";
import ClientOnly from "@/components/elements/client-only/client-only";
import CreateContentForm from "@/components/forms/create-content-form";
import { config, initialData } from "@/components/puck-editor";
import MainLayout from "@/layouts/main-layout";
import { Config, Data, Puck, Render } from "@measured/puck";
import { ScanEye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { useLocalStorage } from "usehooks-ts";

const ContentGeneratorPage = () => {
  const [isContentGenerated, setIsContentGenerated] = useState(false);
  const [, setStoredConfig] = useLocalStorage("puck-editor-preview", initialData);

  /**
   * This function is responsible for saving the content data to session storage and updating the state to reflect that content has been generated.
   * It also converts the content data into HTML format using the `renderToStaticMarkup` function from `react-dom/server`.
   *
   * @param {Data} data - The content data to be saved and rendered.
   */
  const saveContent = (data: Data) => {
    sessionStorage.setItem("puck-editor-conf", JSON.stringify(data));
    setIsContentGenerated(true);
    const htmlContent = renderToStaticMarkup(<Render config={config as Config} data={data} />);
    sessionStorage.setItem("puck-editor", htmlContent);
  };

  return (
    <Show
      when={!isContentGenerated}
      fallback={
        <MainLayout>
          <CreateContentForm />
        </MainLayout>
      }
    >
      <ClientOnly>
        <Puck
          config={config as Config}
          data={initialData}
          onPublish={saveContent}
          onChange={data => {
            setStoredConfig(data);
          }}
          overrides={{
            // eslint-disable-next-line react/no-unstable-nested-components
            headerActions: ({ children }) => (
              <>
                <Link
                  href={`/preview`}
                  target="_blank"
                  className="flex h-full w-full items-center justify-center rounded-md border border-gray-800 px-[0.9rem] py-[0.4rem] text-sm font-medium text-gray-800 transition duration-150 ease-in-out hover:border-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                >
                  <ScanEye className="mr-2 h-4 w-4" />
                  <p>Preview</p>
                </Link>
                {children}
              </>
            ),
          }}
        />
      </ClientOnly>
    </Show>
  );
};

export default ContentGeneratorPage;
