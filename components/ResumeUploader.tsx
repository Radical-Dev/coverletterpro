"use client";
import { useState } from "react";
import ResumeUploaderPopup from "./ResumeUploaderPopup";

function ResumeUploader() {
  const [hidden, setHidden] = useState(true);
  let visibillityClass = hidden ? " " : "hidden";
  return (
    <>
      <ResumeUploaderPopup hidden={hidden} />
      <button
        onClick={() => setHidden(!hidden)}
        className={`${visibillityClass} btn btn-secondary fixed bottom-6 right-7`}
      >
        Upload Resume
      </button>
    </>
  );
}

export default ResumeUploader;
