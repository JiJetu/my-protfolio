"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";

export default function ProjectForm({
  onSave,
  defaultValues,
}: {
  onSave: any;
  defaultValues: any;
}) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const onSubmit = (data: any) => {
    onSave(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          {...register("title", { required: true })}
          className="border p-2 rounded w-full"
          placeholder="Project Title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          {...register("description")}
          className="border p-2 rounded w-full"
          placeholder="Project Description"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Technology</label>
        <input
          {...register("technology", { required: true })}
          className="border p-2 rounded w-full"
          placeholder="Technology Stack"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Project Image URL</label>
        <input
          {...register("projectImg", { required: true })}
          className="border p-2 rounded w-full"
          placeholder="Image URL"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">GitHub Link</label>
        <input
          {...register("github", { required: true })}
          className="border p-2 rounded w-full"
          placeholder="GitHub Repository URL"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Second GitHub Link (Optional)
        </label>
        <input
          {...register("github2")}
          className="border p-2 rounded w-full"
          placeholder="Second GitHub URL"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Live Link</label>
        <input
          {...register("liveLink", { required: true })}
          className="border p-2 rounded w-full"
          placeholder="Live Project URL"
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </form>
  );
}
