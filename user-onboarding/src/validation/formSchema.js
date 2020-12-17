// Here goes the schema for the form
import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    name: yup
      .string()
      .min(3, "name must be at least 3 characters long.")
      .required("name is Required"),
    tos: yup
        .boolean()
        .required("must agree to terms of service")

  });
  export default formSchema