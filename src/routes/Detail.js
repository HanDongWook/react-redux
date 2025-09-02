import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";


function Detail({ toDos }) {
    const myId = useParams().id;
    const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));
    const dateObject = new Date(toDo?.id);
    return (
        <>
            <h1>ToDo : {toDo?.text}</h1>
            <h5>Created at: {dateObject.toLocaleString()}</h5>
        </>
    );
}

function mapStateToProps(state) {
    return { toDos: state };
}

export default connect(mapStateToProps)(Detail);