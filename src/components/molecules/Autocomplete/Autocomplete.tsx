import { useSelector } from "react-redux"
import { RootState } from "../../../store/Store"
import AtomSelect from "../../atoms/Autocomplete/Autocomplete"
import { Iuser } from "../../../types/Type";
import { Container } from "@mui/system";
import Text from "../../atoms/Text/Text";

const Autocomplete : React.FC =()=>{
    
    const users = useSelector((state : RootState)=>state.users.users)

    return(
        <Container>
            <Text text="Autocomplete" className="Principal" display="block" align="center" />
            <AtomSelect
            name="selectField"
            options={users.map((u : Iuser)=>{
                return{label : u.Username}
            })}
            />
        </Container>
        
    )
}
export default Autocomplete