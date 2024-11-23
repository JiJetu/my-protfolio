export const SkillType = {
  frontend: "frontend",
  backend: "backend",
} as const;

export type TSkillType = keyof typeof SkillType;

export type TSkill = {
  _id: string;
  name: string;
  proficiency: number;
  skillType: TSkillType;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type TProject = {
  _id: string;
  title: string;
  description: string;
  technology: string;
  projectImg: string;
  github: string;
  github2?: string;
  liveLink: string;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type TBlog = {
  _id: string;
  title: string;
  content: string;
  type: string;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};
