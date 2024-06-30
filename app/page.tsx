import Image from "next/image";
import QueryForm from "@/components/QueryForm";
import ResumeUploader from "@/components/ResumeUploader";
import ResumeContainer from "@/components/ResumeContainer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <QueryForm />
      <ResumeUploader />
      {/* <ResumeContainer/> */}
    </main>
  );
}
