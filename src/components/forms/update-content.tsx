/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-danger */
import supabase from "@/lib/supabase";
import { Content, IStandaloneCodeEditor } from "@/types";
import { Editor } from "@monaco-editor/react";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Show } from "@elements";
import { AlertDestructive } from "../error-alert";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ui/resizable";
import { Switch } from "@ui/switch";

const UpdateContentForm = ({ content }: { content: Content }) => {
  const editorRef = useRef<IStandaloneCodeEditor | null>(null);
  const [title, setTitle] = useState(content?.title);
  const [urlKey, setUrlKey] = useState(content?.url_key);
  const [isActive, setIsActive] = useState(content?.status);
  const [html, setHTML] = useState("");
  const [puckConf, setPuckConf] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const mobile = useMediaQuery("( max-width: 1024px )");

  useEffect(() => {
    editorRef?.current?.getAction("editor.action.formatDocument")?.run();
    const content = sessionStorage.getItem("puck-editor");
    const puckEditorConf = sessionStorage.getItem("puck-editor-conf");
    setPuckConf(JSON.parse(puckEditorConf ?? "{}"));
    setHTML(content ?? "");
  }, []);

  async function handleUpdateContent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from("contents")
        .update({
          title,
          url_key: urlKey,
          status: isActive,
          content: html,
          updated_at: new Date().toISOString(),
          puck_config: JSON.stringify(puckConf),
        })
        .eq("id", String(content.id));

      if (error != null) {
        setError(error.message);
      }
      router.replace("/");
      setError("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <div
        className={`fixed right-8 top-8 z-[999] ${error && error.length > 0 ? "block" : "hidden"}`}
      >
        <AlertDestructive title="Error" description={error} />
      </div>
      <form method="post" onSubmit={handleUpdateContent} className="space-y-8" key={content?.id}>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            name="title"
            defaultValue={content?.title as string}
            placeholder="Content title"
            type="text"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="title">URL Key</Label>
          <Input
            name="urlKey"
            defaultValue={content?.url_key as string}
            placeholder="Content URL Key"
            type="text"
            onChange={e => setUrlKey(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="title">Status</Label>
          <div key={String(content?.status)}>
            <Switch
              name="status"
              defaultChecked={content?.status as boolean}
              onCheckedChange={e => setIsActive(e)}
            />
          </div>
        </div>
        <section className="space-y-6">
          <Show when={!mobile}>
            <ResizablePanelGroup
              direction={"horizontal"}
              className="min-h-[50rem] rounded-lg border"
            >
              <ResizablePanel defaultSize={100}>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex w-full justify-between px-8">
                    <Label htmlFor="title" className="py-8 text-lg font-bold">
                      Content
                    </Label>
                    <div
                      className="flex cursor-pointer items-center gap-x-2"
                      onClick={() =>
                        editorRef?.current?.getAction("editor.action.formatDocument")?.run()
                      }
                    >
                      <Sparkles color="#1d64d8" />
                      <span className="hover:text-gray-500 active:text-gray-950">Prettify</span>
                    </div>
                  </div>
                  <div className="w-full">
                    <Editor
                      onMount={editor => {
                        editorRef.current = editor;
                      }}
                      key={content && content.id ? content.id : 0}
                      className="h-full min-h-[80rem] rounded-lg"
                      defaultLanguage="html"
                      value={html}
                      theme="vs-dark"
                      options={{
                        fontSize: 14,
                        minimap: {
                          enabled: false,
                        },
                        contextmenu: false,
                      }}
                      onChange={value => setHTML(value ?? "")}
                    />
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={100}>
                <div className="flex flex-col items-center justify-center">
                  <Label htmlFor="title" className="py-8 text-lg font-bold">
                    Preview
                  </Label>
                  <div className="w-full overflow-scroll border-t-[1px] px-4 py-3">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: html ?? "",
                      }}
                    />
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </Show>
          {/* responsive vertical panel */}
          <Show when={mobile}>
            <ResizablePanelGroup direction={"vertical"} className="min-h-[50rem] rounded-lg border">
              <ResizablePanel defaultSize={100}>
                <div className="flex flex-col items-center justify-center">
                  <Label htmlFor="title" className="py-8 text-lg font-bold">
                    Content
                  </Label>
                  <div className="w-full">
                    <Editor
                      key={content && content.id ? content.id : 0}
                      className="min-h-[50rem] rounded-lg"
                      defaultLanguage="html"
                      value={content?.content?.trim()}
                      theme="vs-dark"
                      options={{
                        fontSize: 14,
                        minimap: {
                          enabled: false,
                        },
                        contextmenu: false,
                      }}
                      onChange={value => setHTML(value ?? "")}
                    />
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex flex-col items-center justify-center overscroll-y-contain">
                  <Label htmlFor="title" className="py-8 text-lg font-bold">
                    Preview
                  </Label>
                  <div className="w-full overflow-scroll border-t-[1px] px-4 py-3">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: html ?? "",
                      }}
                    />
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </Show>
        </section>
        <div className="mx-auto">
          <Button disabled={isLoading} type="submit" className="max-w-lg">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateContentForm;
