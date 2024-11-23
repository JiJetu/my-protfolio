"use client";

import { TProject } from "@/types";
import { FiEdit, FiTrash, FiExternalLink } from "react-icons/fi";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import {
  createProject,
  deleteProject,
  updateProject,
} from "@/services/ProjectsServices";
import ProjectForm from "./ProjectForm";
import { revalidateTag } from "next/cache";
import Image from "next/image";
import { toast } from "sonner";
import Swal from "sweetalert2";

export default function ProjectsPage({
  initialProjects,
}: {
  initialProjects: TProject[];
}) {
  const [projects, setProjects] = useState<TProject[]>(initialProjects);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editProject, setEditProject] = useState<Partial<TProject> | null>(
    null
  );

  const handleSave = async (project: TProject) => {
    try {
      if (editProject?._id) {
        const updated = await updateProject(editProject._id, project);
        if (updated.success) {
          setProjects((prev) =>
            prev.map((p) => (p._id === updated.data._id ? updated.data : p))
          );
          revalidateTag("Projects");
          toast.success("Project updated successfully!");
        }
      } else {
        const newProject = await createProject(project);
        if (newProject.success) {
          setProjects((prev) => [...prev, newProject.data]);
          revalidateTag("Projects");
          toast.success("Project created successfully!");
        }
      }
      setModalOpen(false);
      setEditProject(null);
    } catch (error) {
      console.log(error);
      toast.error("Failed to save the project. Please try again.");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const result = await deleteProject(id);
          if (result.success) {
            setProjects((prev) => prev.filter((p) => p._id !== id));
            revalidateTag("Projects");
            toast.success("Project deleted successfully!");
          }
        } else {
          toast.error("Failed to delete the project.");
        }
      });
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while deleting the project.");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button
          onClick={() => {
            setEditProject(null);
            setModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add Project
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2">Title</th>
              <th className="border border-gray-200 p-2">Image</th>
              <th className="border border-gray-200 p-2">GitHub</th>
              <th className="border border-gray-200 p-2">Live Link</th>
              <th className="border border-gray-200 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects?.map((project) => (
              <tr key={project._id} className="text-center">
                <td className="border border-gray-200 p-2">{project.title}</td>
                <td className="border border-gray-200 p-2">
                  <Image
                    src={project.projectImg}
                    alt={project.title}
                    width={64}
                    height={64}
                    className="object-cover mx-auto"
                  />
                </td>
                <td className="border border-gray-200 p-2">
                  {project.github && project.github2 ? (
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        <FiExternalLink />
                      </a>
                      <a
                        href={project.github2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  ) : project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      <FiExternalLink />
                    </a>
                  ) : (
                    <span className="text-red-500">No Link</span>
                  )}
                </td>
                <td className="border border-gray-200 p-2">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      <FiExternalLink />
                    </a>
                  ) : (
                    <span className="text-red-500">No Link</span>
                  )}
                </td>
                <td className="border border-gray-200 p-2 space-x-2">
                  <button
                    onClick={() => {
                      setEditProject(project); // Set project data for editing
                      setModalOpen(true);
                    }}
                    className="text-green-500 hover:text-green-700"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(project._id)}
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
        <ProjectForm onSave={handleSave} defaultValues={editProject || {}} />
      </Modal>
    </div>
  );
}
