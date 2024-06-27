import { Skeleton } from "@/components/ui/skeleton";
import { Show } from "@elements";
import { Separator } from "@ui/separator";

function RemoteConfigSkeleton() {
  return (
    <div className="space-y-2 px-2 py-3">
      {Array.from({ length: 10 }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={`${index}-skeleton`} className="space-y-4">
          <section className="flex items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-6 w-24 rounded-lg" />
              <Skeleton className="h-6 w-28 rounded-lg" />
            </div>
            <Skeleton className="h-10 w-3 rounded-lg" />
          </section>
          <Show when={index !== 9}>
            <Separator className="w-full" />
          </Show>
        </div>
      ))}
    </div>
  );
}

export default RemoteConfigSkeleton;
