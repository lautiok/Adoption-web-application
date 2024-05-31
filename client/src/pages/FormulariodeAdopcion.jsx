import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UsePets } from "../context/PetsContext";
import { useForm } from "react-hook-form";
import { UseNewAdopt } from "../context/NewAdoptContext";
import { useNavigate } from "react-router-dom";

export const FormulariodeAdopcion = () => {
  const { getPet, pet } = UsePets();
  const { createNewAdopted } = UseNewAdopt();
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    getPet(id);
  }, []);

  const onSubmit = handleSubmit((data) => {
    const adoptionData = { ...data, mascotaid: id };
    createNewAdopted(adoptionData);
    navigate("/");
  });

  return (
    <div>
      {pet ? (
        <div key={pet._id} className="info-form-adopt">
          <h3>
            Estas por adoptar a {pet.name} <span>❤</span>
          </h3>
          <p>
            Te pediremos unos datos para poder ponernos en contacto para poder
            adoptar a {pet.name}, <br /> nos comunicaremos contigo para comentarte los
            pasos para la adopcion
          </p>
        </div>
      ) : (
        <p>Cargando información de la mascota...</p>
      )}

      <div className="form-adopt">
        <form onSubmit={onSubmit} className="form-container-adopt">
          <input type="text" placeholder="Nombre y Apellidos" {...register("name")} />
          <input type="email" placeholder="Email" {...register("email")} />
          <input type="text" placeholder="Teléfono" {...register("phone")} />
          <textarea rows="5" cols="30" placeholder={`QUEREMOS SABER A QUE FAMILIA VA ${pet?.name}`} {...register("message")}></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
