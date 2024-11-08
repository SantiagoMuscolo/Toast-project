"use client";

import PageHeader from "./components/PageHeader/PageHeader";
import ToastForm from "./components/ToastForm/ToastForm";
import Toast from "./components/Toast/Toast";
import { useState } from "react";

export default function Home() {
  const [toasts, setToasts] = useState<{id: number, message:string, variant: string}[]>([]);
  console.log(toasts)

  const handleEliminateToast = (toastId: number) => {
    setToasts((toasts: {id: number, message:string, variant: string}[]) => toasts.filter(toast => toast.id !== toastId));
};

  return (
    <>
      <PageHeader title="Toast Playground" />
      <ToastForm setToasts={setToasts} />
      <div className="flex flex-col fixed bottom-10 right-10 gap-4">
      {toasts.map((toast: { id: number, variant: string; message: string }) => (
        <Toast key={toast.id} variant={toast.variant} message={toast.message} handleEliminateToast={() => handleEliminateToast(toast.id)}/>
      ))}
      </div>
      
    </>
  );
}
