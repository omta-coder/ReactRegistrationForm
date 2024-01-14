import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
    const navigate = useNavigate();
    const { title } = useParams();

    const BackHandler = () => {
        navigate(-1);
    };

    return (
        <div>
            <h1 className="pt-10 text-2xl flex justify-center gap-10">👋 {title}</h1>
            <button onClick={BackHandler} className=" text-red-300 text-2xl" >
                back
            </button>
        </div>
    );
};

export default Details;
