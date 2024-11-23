"use server";

import { TProject } from "@/types";

export const getAllProjects = async (type?: string) => {
  let fetchOptions = {};

  if (type === "ssr") {
    fetchOptions = {
      cache: "no-store",
    };
  } else if (type === "isr") {
    fetchOptions = {
      next: {
        tags: ["Projects"],
      },
    };
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects`,
    fetchOptions
  );

  if (!res.ok) {
    throw new Error("Failed to fetch projects data");
  }

  return res.json();
};

export const getSingleProject = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch project data");
  }

  return res.json();
};

export const createProject = async (data: TProject) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  return res.json();
};

export const updateProject = async (id: string, data: TProject) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to update project");
  }

  return res.json();
};

export const deleteProject = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete project");
  }

  return res.json();
};
