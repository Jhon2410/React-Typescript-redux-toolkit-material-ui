import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/Store';
import { Column, Iuser } from '../../../types/Type';
import { obtenerUsuarios } from '../../../services/Api';
import { setUsers } from '../../../store/slices/UserSlice';
import Text from '../../atoms/Text/Text';
import EnhancedTable from '../../molecules/EnhancedTable/EnhanceTable';

const columns : Column[]= [
  { id: 'Username', label: 'Username', minWidth: 170, align: 'center' },
  { id: 'Email', label: 'Email', minWidth: 100, align: 'center' },
  { id: 'Password', label: 'Password', minWidth: 170, align: 'center' },
];

interface Data {
  Username: string;
  Email: string;
  Password: string;
}

function createData(Username: string, Email: string, Password: string): Data {
  return { Username, Email, Password };
}

export default function PeopleTable() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) : Iuser[] => state.users.users);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const rows: Data[] = users.map((usuario: Iuser) : Data =>
    createData(usuario.Username, usuario.Email, usuario.Password)
  );

  const actualizarUsuarios = (): void => {
    const usuarios: Iuser[] = JSON.parse(obtenerUsuarios(window)) || [];
    dispatch(setUsers(usuarios));
  };

  useEffect(() :void => {
    actualizarUsuarios();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) : void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Text text="Lista de usuarios" className="Principal" display="block" align="center" />
      <EnhancedTable
        rows={rows}
        columns={columns}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
}
