import React,{useState} from "react";
import "../Styles/modal.css"

export default function Modal(){
  const[modal,setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal)
  }
  return(
    <>
    <button onClick={toggleModal} className="btt-modal">
      Open
    </button>
    </>
  );
}