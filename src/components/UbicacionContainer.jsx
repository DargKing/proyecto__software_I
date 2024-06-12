import React from "react";

import UbicacionForm from "./UbicacionForm";
import Mapa from "./Mapa";

const Ubicacion = () => {
    return (
        <div className="grid grid-cols-2 place-items-center">
            <div className="p-20">
                <h2 className="text-4xl text-morado">Ubicacion</h2>
                <p>Piso 3, Oficina 3 Centro Empresarial Ferrozasa, Torre B A, C. El Miamo, Ciudad Guayana 5080, Bolívar, Venezuela</p>
                <h3 className="text-morado my-2 font-bold">Estamos encantados de ayudarte</h3>
                <p>Si lo preferies, dejanos tus datos y nos pondremos en contacto contigo lo antes posible</p>
                <UbicacionForm></UbicacionForm>
            </div>
            <div>
                <Mapa></Mapa>
            </div>
        </div>
    )
}

export default Ubicacion;