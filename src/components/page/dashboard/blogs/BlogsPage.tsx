"use client";

import { TBlog } from "@/types";
import { FiEdit, FiTrash } from "react-icons/fi";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import { createBlog, deleteBlog, updateBlog } from "@/services/BlogsServices";
import BlogForm from "./BlogForm";
import { toast } from "sonner";
import Swal from "sweetalert2";

export default function BlogsPage({ initialBlogs }: { initialBlogs: TBlog[] }) {
  const [blogs, setBlogs] = useState<TBlog[]>(initialBlogs);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editBlog, setEditBlog] = useState<Partial<TBlog> | null>(null);

  const handleSave = async (blog: TBlog) => {
    try {
      if (editBlog?._id) {
        const updated = await updateBlog(editBlog._id, blog);
        if (updated.success) {
          setBlogs((prev) =>
            prev.map((b) => (b._id === updated.data._id ? updated.data : b))
          );
          toast.success("Blog updated successfully!");
        }
      } else {
        const newBlog = await createBlog(blog);
        if (newBlog.success) {
          setBlogs((prev) => [...prev, newBlog.data]);
          toast.success("Blog created successfully!");
        }
      }
      setModalOpen(false);
      setEditBlog(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to save the blog.");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await deleteBlog(id);
          if (res.success) {
            setBlogs((prev) => prev.filter((b) => b._id !== id));
            toast.success("Blog deleted successfully!");
          }
        }
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete the blog.");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <button
          onClick={() => {
            setEditBlog(null);
            setModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add Blog
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2">Title</th>
              <th className="border border-gray-200 p-2">Type</th>
              <th className="border border-gray-200 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="text-center">
                <td className="border border-gray-200 p-2">{blog.title}</td>
                <td className="border border-gray-200 p-2">{blog.type}</td>
                <td className="border border-gray-200 p-2 space-x-2">
                  <button
                    onClick={() => {
                      setEditBlog(blog);
                      setModalOpen(true);
                    }}
                    className="text-green-500 hover:text-green-700"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <BlogForm onSave={handleSave} defaultValues={editBlog || {}} />
      </Modal>
    </div>
  );
}
