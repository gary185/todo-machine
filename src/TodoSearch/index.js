import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChanged = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return (
        <input placeholder="Cebolla" className="TodoSearch" onChange={onSearchValueChanged} value={searchValue}></input>
    );
}

export {TodoSearch};