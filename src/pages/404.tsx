import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <main className="flex flex-1 flex-col items-center justify-center">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Page Not Found</h1>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        <div className="mt-8 space-x-4">
          <Link
            href={"/"}
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium text-slate-950 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          >
            Return to website
          </Link>
        </div>
      </main>
    </div>
  );
}
