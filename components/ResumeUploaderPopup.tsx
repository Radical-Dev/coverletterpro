import React, { useState, useContext } from "react";
import { ResumePathContext } from "./Providers/ResumePathContextProvider";

type ResumeUploaderPopupProps = {
  hidden: boolean;
};
export default function ResumeUploaderPopup({
  hidden,
}: ResumeUploaderPopupProps) {
  const { urlPath, setUrlPath } = useContext(ResumePathContext);

  const [file, setFile] = useState<File>();

  let visibillityClass = "hidden";
  if (!hidden) {
    visibillityClass = " ";
  }

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch("/api/pdf/upload", {
        method: "POST",
        body: data,
      });
      // handle the error
      if (!res.ok) throw new Error(await res.text());
      res.json().then((data) => {
        setUrlPath(data.path);
      });
    } catch (e: any) {
      // Handle errors here
      console.error(e);
    }
  };

  return (
    <div
      className={`${visibillityClass} card bg-neutral border-warning text-neutral-content w-96 fixed bottom-6 right-7 `}
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title">Upload resume below</h2>
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setFile(e.target.files?.[0])}
            name="file"
            type="file"
            className={`file-input file-input-bordered file-input-secondary w-full max-w-xs`}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
