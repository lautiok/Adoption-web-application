import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { UsePets } from "../context/PetsContext";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { optionsAge, optionsGender, optionsType } from "../utils/OptionSelect";
import { HeaderD } from "../components/HeaderD";
export const AddPets = () => {
  const { createPet } = UsePets();
  const navigate = useNavigate();
  return (
    <div>
      <HeaderD/>
      <Formik
        initialValues={{
          name: "",
          description: "",
          type: "",
          gender: "",
          age: "",
          image: null,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
          type: Yup.string().required("Required"),
          gender: Yup.string().required("Required"),
          age: Yup.string().required("Required"),
          image: Yup.string().required("Required"),
        })}z
        onSubmit={async (values, actions) => {
          await createPet(values);
          actions.setSubmitting(false);
          navigate("/vermascotas");
        }}
      >
        {({ handleSubmit, setFieldValue, isSubmitting }) => (
          <Form className="form-container-add" onSubmit={handleSubmit}>
            <Field className="input-field" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
            <textarea
              name="description"
              id=" description"
              cols="30"
              rows="10"
              className="textarea-field"
              placeholder="Description"
              onChange={(e) => setFieldValue("description", e.target.value)}
            ></textarea>
            <ErrorMessage name="description" component="div" />
            <Select
              className="select2"
              placeholder="Tipo de mascota"
              name="type"
              options={optionsType}
              onChange={(e) => setFieldValue("type", e.value)}
            />
            <ErrorMessage name="type" component="div" />
            <Select
              className="select2"
              placeholder="Genero"
              name="gender"
              options={optionsGender}
              onChange={(e) => setFieldValue("gender", e.value)}
            />
            <ErrorMessage name="gender" component="div" />
            <Select
              className="select2"
              placeholder="Edad"
              name="age"
              options={optionsAge}
              onChange={(e) => setFieldValue("age", e.value)}
            />
            <ErrorMessage name="age" component="div" />
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
  );
};
