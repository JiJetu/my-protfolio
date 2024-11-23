"use server";

import { TBlog } from "@/types";

export const getAllBlogs = async (type?: string) => {
  let fetchOptions = {};

  if (type === "ssr") {
    fetchOptions = {
      cache: "no-store",
    };
  } else if (type === "isr") {
    fetchOptions = {
      next: {
        tags: ["Blogs"],
      },
    };
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs`,
    fetchOptions
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs data");
  }

  return res.json();
};

export const getSingleBlog = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }

  return res.json();
};

export const createBlog = async (data: TBlog) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to create blog");
  }

  return res.json();
};

export const updateBlog = async (id: string, data: TBlog) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to update blog");
  }

  return res.json();
};

export const deleteBlog = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete blog");
  }

  return res.json();
};
