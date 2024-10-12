import Tarea from "./Tarea"

type Props = {
    listaTareas:string[]
    borrarTarea:(index:number) => void
}

export default function ListaTareas({listaTareas,borrarTarea}: Props) {
  return (
    <div className="listaTareas">
        {listaTareas.map((tarea,index) => (
            <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}></Tarea>
        )
        )}
    </div>
  )
}