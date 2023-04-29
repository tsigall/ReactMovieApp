import React, { useState } from "react";

const RatingsModal = (props) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function ConfirmRating () {
        props.onClose(rating);
    }

    if(!props.show){
        return null;
    }

    return (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Rate Movie</h4>
            </div>
            <div className="modal-body">
                <div className="star-rating">
                {[...Array(5)].map((star, index) => {    
                    index += 1;    
                    return (     
                        <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                        >    
                        <span className="star">&#9733;</span>    
                     </button>    
                    );
                })}
                </div>
            </div>
            <div className="modal-footer">
                <button onClick={() => ConfirmRating()}>Confirm</button>
            </div>
          </div>
        </div>
    )
    
}

export default RatingsModal;