import React from "react";

function NameFilter (props) {
    return (
        <div>
        <h1 className="heading">Baby Names</h1>
        <div className="names-container">
            {props.nameInfo
            .sort((data, data2) => data.name.localeCompare(data2.name))
            .map(data => {
                return (
                <div className="name" id={data.sex}> {data.name}</div>
                )
            })}
        </div>
        </div>
    )
}
export default NameFilter;
