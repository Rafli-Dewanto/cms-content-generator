import ListContent from "@/components/ListContent";
import { Skeleton } from "@/components/ui/skeleton";
import { useContents } from "@/hooks/contents/use-contents";
import MainLayout from "@/layouts/main-layout";
import { Content } from "@/types";
import { Show } from "@elements";
import { nanoid } from "nanoid";
import { ErrorBoundary } from "react-error-boundary";

export default function Home() {
  const { data: contents, isError, isLoading } = useContents();

  return (
    <MainLayout>
      <Show when={isError}>
        <div>{"Something went wrong"}</div>
      </Show>

      <Show when={isLoading}>
        <div className="space-y-6 py-10">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-10 w-96" />
          {Array.from({ length: 10 }).map(() => (
            <Skeleton key={`${nanoid()}`} className="h-20 w-full" />
          ))}
        </div>
      </Show>

      <Show
        when={!isError && !isLoading && !!contents && (contents as Content[]).length > 0}
        fallback={
          <div>
            <p>No content has been generated yet</p>
          </div>
        }
      >
        <h1 className="my-8 text-3xl font-bold">Contents</h1>
        <section className="space-y-7">
          <ErrorBoundary fallback={<span>{"Something went wrong"}</span>}>
            <ListContent contents={(contents as Content[]) ?? []} />
          </ErrorBoundary>
        </section>
      </Show>
    </MainLayout>
  );
}
