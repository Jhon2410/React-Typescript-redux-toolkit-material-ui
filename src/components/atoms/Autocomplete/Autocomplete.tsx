import {  FormControl, InputLabel, Autocomplete, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { AutocompleteOption } from '../../../types/Type';

interface Props {
  name: string;
  rules?: any;
  options?: AutocompleteOption[];
  defaultValue?: any;
}

const AtomSelect: React.FC<Props> = ({ name, rules, options=[], defaultValue }) => {
  const { control } = useForm();

  return (
    <FormControl  fullWidth variant="outlined">
      <InputLabel></InputLabel>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={() => (
          <Autocomplete  
          disablePortal
          options={options}
          renderInput={(params) => <TextField {...params} />}
          />
        )}
      />
    </FormControl>
  );
};

export default AtomSelect;
