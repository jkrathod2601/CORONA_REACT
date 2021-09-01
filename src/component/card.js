// import react from "react";
import './card.css'
const Card=(prop)=>{
    return(
        <div className="row" style={{backgroundColor:prop.color}}>
            <div className='col-md-12'>
                <div className="row-2">
                    {prop.name}s
                </div>
                <div className="row-2">
                     {prop.value}
                 </div>
            </div>
        </div>
    )
}

export default Card