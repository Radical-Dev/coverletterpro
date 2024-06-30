import { readPDF } from "@/utils/readPDF";

export default async function ResumeContainer() {
  const pdf = await readPDF();

  return <div>{pdf}</div>;
}
