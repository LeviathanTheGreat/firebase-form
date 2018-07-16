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
        
        this.state = { numOfChildren:0 };    
    }

    static addCard(snapshot){
        snapshot.val()
        numOfChildren++
    }
    
    static removeCardWrapper(){
    
    }
    
    static removeCard(arrayIndex,owner){
        firebase.database().ref("/dogs")
        
    }
    
    
    
    render(){
        let cards = 
        return (
            <div class="gallery" >
                <div class="outer_frame">
                    <div></div>
                </div>
            </div>
            <div class="showmore">
                    
            </div>
        )
    }
}
