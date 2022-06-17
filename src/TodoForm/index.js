import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'


function TodoForm(){

    const {addTodo, setOpenModal} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState("");

    const onCancel = () => {
        setOpenModal(false);
    }

    const onAdd = (event) => {
        //Esto cancela la actualización de la página al presionar el botón (útil en submit form)
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);

    }

    return (
        <form onSubmit={onAdd}>
            <label>
                Escribe tu nuevo todo:
            </label>
            <textarea placeholder="Cortar la cebolla para el almuerzo" value={newTodoValue} onChange={onChange}></textarea>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button-cancel" type="button" onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button-add" type="submit">Añadir ToDo</button>
            </div>
        </form>
    );
}

export {TodoForm};