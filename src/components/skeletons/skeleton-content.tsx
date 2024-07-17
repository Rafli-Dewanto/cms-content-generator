import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonContent() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[900px]" />
        <Skeleton className="h-4 w-[900px]" />
        <Skeleton className="h-8 w-[100px] rounded-full" />
      </div>
      <Skeleton className="h-[700px] w-[900px] rounded-xl" />
    </div>
  );
}
