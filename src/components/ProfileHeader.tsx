import Image from "next/image";
import type { Profile } from "@/types/link";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center gap-2 pt-4">
      <div className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-neutral-200 dark:ring-neutral-800">
        <Image
          src={profile.avatarUrl}
          alt={`${profile.name} 프로필 사진`}
          fill
          sizes="128px"
          className="object-cover"
        />
      </div>
      <h1 className="text-lg font-semibold">{profile.name}</h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">{profile.bio}</p>
    </header>
  );
}
