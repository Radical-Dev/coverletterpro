import React, { createContext, useState } from "react";

type addressForm = {
  applicantAddress: string[];
  employerAddress: string[];
  setApplicantAddress: (index: number, value: string) => void;
  addApplicantAddressField: () => void;
  setEmployerAddress: (index: number, value: string) => void;
  addEmployerAddressField: () => void;
};

// Create context to share state to form components. Set context to default values
export const AddressContext = createContext<addressForm>({
  applicantAddress: [],
  employerAddress: [],
  setApplicantAddress: () => {},
  addApplicantAddressField: () => {},
  setEmployerAddress: () => {},
  addEmployerAddressField: () => {},
});

export default function FormContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // create blank string arrays to contain address form values
  const [applicantAdState, setApplicantAdState] = useState([""]);
  const [employerAdState, setEmployerAdState] = useState([""]);

  // initialize context with the actual state values and setter functions we want to pass to the consumer component

  let contextData: addressForm = {
    applicantAddress: applicantAdState,
    employerAddress: employerAdState,
    setApplicantAddress: (index, value) => {
      const newArr = applicantAdState.map((val, i) => {
        if (i == index) {
          return value;
        } else {
          return val;
        }
      });
      setApplicantAdState(newArr);
    },
    addApplicantAddressField: () => {
      setApplicantAdState([...applicantAdState, ""]);
    },
    setEmployerAddress: (index, value) => {
      const newArr = employerAdState.map((val, i) => {
        if (i == index) {
          return value;
        } else {
          return val;
        }
      });
      setEmployerAdState(newArr);
    },
    addEmployerAddressField: () => {
      setEmployerAdState([...employerAdState, ""]);
    },
  };

  let applicantData: string[] = ["test1"];
  let employerData: string[] = [""];
  return (
    <AddressContext.Provider value={contextData}>
      {children}
    </AddressContext.Provider>
  );
}
