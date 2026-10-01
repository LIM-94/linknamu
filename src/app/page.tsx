import DarkModeToggle from "@/components/DarkModeToggle";
import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import type { LinkItem, Profile } from "@/types/link";

const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  avatarUrl: "/avatar-placeholder.svg",
};

const links: LinkItem[] = [
  { id: "1", title: "GitHub", url: "https://github.com" },
  { id: "2", title: "LinkedIn", url: "https://linkedin.com" },
  { id: "3", title: "Blog", url: "https://example.com/blog" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-6 px-4 pb-12">
      <div className="flex w-full justify-end pt-4">
        <DarkModeToggle />
      </div>
      <ProfileHeader profile={profile} />
      <LinkList links={links} />
    </main>
  );
}
