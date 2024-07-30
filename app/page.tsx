"use client";
import Image from "next/image";
import QueryForm from "@/components/FormComponents/QueryForm";
import ResumeUploader from "@/components/ResumeUploader";
import ResumeContainer from "@/components/ResumeContainer";
import ResumePathContextProvider from "@/components/Providers/ResumePathContextProvider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <ResumePathContextProvider>
        <QueryForm />
        <ResumeUploader />
        {/* <ResumeContainer/> */}
      </ResumePathContextProvider>
    </main>
  );
}
