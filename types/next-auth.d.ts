import type { DefaultSession } from "next-auth";


declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;  // add role
      id?: string;    // optional userId
    };
  }

  interface User {
    role?: string;
    id?: string;
  }
}
