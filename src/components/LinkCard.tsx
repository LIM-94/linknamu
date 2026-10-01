import type { LinkItem } from "@/types/link";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-center font-medium shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-neutral-800 dark:bg-neutral-900"
    >
      {link.title}
    </a>
  );
}
