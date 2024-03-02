import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import SignUpValidation from '../SignUpForm//SignUpValidation';
import styles from '../SignUpForm/SignUpForm.module.css';

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

const LoginForm = () => {
  const [users, setUsers] = useState([]);
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://6569b50bde53105b0dd78115.mockapi.io/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [isPosting]); 

  const handleSubmit = async (values, actions) => {
    try {
      setIsPosting(true); 

      const userWithEmail = users.find(user => user.email === values.email);
      if (userWithEmail) {
        alert("This email is already in use!");
      } else {
        await axios.post("https://6569b50bde53105b0dd78115.mockapi.io/users", values);
        alert("Registration successful!");
        actions.resetForm();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while registering. Please try again later.");
    } finally {
      setIsPosting(false); 
      actions.setSubmitting(false);
    }
  };

  return (
    <div className={styles.formBox}>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpValidation}
        onSubmit={handleSubmit}
      >
        {({ errors, isSubmitting }) => (
          <Form className={styles.form}>
         
            <label htmlFor='email'>Email</label>
            <br />
            <Field className={styles.inp} type="email" name="email" />
            <br />
            {errors.email && <small className={styles.error}>{errors.email}</small>}
            <br />
            <label htmlFor='password'>Password</label>
            <br />
            <Field className={styles.inp} type="password" name="password" />
            <br />
            {errors.password && <small className={styles.error}>{errors.password}</small>}
            <br />
           
            <button className={styles.submitBtn} type='submit' disabled={isSubmitting || isPosting}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

