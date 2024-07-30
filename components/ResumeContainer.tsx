import { readPDF } from "@/utils/readPDF";

export default async function ResumeContainer() {
  const pdf = await readPDF("./uploads/Quewayne Resume.pdf");

  return <div>{pdf}</div>;
}
