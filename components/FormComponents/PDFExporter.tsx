import React, { useContext } from "react";
import { AddressContext } from "../Providers/FormContextProvider";

function PDFExporter({ coverLetter }: { coverLetter: string }) {
  const { applicantAddress, employerAddress } = useContext(AddressContext);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const url = "http://localhost:3000/api/pdf";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        applicantAddress,
        employerAddress,
        coverLetter,
      }),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <button
      onClick={handleClick}
      className="btn btn-secondary max-w-[10rem] self-end mt-7"
    >
      Export as PDF
    </button>
  );
}

export default PDFExporter;
