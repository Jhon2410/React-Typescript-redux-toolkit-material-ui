import React from "react";
import Text from "../../components/atoms/Text/Text";
import PeopleTable from "../../components/organisms/PeopleTable/PeopleTable";
import LoginForm from "../../components/organisms/LoginForm/LoginForm";
import Autocomplete from "../../components/molecules/Autocomplete/Autocomplete";

const LoginPage: React.FC = () => {
  
  return (
    <div>
      <Autocomplete></Autocomplete>
      <Text text="Agregar" className="Principal" display="block" align="center" />
      <LoginForm />
      <PeopleTable></PeopleTable>
    </div>
  );
};

export default LoginPage;
