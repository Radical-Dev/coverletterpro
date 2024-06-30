import React, { useContext } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { AddressContext } from "./Providers/FormContextProvider";

export default function EmployerData() {
  const { employerAddress, setEmployerAddress, addEmployerAddressField } =
    useContext(AddressContext);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    addEmployerAddressField();
  };

  return (
    <div className="mt-8 flex flex-col items-start">
      <h3 className="text-base-content text-xl">Employer Data</h3>
      {employerAddress.map((value, index) => (
        <input
          id={`employerData[${index}]`}
          key={`employerData[${index}]`}
          value={value}
          type="text"
          placeholder="Address Field"
          onChange={(e) => {
            setEmployerAddress(index, e.target.value);
          }}
          className="input border-b border-t-0 border-r-0 border-l-0 rounded-none border-neutral w-1/2 max-w-xs"
        />
      ))}
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
