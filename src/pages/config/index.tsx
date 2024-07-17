/* eslint-disable react/no-array-index-key */
import { Show } from "@elements";
import CreateParamForm from "@/components/forms/create-param";
import EditParamForm from "@/components/forms/edit-param-form";
import TripleDots from "@/components/icons/triple-dots";
import RemoteConfigSkeleton from "@/components/skeletons/remote-config";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import MainLayout from "@/layouts/main-layout";
import { cn } from "@/lib/utils";
import { Status } from "@/types/status";
import { getErrorMessage } from "@/utils/get-error-msg";
import axios from "axios";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDebounceCallback, useMediaQuery } from "usehooks-ts";

type RemoteConfigParameter = {
  defaultValue: { value: string };
  valueType: "STRING" | "BOOLEAN" | "NUMBER";
  description?: string;
  conditionalValues?: {
    [condition: string]: { conditionExpression: string };
  };
};

type RemoteConfigData = {
  [paramName: string]: RemoteConfigParameter;
};

const RemoteConfigPage = () => {
  const mobile = useMediaQuery("(max-width: 768px)");
  const [features, setFeatures] = useState<RemoteConfigData>({});
  const [filteredFeatures, setFilteredFeatures] = useState<RemoteConfigData>({});
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [cookies] = useCookies(["token", "userEmail"]);
  const [status, setStatus] = useState<Status>("idle");
  const debouncedSearch = useDebounceCallback(setSearch, 700);

  async function deleteParam(paramName: string) {
    try {
      const { status } = await axios.delete(
        `${process.env.NEXT_PUBLIC_REMOTE_CONFIG_SERVICE_BASE_URL}/remote-config`,
        {
          params: { parameter_name: paramName },
        }
      );

      if (!status.toString().startsWith("2")) {
        const msg = getErrorMessage(error);
        setError(msg);
        setStatus("error");
      }
      setStatus("idle");
      window.location.reload();
    } catch (error) {
      const msg = getErrorMessage(error);
      setError(msg);
      setStatus("error");
    }
  }

  useEffect(() => {
    setFilteredFeatures(
      Object.fromEntries(
        Object.entries(features).filter(([key]) => key.toLowerCase().includes(search.toLowerCase()))
      )
    );
  }, [search, features]);

  useEffect(() => {
    async function getRemoteConfigTempate() {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_HOST_API_REMOTE_CONFIG}/remote-config`,
          {
            headers: {
              token: cookies?.token,
              "x-user-email": cookies?.userEmail,
            },
          }
        );
        const template = data.data.template.parameters;
        setFeatures(template);
        setStatus("success");
        setError("");
      } catch (error) {
        const msg = getErrorMessage(error);
        setError(msg);
        setStatus("error");
      }
    }
    getRemoteConfigTempate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>
      <section className="w-full rounded-xl border bg-gray-200">
        <header className="flex w-full justify-between space-x-2 bg-gray-100 px-2 py-3">
          <search className="relative w-full max-w-[24rem]">
            <form>
              <Input
                onChange={e => debouncedSearch(e.target.value)}
                name="search"
                id="search"
                placeholder="Search..."
                className="border focus-visible:ring-dodger-blue-800"
              />
            </form>
            <SearchIcon size={20} color="#88867E" className="absolute bottom-[0.625rem] right-4" />
          </search>
          <CreateParamForm />
        </header>
        <div className="h-full w-full bg-white">
          {error && <p>{error}</p>}
          <Show
            when={Boolean(features) && Boolean(filteredFeatures)}
            fallback={<RemoteConfigSkeleton />}
          >
            {Object.keys(filteredFeatures).map((paramName, index) => (
              <div key={`${paramName}-${index}`}>
                <li className="container flex cursor-pointer list-none items-center justify-between py-4 hover:bg-slate-50">
                  <div>
                    <p>{paramName}</p>
                    <p>{features[paramName].defaultValue.value}</p>
                  </div>
                  <Popover>
                    <PopoverTrigger>
                      <TripleDots direction="vertical" />
                    </PopoverTrigger>
                    <PopoverContent className="max-w-[12rem]">
                      <Sheet>
                        <SheetTrigger
                          className={`h-full w-full cursor-pointer rounded-md p-2 text-start hover:bg-blue-100 hover:text-blue-900`}
                        >
                          Edit
                        </SheetTrigger>
                        <SheetContent
                          side={mobile ? "bottom" : "right"}
                          className={cn("px-0", {
                            "min-w-[37.5rem]": !mobile,
                          })}
                        >
                          <SheetHeader>
                            <SheetTitle className="px-4 pb-6">Edit parameter</SheetTitle>
                          </SheetHeader>
                          <Separator />
                          <EditParamForm
                            dataType={features[paramName].valueType}
                            defaultValue={features[paramName].defaultValue.value}
                            paramName={paramName}
                            description={features[paramName].description ?? ""}
                          />
                        </SheetContent>
                      </Sheet>
                      <Dialog>
                        <DialogTrigger className="w-full">
                          <div className="h-full w-full cursor-pointer rounded-md p-2 text-start hover:bg-red-100 hover:text-red-600">
                            Delete
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                              This action cannot be undone. This will permanently delete{" "}
                              <p className="inline-block font-bold text-blue-600">{paramName}</p>{" "}
                              from our servers.
                            </DialogDescription>
                          </DialogHeader>
                          <button
                            disabled={status === "loading"}
                            onClick={() => deleteParam(paramName)}
                            className="h-full cursor-pointer rounded-md p-2 text-start hover:bg-red-100 hover:text-red-600"
                          >
                            Delete
                          </button>
                        </DialogContent>
                      </Dialog>
                    </PopoverContent>
                  </Popover>
                </li>
                <Separator />
              </div>
            ))}
          </Show>
        </div>
      </section>
    </MainLayout>
  );
};

export default RemoteConfigPage;
