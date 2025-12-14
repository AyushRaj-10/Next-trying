"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if not logged in
  if (status === "loading") return <p className="text-white">Loading...</p>;

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  const user = session?.user;

  return (
    <div className="h-screen w-full bg-zinc-900 flex items-center justify-center text-white">
      <div className="bg-zinc-800 p-8 rounded-2xl w-96 text-center shadow-xl">

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={user?.image || "/default-avatar.png"}
            alt="Profile"
            className="w-28 h-28 rounded-full border border-zinc-700"
          />
        </div>

        {/* Name */}
        <h2 className="text-2xl font-semibold">{user?.name}</h2>

        {/* Email */}
        <p className="text-zinc-400 mt-1">{user?.email}</p>

        {/* Buttons */}
        <div className="mt-6 space-y-3">

          {/* Edit Button */}
          <button
            onClick={() => router.push("/Edit")}
            className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-xl font-semibold"
          >
            Edit Profile
          </button>

          {/* Logout Button */}
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-xl font-semibold"
          >
            Logout
          </button>

        </div>
      </div>
    </div>
  );
}
