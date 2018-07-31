module.exports = {
	  isSendableNode: function (node){
	    switch(node.tagName){
	      case "INPUT":
		  if(node.value.length > 0){
		    return false;
		  }
		  return true;
	      case "TEXTAREA":
		  return true;
	      case "FORM":
		  return true;
	      default:
		  return false;
	    }
	  }
	},

	attachButtonChangeListener: function(nodesToUpdate){
		firebase.database().ref("/").child("button color").on("value", (data)=>{
		    const objectValue = data.val();
		    if(typeof objectValue === "string"){
			nodesToUpdate["button"].style.backgroundColor = objectValue; 
		    }
		}, errorObject =>{
		    throw errorObject;
		})
	},




	changeButtonColor : function(btn){
	    tinyColor ? console.log() : throw new Error("tinycolor dependantcy not loaded");    
	    function randRGBValue(){
		return Math.floor(Math.random() * 255)
	    }
	    let randRGB = {
		r:randRGBValue(),
		g:randRGBValue(),
		b:randRGBValue()
	    }

	    let tinyColorObject = tinyColor(randRGB);
	    let color = tinyColorObject.name();


	    firebase.database().ref().child("button color").set(color);
	},
};
