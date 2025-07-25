import React,{useState} from "react";

function SearchHotWords({ keywords }){

    return (
        <ul className="content">
            {keywords.map((word,index)=>(
                <li key={index}>
                    {word}
                </li>
            ))}
        </ul>
    );
}

export default SearchHotWords; 

