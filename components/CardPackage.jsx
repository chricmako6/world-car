import React from "react";

const CardPackage = ({title, desc, svg}) => {
    return ( 
        <>
        <div className="p-5 relative mt-10 w-96 h-auto rounded-2xl bg-gray-200 shadow shadow-gray-100">
            <img
            src={svg}
            alt=""
            className="w-18 h-18 py-4 px-4 bg-white rounded-4xl"
            />

            <h2 className="text-[16px] rum-title">{title}</h2>
            <p className="mt-2 font-semibold">{desc}</p>
        </div>
        </>
     );
}
 
export default CardPackage;