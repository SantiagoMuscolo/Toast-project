"use client";

import { SetStateAction, useState } from "react";

function ToastForm({ setToasts }: {setToasts: React.Dispatch<SetStateAction<{id: number, message:string, variant: string}[]>>}) {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");

  const handleSubmitToast = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const newToast = {
      id: Math.random(),
      message,
      variant,
    };

    setToasts((prevToasts: {id: number, message:string, variant: string}[]) => [...prevToasts, newToast]);
    setMessage("");
    setVariant("");
  };

  return (
    <div className="border-2 border-dashed border-gray-400 rounded-lg p-1 mt-10">
      <form
        onSubmit={handleSubmitToast}
        className="bg-white w-[750px]  rounded-lg p-2"
      >
        <div className="flex items-start gap-4 mt-5 justify-center border-b border-dashed border-gray-400 pb-5">
          <span className="text-black font-semibold">Message</span>
          <textarea
            required
            minLength={3}
            maxLength={20}
            className="bg-white text-black border border-black w-[500px] resize-none"
            value={message}
            onChange={(e) => {
              const value = e.target.value;
              setMessage(value);
            }}
          />
        </div>
        <div className="flex text-black gap-7 justify-center border-b border-dashed border-gray-400 pb-5 mt-5">
          <span className="font-semibold">variant</span>
          <div className="flex w-[500px] gap-14">
            <label className="flex items-center">
              <input
                required={variant === ""}
                type="radio"
                name="notice"
                className="mr-2"
                value="notice"
                checked={variant === "notice"}
                onChange={(e) => {
                  const value = e.target.value;
                  setVariant(value);
                }}
              />
              notice
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="warning"
                className="mr-2"
                value="warning"
                checked={variant === "warning"}
                onChange={(e) => {
                  const value = e.target.value;
                  setVariant(value);
                }}
              />
              warning
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="success"
                className="mr-2"
                value="success"
                checked={variant === "success"}
                onChange={(e) => {
                  const value = e.target.value;
                  setVariant(value);
                }}
              />
              success
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="error"
                className="mr-2"
                value="error"
                checked={variant === "error"}
                onChange={(e) => {
                  const value = e.target.value;
                  setVariant(value);
                }}
              />
              error
            </label>
          </div>
        </div>
        <div className="mt-5 pb-5 pl-20">
          <button
            type="submit"
            className="capitalize text-white w-[200px] bg-purple-800 p-4 rounded-md font-bold active:scale-95 transition-all ease-out duration-200"
          >
            pop toast
          </button>
        </div>
      </form>
    </div>
  );
}

export default ToastForm;
