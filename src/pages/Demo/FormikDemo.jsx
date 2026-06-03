import { Formik,Form} from "formik";

import Validation from "./Validation";
import {TextField, Button} from "@mui/material";
const FormikDemo =() =>{

  const handleSubmit =(values)=>{
    console.log(values)
  }

  const initialValues={
    fisrtname :""
  };
    return (
      <>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={Validation}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <TextField
                fullWidth
                label="First Name"
                name="fisrtname"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.fullName && errors.fullName}
                error={touched.fisrtname && Boolean(errors.firstname)}
              />

              <Button type="Submit">Click me </Button>
            </Form>
          )}
        </Formik>
      </>
    );
};
export default FormikDemo;