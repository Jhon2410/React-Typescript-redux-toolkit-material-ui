

const obtenerUsuarios =(window : Window) : string =>{
    return window.localStorage.getItem("usuarios")?? "[]"
}

const guardarUsuario =(window:Window, usuarios : string) : void =>{
    window.localStorage.setItem("usuarios", usuarios)    
}

export {
    obtenerUsuarios,
    guardarUsuario
};