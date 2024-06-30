import React, { useState, useContext, useEffect } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { AddressContext } from "./Providers/FormContextProvider";

export default function ApplicantData() {
  const { applicantAddress, setApplicantAddress, addApplicantAddressField } =
    useContext(AddressContext);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    addApplicantAddressField();
  };

  return (
    <div className="flex flex-col items-end">
      <h3 className="text-base-content text-xl">Applicant Data</h3>
      <div id="fieldList" className="flex flex-col">
        {applicantAddress.map((value, index) => (
          <input
            id={`applicantData[${index}]`}
            key={`applicantData[${index}]`}
            value={value}
            type="text"
            placeholder="Address Field"
            onChange={(e) => {
              setApplicantAddress(index, e.target.value);
            }}
            className="input border-b border-t-0 border-r-0 border-l-0 rounded-none border-neutral w-full"
          />
        ))}
      </div>
      <div
        onClick={handleClick}
        className="flex text-secondary items-center hover:text-accent gap-2 cursor-pointer transition"
      >
        <span>Add field</span>
        <FaPlusSquare />
      </div>
    </div>
  );
}
