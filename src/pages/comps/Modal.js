import React from "react";
import { ModalContext } from "./context";
export default function Modal({className,children}){
  return(
<ModalContext.Consumer>
      {context => {
        if (context.showModal) {
          return(
            <div className={className}>
            {children}
          </div>
          );
        }
        return null;
      }}
    </ModalContext.Consumer>
  );
}

