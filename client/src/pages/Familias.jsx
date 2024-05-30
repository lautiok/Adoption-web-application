import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {UseAdopted} from '../context/AdoptedContext'
import {useNavigate} from 'react-router-dom'
import { HeaderD } from '../components/HeaderD'
export const Familias = () => {
    const {createAdopted} = UseAdopted()
    const navigate = useNavigate()
  return (
    <div>
        <HeaderD />
      <Formik
        initialValues={{
          name: "",
          image: null,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          image: Yup.string().required("Required")
        })}
        onSubmit={async (values, actions) => {
          await createAdopted(values);

          actions.setSubmitting(false);
          navigate("/nuestra-familia");
        }}
      >
        {({ handleSubmit, setFieldValue, isSubmitting }) => (
          <Form className="form-container-add" onSubmit={handleSubmit}>
            <Field className="input-field" name="name" placeholder="Familia" />
            <ErrorMessage name="name" component="div" />
            <input
              type="file"
              className="input-file"
              name="image"
              onChange={(e) => setFieldValue("image", e.target.files[0])}
            />
            <ErrorMessage name="image" component="div" />
            <button
              className="cardid-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "loading" : "Agregar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
