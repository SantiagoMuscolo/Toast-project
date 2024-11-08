"use client";

import { CircleCheck, CircleX, Info, Plus, TriangleAlert } from "lucide-react";
import { useState } from "react";

interface Props {
    variant: string;
    message: string;
    handleEliminateToast: () => void;
}

function Toast({ variant, message, handleEliminateToast }: Props) {
  const [click, setClick] = useState(false);
  const variantValidation =
    variant === "notice"
      ? "bg-blue-100"
      : variant === "success"
      ? "bg-green-200"
      : variant === "warning"
      ? "bg-orange-200"
      : "bg-red-200";
  const iconValidation =
    variant === "notice" ? (
      <Info className="text-blue-900" />
    ) : variant === "success" ? (
      <CircleCheck className="text-green-900" />
    ) : variant === "warning" ? (
      <TriangleAlert className="text-orange-900" />
    ) : (
      <CircleX className="text-red-900" />
    );

    const handleClick = () => {
        setClick(true);
        setTimeout(() => handleEliminateToast(), 300);
    };
console.log(click)
  return (
    <div
      className={`${variantValidation} text-black py-4 w-[300px] text-start pl-5 font-semibold rounded-xl flex items-center justify-between ${click ? "animate-slideOut" : "animate-slideIn"}`}
    >
      <div className="flex gap-3">
        {iconValidation}
        {message}
      </div>
      <button
        className="relative right-6"
        onClick={handleClick}
      >
        <Plus className="rotate-45" />
      </button>
    </div>
  );
}

export default Toast;
