import { FieldValues } from "react-hook-form";

interface Iuser extends FieldValuess {
    Username: string;
    Email: string;
    Password: string; 
}

interface Column {
    id: string;
    label: string;
    minWidth?: number;
    align?: 'right' | 'left' | 'center';
  }

interface AutocompleteOption {
    label: string;
}
  
export { Iuser , Column , AutocompleteOption}