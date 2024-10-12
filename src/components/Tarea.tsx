import './tareas.css'

type Props = {
    tarea:string,
    borrarTarea: () => void

}

export default function Tarea({tarea,borrarTarea}: Props) {
  return (
    <div className="tarea">
        <span>{tarea}</span>
        <button onClick={borrarTarea}>Borrar</button>
    </div>
  )
}