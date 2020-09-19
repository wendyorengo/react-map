import React from "react";
import "./index"
// import carrot from './../public/Assests/onions.jpg';
// import  greens from './../public/Assests/oranges.jpg';
// import onions from './../public/Assests/tomato.jpg';



class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                type:[{
                    name:"dan",
                    place:"nyahururu",
                }]
                     };
    }


    render() {
        return (
            this.state.type.map((item) =>{
                return(
            <div key={item.name}>
                <p>{item.name}</p>
                <p>{item.place}</p>
                
            </div>
                );
            }  
            )
        );
    }
}

    
export default Image;
