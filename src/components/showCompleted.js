import React from "react";

const ShowCompleted = ({ todoList, completed }) => {


    return (
        <>
            <div className="completed-items">
                <h3> All todos : {todoList.length} </h3>
                <h3> Completed : {completed}</h3>
            </div>
        </>
    )
}

export default ShowCompleted;