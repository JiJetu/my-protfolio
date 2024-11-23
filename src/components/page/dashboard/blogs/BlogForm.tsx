"use client";

import React, { useState } from "react";
import { TBlog } from "@/types";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

interface BlogFormProps {
  onSave: (blog: TBlog) => void;
  defaultValues?: Partial<TBlog>;
}

export default function BlogForm({
  onSave,
  defaultValues = {},
}: BlogFormProps) {
  const [title, setTitle] = useState(defaultValues.title || "");
  const [content, setContent] = useState(defaultValues.content || "");
  const [type, setType] = useState(defaultValues.type || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...defaultValues, title, content, type } as TBlog);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          placeholder="Enter blog title"
          required
        />
      </div>

      <div>
        <label className="block font-medium text-gray-700">Type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          placeholder="Enter blog type ex. react, frontend.."
          required
        />
        {/* <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        >
          <option value="" disabled>
            Select Type
          </option>
          <option value="news">News</option>
          <option value="tutorial">Tutorial</option>
          <option value="opinion">Opinion</option>
        </select> */}
      </div>

      <div>
        <label className="block font-medium text-gray-700">Content</label>
        <ReactQuill
          value={content}
          onChange={setContent}
          className="bg-white"
          placeholder="Write your blog content here..."
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Blog
        </button>
      </div>
    </form>
  );
}
