import pdf from "pdf-parse";

import fs from "fs/promises";

export async function readPDF(pdfPath: string) {
  const dataBuffer = await fs.readFile(pdfPath);
  const retVal = pdf(dataBuffer).then(function (data) {
    return data.text;
  });

  return retVal;
}
