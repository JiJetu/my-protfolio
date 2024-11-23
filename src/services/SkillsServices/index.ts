"use server";

import { TSkill } from "@/types";

export const getAllSkills = async (type?: string) => {
  let fetchOptions = {};

  if (type === "ssr") {
    fetchOptions = {
      cache: "no-store",
    };
  } else if (type === "isr") {
    fetchOptions = {
      next: {
        tags: ["Skills"],
      },
    };
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/skills`,
    fetchOptions
  );

  if (!res.ok) {
    throw new Error("Failed to fetch skills data");
  }

  return res.json();
};

export const getSingleSkill = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch skill data");
  }

  return res.json();
};

export const createSkill = async (data: TSkill) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  return res.json();
};

export const updateSkill = async (id: string, data: TSkill) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to update skill");
  }

  return res.json();
};

export const deleteSkill = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete skill");
  }

  return res.json();
};
