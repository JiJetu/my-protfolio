"use client";

import { SkillType, TSkill } from "@/types";
import { useForm } from "react-hook-form";

export default function SkillForm({
  onSave,
  defaultValues,
}: {
  onSave: (data: TSkill) => void;
  defaultValues: Partial<TSkill>;
}) {
  const { register, handleSubmit, reset } = useForm<TSkill>({
    defaultValues,
  });

  const onSubmit = (data: TSkill) => {
    onSave(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Skill Name</label>
        <input
          {...register("name", { required: true })}
          className="border p-2 rounded w-full"
          placeholder="Skill Name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Proficiency (0-100)</label>
        <input
          type="number"
          {...register("proficiency", {
            required: true,
            min: 0,
            max: 100,
          })}
          className="border p-2 rounded w-full"
          placeholder="Proficiency Level"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Skill Type</label>
        <select
          {...register("skillType", { required: true })}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Skill Type</option>
          {Object.entries(SkillType).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
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
