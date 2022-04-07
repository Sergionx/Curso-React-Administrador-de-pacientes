import React, { useState, useEffect } from "react";
import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente }) {
  console.log(pacientes);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <div>
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar{" "}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
export default ListadoPacientes;
