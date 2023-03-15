import React from "react";
import Button from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { useForm } from 'react-hook-form';
import { Iuser } from "../../../types/Type";
import { useDispatch } from "react-redux";
import { setUsers } from "../../../store/slices/UserSlice";


type LoginFormProps = {

};


const LoginForm: React.FC<LoginFormProps> = () => {

  const {  register , handleSubmit, formState :{ errors} } = useForm<Iuser>();
  const dispatch = useDispatch();

  const handleSubmitForm= (data : Iuser ) : void => {
    const usuariosString = localStorage.getItem('usuarios');
    const usuarios : Iuser[] = JSON.parse(usuariosString ?? "[]");
    if (Array.isArray(usuarios)) {
      usuarios.push({...data});
      dispatch(setUsers([...usuarios]))
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    } else {
      console.error('Los datos almacenados no son un arreglo válido');
    }
  };
  return (
    <form className="login-form" onSubmit={handleSubmit(handleSubmitForm)}>
      <Input
        label="Username"
        type="text"
        nameField="Username"
        register={register}
        options={
          {
            required: true,
          }
        }
        errorsinput={errors.Username && "El Campo es obligatorio."}
      
      />
      <Input
        label="Password"
        type="password"
        nameField="Password"
        register={register}
        options={
          {
            required: true,
          }
        }
        errorsinput={errors.Password && "El Campo es obligatorio."}
      />
      <Input
        label="Email"
        type="email"
        nameField="Email"
        register={register}
        options={
          {
            required: true,
            pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }}
        }
        errorsinput={errors.Email?.message}
      />

      <Button type="submit">Agregar a la tabla</Button>
      <Button type="reset" variant="secondary">Limpiar  campos</Button>
     
    </form>
  );
};

export default LoginForm;
