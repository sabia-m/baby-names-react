import React from "react";
//import Search from './Search'

function NameFilter (props) {
    return (
        <div>
        <div className="names-container">
            {props.nameInfo.sort((data, data2) => data.name.localeCompare(data2.name))
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
