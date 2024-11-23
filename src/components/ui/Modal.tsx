"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-white rounded shadow-lg max-w-lg w-full relative overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-5 text-gray-700 hover:text-gray-900 z-10"
        >
          ✕
        </button>

        <div className="p-6 max-h-[80vh] overflow-y-auto">{children}</div>
      </motion.div>
    </div>
  );
}
