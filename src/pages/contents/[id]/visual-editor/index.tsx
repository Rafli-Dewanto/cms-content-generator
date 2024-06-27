/* eslint-disable react/jsx-no-useless-fragment */
import { Show, ClientOnly } from "@elements";
import UpdateContentForm from "@/components/forms/update-content";
import { config, initialData } from "@/components/puck-editor";
import MainLayout from "@/layouts/main-layout";
import supabase from "@/lib/supabase";
import { Content } from "@/types";
import { getErrorMessage } from "@/utils/get-error-msg";
import { Config, Data, Puck, Render } from "@measured/puck";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const EditContentPage = () => {
  const [content, setContent] = useState<Content | null>(null);
  const [isContentUpdated, setIsContentGenerated] = useState(false);
  const [error, setError] = useState<string>("");
  const [, setIsLoading] = useState(false);
  const [puckConf, setPuckConf] = useState<string | null>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getContent = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase.from("contents").select("*").eq("id", String(id));

        if (error) {
          setError(error.message);
          return;
        }

        if (data == null) {
          setError("Content not found");
          return;
        }

        if (!data[0]?.puck_config) {
          setError("puck_config is missing");
          setPuckConf(null);
          return;
        }

        setContent(data![0]);
        setPuckConf(JSON.parse(data[0]?.puck_config as string));
        setError("");
      } catch (error) {
        const errorMsg = getErrorMessage(error);
        setError(errorMsg);
      } finally {
        setIsLoading(false);
      }
    };
    getContent();
  }, [id]);

  const updateContent = (data: Data) => {
    sessionStorage.removeItem("puck-editor-conf");
    sessionStorage.setItem("puck-editor-conf", JSON.stringify(data));
    setIsContentGenerated(true);
    const html = renderToStaticMarkup(<Render config={config as Config} data={data} />);
    // save html
    sessionStorage.removeItem("puck-editor");
    sessionStorage.setItem("puck-editor", html);
  };

  return (
    <>
      <Show
        when={!isContentUpdated && !error && puckConf != null}
        fallback={
          <MainLayout>
            <UpdateContentForm content={content as Content} />
          </MainLayout>
        }
      >
        <ClientOnly>
          <Puck
            config={config as Config}
            data={(puckConf as unknown as Data) ?? initialData}
            onPublish={updateContent}
          />
        </ClientOnly>
      </Show>
    </>
  );
};

export default EditContentPage;
