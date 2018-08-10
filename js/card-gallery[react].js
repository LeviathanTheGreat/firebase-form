import React,{component} from "/deps/React" 
import 

import default as "firebaseSetup" from "./firebaseListeners"   

class CardGallery extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
                cards:[]
        };
        this.galleryStyle = ` display:block; 
                              width:auto;
                              height:auto;

                              background-color:white;
                              border-radius:25px;  

                                                    `; 
            
    }

    componentWillMount(){
        const that = this;
        firebase.database().ref("/dogs").on("child_added",(snapshot)=>{
            
            that.state.cards.push(snapshot.val());            
        })
    }
    
    static addCard(dogAttributes){
        //pushes an object with all dog
        firebase.database().ref("/dogs").push(dogAttributes)
        .then(()=>{
            this.setState(/*???*/)
        }).catch((e)=>{
            "dog could not be added to database"
        })
    }
    
    static removeCard(arrayIndex,owner){
        firebase.database().ref("/dogs").find().remove()
        //updates in 
        .then(()=>{
            this.setState(/*???*/)    
        }).catch(()=>{
            
        }) //(?)
        
    }
     
    render(){
        let cards = this.state.cards; 
        const cardsToRender = this.props.cards.forEach((cardInfo)=>(<gallery-card>))
        
        return (
            <div class="gallery" >
                <div class="outer_frame">
                    {                                
                        cards.map((card)=>{    
                            
                        }) 
                    }
                </div>
            </div>
            <div class="ui button secondary show_more">
                <i> </i>            
            </div>
        )
    }
}
