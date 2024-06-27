import Show from "@/components/elements/show/show";
import EditContentForm from "@/components/forms/edit-content-form";
import { SkeletonContent } from "@/components/skeletons/skeleton-content";
import { useContent } from "@/hooks/contents/use-content";
import MainLayout from "@/layouts/main-layout";
import { Content } from "@/types";
import { useRouter } from "next/router";
import { useScript } from "usehooks-ts";

const ContentPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const cdnScript = useScript(`https://cdn.tailwindcss.com`, {
    removeOnUnmount: true,
  });
  const { data: content } = useContent(id as string);

  return (
    <MainLayout>
      <Show when={Boolean(content) && cdnScript === "ready"} fallback={<SkeletonContent />}>
        <EditContentForm content={content as Content} />
      </Show>
    </MainLayout>
  );
};

export default ContentPage;
