import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";
import css from "../ContactForm/ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const FormValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Your name is Short!")
      .max(40, "Your name is Long!")
      .required("Name Required"),
    number: Yup.string()
      .min(2, "Your number is Short!")
      .max(40, "Your number is Long!")
      .required("Number Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact({
      name: values.name,
      number: values.number,
      id: nanoid(),
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormValidationSchema}
    >
      <Form className={css.formBox}>
        <div className={css.inputForm}>
          <label className={css.labelText} htmlFor={nameFieldId}>
            Username
          </label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="p" />
        </div>
        <div className={css.inputForm}>
          <label className={css.labelText} htmlFor={numberFieldId}>
            Number
          </label>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="p" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
