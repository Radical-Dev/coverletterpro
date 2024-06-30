"use client";
import {
  useState,
  useEffect,
  Suspense,
  TextareaHTMLAttributes,
  createContext,
} from "react";
import { FaPlusSquare } from "react-icons/fa";
import ApplicantData from "./ApplicantData";
import EmployerData from "./EmployerData";
import FormContextProvider from "./Providers/FormContextProvider";

type formfields = {
  jobDescription?: string;
};

export default function QueryForm() {
  // let adForm: addressForm = {
  //   applicantAddress: [
  //     {
  //       name: document.querySelector<HTMLInputElement>(
  //         'input[name="applicantName"]'
  //       ).name,
  //       value: document.getElementById("fieldList").value,
  //     },
  //   ],
  // };
  const [formState, setFormState] = useState<formfields>({});
  const [coverLetterState, setCoverLetterState] = useState();
  const [loadingState, setLoadingState] = useState(false);

  // const addField = (element: HTMLInputElement) => {
  //   setAddressState((prevState) =>{
  //     return {...prevState,
  //       prevState.applicantAddress.push({name:[element.name], value:element.value})
  //     }
  //   })
  // };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoadingState(true);
    const reqData = {
      message: formState.jobDescription,
    };
    const url = "http://localhost:3000/api";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        message: formState.jobDescription,
      }),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCoverLetterState(data.message);
        setLoadingState(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <FormContextProvider>
      <div className="flex justify-between container mx-auto text-slate-700 gap-[5rem]">
        <div className="flex flex-col items-center w-1/2">
          <textarea
            placeholder="Paste job description here"
            className="w-full p-2 textarea textarea-bordered text-base-content"
            value={formState.jobDescription}
            onChange={handleChange}
            name="jobDescription"
            id="jobDescription"
          ></textarea>
          <button
            onClick={handleClick}
            className="mt-4 py-2 px-4 btn btn-primary text-primary-content"
          >
            {" "}
            Generate Cover Leter{" "}
          </button>
        </div>

        <div className="flex flex-col w-1/2">
          <ApplicantData />
          <EmployerData />
          <div className="mt-8 bg-neutral card min-h-60 shadow w-full p-4 text-neutral-content">
            {coverLetterState}
          </div>

          {loadingState && (
            <span className="loading loading-spinner loading-lg"></span>
          )}
        </div>
      </div>
    </FormContextProvider>
  );
}
