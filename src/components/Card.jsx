import React from "react";

import Styles from "./Card.module.css"
 
const Card = () => {

    return (
        
    <div className={Styles.container_card}>

        <div className={Styles.div_img}>

    <img className={Styles.img_card} src="https://via.placeholder.com/600x300"alt="" />
        </div>
    
    <div className={Styles.div_descrition}>

        <h2 className={Styles.titulo}>promotion Ten</h2>

    <p className={Styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nisi veritatis assumenda doloribus mollitia repellendus aperiam possimus quaerat sunt. Dolorum dolor nihil quae corrupti, sapiente libero commodi minima in consectetur.
    </p>

    <div className={Styles.div_button}>

    <button className={Styles.button_card}> Terms & Conditions </button>

    <button className={Styles.button_card}>Join Now</button>


    </div>
  
    
  
    </div>

  </div>
    )
}

export default Card