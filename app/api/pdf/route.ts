const PDFDocument = require("pdfkit");
const fs = require("fs");

export async function POST(req: Request, res: Response) {
  const data = await req.json();

  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream("output.pdf"));
  data.applicantAddress.forEach((element: string) => {
    doc.text(element, { align: "right" });
  });
  data.employerAddress.forEach((element: string) => {
    doc.text(element, { align: "left" });
  });
  doc.text(data.coverLetter);
  doc.end();
  return Response.json({ message: "pdf created latest" });
}
