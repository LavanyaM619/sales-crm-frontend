"use client";

import { useState } from "react";
import API from "@/lib/api";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";


export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", lastname: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", form);
      if (res.data.success) router.push("/login");
    } catch (err: unknown) {
  if (err instanceof AxiosError) {
    setError(err.response?.data?.message || "Something went wrong");
  } else if (err instanceof Error) {
    setError(err.message);
  } else {
    setError("Something went wrong");
  }
}
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <input name="name" placeholder="First Name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded mb-3" />
        <input name="lastname" placeholder="Last Name" value={form.lastname} onChange={handleChange} className="w-full p-2 border rounded mb-3" />
        <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded mb-3" />
        <input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} className="w-full p-2 border rounded mb-3" />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
          Register
        </button>
        <p className="text-sm text-center mt-3">
          Already have an account? <a href="/login" className="text-blue-600">Login</a>
        </p>
      </form>
    </div>
  );
}
