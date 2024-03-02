// Modall.jsx
import React, { useState } from "react";
import styles from "./SignUpModal.module.css";
import ReactModal from "react-modal";
import { IoIosCloseCircle } from "react-icons/io";
import SignUpForm from "../SignUpForm/SignUpForm";
import LoginForm from "../LoginForm/LoginForm";

const SignUpModal = ({ isOpen, closeModal }) => {
  const customStyles = {
    content: {
      width:"90%",
      
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className={styles.container}>
      <div>
        <ReactModal
          isOpen={isOpen}
          className={styles.modal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button className={styles.closemodal} onClick={closeModal}><IoIosCloseCircle /></button>
         <SignUpForm/>
         <LoginForm/>
        </ReactModal>
      </div>
    </div>
  );
};

export default SignUpModal;
