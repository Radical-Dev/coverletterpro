import React, { createContext, useState } from "react";

type ResumeContextType = {
  urlPath: string;
  setUrlPath: (path: string) => void;
};

export const ResumePathContext = createContext<ResumeContextType>({
  urlPath: "",
  setUrlPath: () => {},
});

type ResumePathContextProviderProps = {
  children: React.ReactNode;
};
export default function ResumePathContextProvider({
  children,
}: ResumePathContextProviderProps) {
  const [resumePath, setResumePath] = useState("");

  let contextData = {
    urlPath: resumePath,
    setUrlPath: (path: string) => {
      setResumePath(path);
    },
  };

  return (
    <ResumePathContext.Provider value={contextData}>
      {children}
    </ResumePathContext.Provider>
  );
}
