import React,{component} from "/deps/React" 
import 

import default as "firebaseSetup" from "./firebaseListeners"   

class CardGallery extends React.Component{
    constructor(props){
        super(props)
        this.props = { 
            cards:[
            /*
                name:,
                sex:,
                createdBy:, 
            */    
            ]
            this.state = {
                numOfCards:0, 
                cards:this.props.cards, 
            };
        };
        this.galleryStyle = " display:block; 
                              width:auto;
                              height:auto;


                              background-color:white;
                              border-radius:25px;  


                                    "; 
            
    }

    static addCard(dogAttributes){
        //pushes an object with all dog
        firebase.database().ref("/dogs").push(dogAttributes).then(()=>{
            this.setState(/*???*/)
        })
    }
    
    static removeCard(arrayIndex,owner){
        firebase.database().ref("/dogs").find().remove()
        //updates in 
        .then(()=>{
            numOfCards--;
            this.setState(/*???*/)    
        }) //(?)
        
    }
     
    render(){
        const cardsToRender = this.props.cards.forEach((cardInfo)=>(<gallery-card>))
        return (
            <div class="gallery" >
                <div class="outer_frame" style="">
                    <gallery-card  />
                </div>
            </div>
            <div class="ui button secondary show_more">
                        
            </div>
        )
    }
}
