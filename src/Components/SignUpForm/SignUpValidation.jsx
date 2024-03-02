// import * as Yup  from 'yup'

// export const SignUpValidation = Yup.object({
//     name: Yup.string().min(3).required("Please Enter Name "),
//     email:  Yup.string().email("Please Enter Valid Email").required("Please Enter Email"),
//     password:Yup.string().min(5).required("Please Enter Password"),
//     cpassword:Yup.string().oneOf([Yup.ref("password")],"Password not matched").required("Please Enter C password")
// })
import * as Yup from 'yup';

const SignUpValidation = Yup.object({
  name: Yup.string().min(3).required("Please Enter Name "),
  email: Yup.string().email("Please Enter Valid Email").required("Please Enter Email"),
  password: Yup.string().min(5).required("Please Enter Password"),
  cpassword: Yup.string().oneOf([Yup.ref("password")], "Password not matched").required("Please Enter C password")
});

export default SignUpValidation;
