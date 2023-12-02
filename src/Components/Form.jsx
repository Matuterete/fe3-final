import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import "./styles/Form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const [form, setForm] = useState(false);
  const [fullName, setFullName] = useState("");

  const onSubmit = (data) => {
    setForm(true);
    setFullName(data.fullName);
  };

  const resetForm = () => {
    setForm(false);
    setFullName("");
    reset();
  }

  return (
    <div className="Form">
      {form ? (
        <div>
          <p>{`Gracias ${fullName}, te contactaremos cuanto antes vía email`}</p>
          <div className="container-button">
            <button onClick={resetForm}>Volver al formulario</button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>
              Nombre completo:
              <input
                {...register("fullName", {
                  required: "Campo requerido",
                  minLength: {
                    value: 5,
                    message: "Por favor verifique su información nuevamente",
                  },
                })}
                onChange={(e) => setValue("fullName", e.target.value)}
              />
            </label>
            {errors.fullName && (
              <span className="error-message">{errors.fullName.message}</span>
            )}
          </div>
  
          <div className="form-group">
            <label>
              Email:
              <input
                {...register("email", {
                  required: "Campo requerido",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Por favor verifique su información nuevamente",
                  },
                })}
              />
            </label>
            {errors.email?.message && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>
  
          <div className="container-button">
            <button type="submit">Enviar</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
