import React from "react";

import Button from "./Button";

const Card = () => {

    
        //const [inputData, setInputData] = useState('')
        
        const handleInputChange = (e) => {
                console.log(e);
        }
    

    return(

        <div>
            <input onChange={handleInputChange} className="" type="text" />
            <Button> test</Button>
            
            
        </div>
        
        
    )
}

export default Card;