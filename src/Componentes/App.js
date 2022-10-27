

import Mascotas_Principal from "../pages/Mascotas/Mascotas_Principal";
import Agregar_Mascotas from "../pages/Mascotas/Agregar_Mascotas";
import Modificar_mascotas from "../pages/Mascotas/Modificar_mascotas";
import Listar_Mascotas from "../pages/Mascotas/Listar_Mascotas";
import { Routes, Route} from "react-router-dom";
import Eliminar_Mascota from "../pages/Mascotas/Eliminar_Mascota";
import Duenio_Principal from "../pages/Dueios/Duenio_Principal";
import Agregar_Duenio from "../pages/Dueios/Agregar_Duenios";
import Listar_Duenio from "../pages/Dueios/Listar_Duenios";
import Eliminar_Duenio from "../pages/Dueios/Eliminar_Duenio";
import Modificar_Duenio from "../pages/Dueios/Modificar_Duenio";
import Citas_Principal from "../pages/Citas/Citas_Principal";

import Listar_Citas from "../pages/Citas/Listar_Citas";
import Eliminar_Citas from "../pages/Citas/Eliminar_Citas";
import Modificar_Citas from "../pages/Citas/Modificar_Citas";
import Agregar_Citas from "../pages/Citas/Agregar_Citas";
import Principal from "../pages/principal";

;

function App() {
  return (
    <div className="App">
        <Routes>
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/" element={<Principal/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Duenio_Principal" element={<Duenio_Principal/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Citas_Principal" element={<Citas_Principal/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Mascotas_Principal" element={<Mascotas_Principal/>}/>}

            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Agregar_Mascotas" element={<Agregar_Mascotas/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Listar_Mascotas" element={<Listar_Mascotas/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Eliminar_Mascota" element={<Eliminar_Mascota/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Modificar_mascotas" element={<Modificar_mascotas/>}/>}

            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Agregar_Duenio" element={<Agregar_Duenio/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Listar_Duenios" element={<Listar_Duenio/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Eliminar_Duenio" element={<Eliminar_Duenio/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Modificar_Duenio" element={<Modificar_Duenio/>}/>}


            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Agregar_Citas" element={<Agregar_Citas/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Listar_Citas" element={<Listar_Citas/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Eliminar_Citas" element={<Eliminar_Citas/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Modificar_Citas" element={<Modificar_Citas/>}/>}
        </Routes>
      {/*<Mascotas_Principal/>*/}
      {/*<Agregar_Mascotas/>*/}
      {/*  <Modificar_mascotas/>*/}
      {/*  <Eliminar_Mascotas/>*/}
      {/*  <Listar_Mascotas/>*/}
    </div>
  );
}

export default App;
