import { db, getElements } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";

export const ProgramContext = createContext(null);

export const ProgramProvider = (props) => {
  const [url, setUrl] = useState("mba");
  console.log(url);

  return (
    <ProgramContext.Provider value={{ setUrl }}>
      {props.children}
    </ProgramContext.Provider>
  );
};
