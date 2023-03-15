import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import Text from '../Text/Text';
import { Iuser } from '../../../types/Type';
import './Input.css';

interface InputProps {
  label?: string;
  type?: string;
  register: UseFormRegister<Iuser>;
  nameField: keyof Iuser;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options?: Object;
  errorsinput?: string;
}

export const Input: React.FC<InputProps> = ({ label, type = 'text', register, nameField, options = {}, errorsinput = "" }) => (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input className="input-field" type={type} {...register(nameField, options)} />
      <Text text={errorsinput} size="14px" className="Principal" display="block" align="center" />
    </div>
);
