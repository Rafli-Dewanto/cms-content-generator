import { useDeleteContent } from "@/hooks/contents/use-delete-content";
import { useToast } from "@/hooks/use-toast";
import { Content as ContentType } from "@/types";
import { Button } from "@ui/button";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AutoSizer, List, ListRowProps } from "react-virtualized";
import { useDebounceCallback } from "usehooks-ts";
import CopyToClipBoard from "./copy-clipboard";
import Search from "./search";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type Props = {
  contents: ContentType[];
};

const ListContent = (props: Props) => {
  const { contents } = props;
  const mutation = useDeleteContent();
  const { toast } = useToast();
  const [search, setSearch] = useState("");
  const [filteredContents, setFilteredContents] = useState<ContentType[]>(contents);
  const debouncedSearch = useDebounceCallback(setSearch, 700);

  useEffect(() => {
    setFilteredContents(
      contents.filter(content => content.title?.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, contents]);

  const closeDialog = () => {
    const closeButton = document.querySelector("[data-state='open'] [data-state='closed']");
    if (closeButton instanceof HTMLElement) {
      closeButton.click();
    }
  };

  /**
   * Renders a row for the virtualized list.
   * Each row represents a content item with options to view, copy, and delete.
   *
   * @param {ListRowProps} props - The properties passed to each row by the virtualized list.
   * @param {number} props.index - The index of the row.
   * @param {string} props.key - The unique key for the row.
   * @param {React.CSSProperties} props.style - The CSS styles for the row.
   * @returns {React.ReactNode} The row element to be rendered.
   */
  const rowRenderer = ({ index, key, style }: ListRowProps) => {
    // Retrieve the content item using the index.
    const content = filteredContents[index];

    return (
      <div
        key={`${content.id}${key}`}
        style={style}
        className="flex justify-between rounded-md border border-slate-100 px-4 py-4 transition-all hover:border-slate-100 hover:bg-slate-50"
      >
        {/* Link to the content detail page */}
        <Link href={`/contents/${content.id}`} className="h-full w-full cursor-pointer">
          <h3 className="font-semibold">{content?.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{content?.url_key}</p>
        </Link>
        {/* Action buttons for copying and deleting content */}
        <div className="flex flex-row items-center space-x-4">
          <CopyToClipBoard content={content} />
          <Dialog>
            <DialogTrigger className="h-fit rounded-md p-2 transition-colors hover:bg-red-200">
              <Trash2 size={14} color="#ff0000" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="mb-6">Are you sure to delete this content?</DialogTitle>
                <DialogDescription className="flex space-x-4">
                  <Button
                    disabled={mutation.isPending}
                    className="bg-red-500 text-red-200 transition-colors hover:bg-red-600"
                    onClick={() => {
                      mutation.mutate(content.id, {
                        onSuccess: () => {
                          closeDialog();
                          toast({
                            title: "Content deleted",
                            description: `${content?.title} deleted successfully`,
                            variant: "default",
                            duration: 3000,
                          });
                        },
                        onError: ({ message }) => {
                          toast({
                            title: "Failed to delete content",
                            description: `Something went wrong while deleting the content: ${message}`,
                            variant: "destructive",
                            duration: 4000,
                          });
                        },
                      });
                    }}
                  >
                    Delete
                  </Button>
                  <DialogClose asChild>
                    <Button variant={"ghost"}>Close</Button>
                  </DialogClose>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    );
  };

  return (
    <>
      <Search onChange={debouncedSearch} />
      <section className="my-4 space-y-12 first:mt-7">
        <div style={{ flex: "1 1 auto", height: "100vh" }}>
          <AutoSizer>
            {({ height, width }) => {
              return (
                <List
                  width={width}
                  rowRenderer={rowRenderer}
                  height={height}
                  rowCount={filteredContents.length}
                  rowHeight={100}
                />
              );
            }}
          </AutoSizer>
        </div>
      </section>
    </>
  );
};

export default ListContent;
