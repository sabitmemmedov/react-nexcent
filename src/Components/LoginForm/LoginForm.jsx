
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import styles from '../SignUpForm/SignUpForm.module.css';

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = ({ onClose }) => {
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

      const user = users.find(user => user.email === values.email && user.password === values.password);
      if (user) {
        alert("Giriş yapıldı!"); 
        actions.resetForm();
      } else {
        alert("Email or password is incorrect!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in. Please try again later.");
    } finally {
      setIsPosting(false);
      actions.setSubmitting(false);
    }
  };

  return (
    <div className={styles.formBox}>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Please Enter Email'),
          password: Yup.string().required('Please Enter Password'),
        })}
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

