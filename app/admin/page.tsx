"use client";

import { useAuth } from "@/lib/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const { user, status } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && user?.role !== "admin") {
      router.push("/"); // redirect non-admin users
    }
  }, [user, status, router]);

  if (status === "loading") return <p>Loading...</p>;

  return <div>Admin Dashboard - Only visible to admin</div>;
}
