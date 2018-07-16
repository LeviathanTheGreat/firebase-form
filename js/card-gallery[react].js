import React,{component} from "/deps/React" 
import 

import default as "firebaseSetup" from "./firebaseListeners" 

class CardGallery extends React.Component{
    constructor(props){
        
        this.props = { 
            cards:[
            /*
                name:,
                sex:,
                createdBy:, 
            */    
            ]
        };
        
        this.state = { numOfCards:0, cards:this.props.cards };    
    }

    static addCard(dogAttributes){
        //pushes an object with all dog
        firebase.database().ref("/dogs").push(dogAttributes)
        numOfCards++
    }
    
    static removeCard(arrayIndex,owner){
        firebase.database().ref("/dogs").find().remove()
        //updates in 
        .then(()=>{
            numOfCards++
            this.setState((priorState, ) => prior)    
        }) //(?)
        
    }
    
    
    
    
    
    
    render(){
        cards.forEach
        
        return (
            <div class="gallery" >
                <div class="outer_frame">
                    <gallery-card  />
                </div>
            </div>
            <div class="ui button secondary show_more">
                        
            </div>
        )
    }
}
