import React, { useState, useContext } from "react";
import axios from "axios";

import Link from "@mui/material/Link";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../App.js";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

// import Button from "../Button/Button";
import Button from "@mui/material/Button";

import styles from "./styles";

const contactSchema = Yup.object({
  name: Yup.string()
    .min(3, "Your name should have more than 3 characters")
    .required("Required"),
  //   phoneNum: Yup.string().min(
  //     9,
  //     "Phone number should have more than 9 characters, please include country code"
  //   ),
  email: Yup.string().min(3, "Too short").required("Required"),
  message: Yup.string()
    .min(2, "You can do better than that")
    .required("Required"),
});

const ContactForm = () => {
  const theme = useTheme();
  const darkModeContext = useContext(ThemeContext);
  const isDarkMode = darkModeContext.isDarkMode;
  const [responseMessage, setResponseMessage] = useState("");
  return (
    <Box sx={styles.wrapper}>
      <Box>
        {" "}
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={contactSchema}
          onSubmit={async (values, { resetForm }) => {
            console.log(values);
            try {
              let data = {
                name: values.name,
                // phoneNum: values.phoneNum,
                email: values.email,
                message: values.message,
              };

              if (data.name.length === 0 || data.email.length === 0) {
                return setResponseMessage("Please fill in all fields");
              }

              // setBool(true);
              const res = await axios.post(
                // "https://activeserver.onrender.com/portfolio/contact",
                // "http://localhost:5000/portfolio/contact",
                "https://cute-gray-pelican-tux.cyclic.app/portfolio/contact",
                data
              );

              if (res.status === 200) {
                resetForm();
                return setResponseMessage("Message Sent Successfully");
              }
            } catch (error) {
              setResponseMessage("Message Failed to Send");
            }
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlue,
            values,
            isValid,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box sx={styles.formWrapper}>
                {" "}
                <FormGroup sx={styles.formGroup}>
                  <FormControlLabel
                    control={
                      <TextField
                     
                        name='name'
                        label='Name'
                        variant='outlined'
                        fullWidth
                        value={values.name}
                        onChange={handleChange}
                        helperText={errors.name}
                      />
                    }
                  />
                </FormGroup>
                <FormGroup sx={styles.formGroup}>
                  <FormControlLabel
                    control={
                      <TextField
                  
                        type='textarea'
                        name='email'
                        label='Email address'
                        variant='outlined'
                        fullWidth
                        value={values.email}
                        onChange={handleChange}
                        helperText={errors.message}
                      />
                    }
                  />
                </FormGroup>
                <FormGroup sx={styles.formGroup}>
                  <FormControlLabel
                    control={
                      <TextField
                      size="small"
                        type='textarea'
                        name='message'
                        label='Enter your message here'
                        multiline
                        rows={10}
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        value={values.message}
                        onChange={handleChange}
                        helperText={errors.message}
                      />
                    }
                  />
                </FormGroup>{" "}
                <Box sx={styles.message}>
                  <Typography>{responseMessage}</Typography>
                </Box>
                <Button
                  variant='contained'
                  type='submit'
                  sx={styles.button(theme, isDarkMode)}
                  disabled={!isValid}
              
                >
                  Send
                </Button>{" "}
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default ContactForm;
