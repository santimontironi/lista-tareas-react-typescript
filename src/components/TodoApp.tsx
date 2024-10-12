import './todoApp.css'
import { useState } from "react";
import ListaTareas from "./ListaTareas";

export default function TodoApp() {

  const [inputTarea, setInputTarea] = useState<string>("");
  const [listaTareas,setListaTareas] = useState<string[]>([])

  function handleSubmit(){
    if(inputTarea.trim() === "") return
    setListaTareas(tareaAnterior => [...tareaAnterior,inputTarea])
    setInputTarea('')
  }

  function handleBorrarTarea(index:number){
    setListaTareas(tareas => tareas.filter((_,i) => i !== index))
  }

  return (
    <div className="contenedor">
      <h1 className="titulo">Lista de tareas</h1>
      <div>
        <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
          <input
            type="text"
            placeholder="Ingrese una tarea"
            value={inputTarea}
            onChange={(e) => setInputTarea(e.target.value)}
          />
          <input type="submit" value='➕' onClick={handleSubmit} />
        </form>
      </div>
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
    </div>
  );
}
