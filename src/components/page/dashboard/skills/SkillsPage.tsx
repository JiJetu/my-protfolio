"use client";

import { TSkill } from "@/types";
import { FiEdit, FiTrash } from "react-icons/fi";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import {
  createSkill,
  deleteSkill,
  updateSkill,
} from "@/services/SkillsServices";
import SkillForm from "./SkillForm";
import { revalidateTag } from "next/cache";
import { toast } from "sonner";
import Swal from "sweetalert2";

export default function SkillsPage({
  initialSkills,
}: {
  initialSkills: TSkill[];
}) {
  const [skills, setSkills] = useState<TSkill[]>(initialSkills);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editSkill, setEditSkill] = useState<Partial<TSkill> | null>(null);

  const handleSave = async (skill: TSkill) => {
    try {
      if (editSkill?._id) {
        const updated = await updateSkill(editSkill._id, skill);
        if (updated.success) {
          setSkills((prev) =>
            prev.map((s) => (s._id === updated.data._id ? updated.data : s))
          );
          revalidateTag("Skills");
          toast.success("Skill updated successfully!");
        }
      } else {
        const newSkill = await createSkill(skill);
        if (newSkill.success) {
          setSkills((prev) => [...prev, newSkill.data]);
          revalidateTag("Skills");
          toast.success("Skill created successfully!");
        }
      }
      setModalOpen(false);
      setEditSkill(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to save the skill. Please try again.");
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
          const result = await deleteSkill(id);
          if (result.success) {
            setSkills((prev) => prev.filter((s) => s._id !== id));
            revalidateTag("Skills");
            toast.success("Skill deleted successfully!");
          }
        } else {
          toast.error("Failed to delete the skill.");
        }
      });
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while deleting the skill.");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Skills</h1>
        <button
          onClick={() => {
            setEditSkill(null);
            setModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add Skill
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2">Name</th>
              <th className="border border-gray-200 p-2">Proficiency</th>
              <th className="border border-gray-200 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {skills?.map((skill) => (
              <tr key={skill._id} className="text-center">
                <td className="border border-gray-200 p-2">{skill.name}</td>
                <td className="border border-gray-200 p-2">
                  {skill.proficiency}%
                </td>
                <td className="border border-gray-200 p-2 space-x-2">
                  <button
                    onClick={() => {
                      setEditSkill(skill);
                      setModalOpen(true);
                    }}
                    className="text-green-500 hover:text-green-700"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(skill._id)}
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
        <SkillForm onSave={handleSave} defaultValues={editSkill || {}} />
      </Modal>
    </div>
  );
}
