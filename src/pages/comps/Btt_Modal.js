import React from "react";
import { useState } from "react";
export default function Btt_Modal({className,children,callback}){
    const [modal,setModal] = useState(false);
  const data = () =>{}
  return(
    <button className={className} onClick={()=>callback(data)}>
      {children}
    </button>
  );
}