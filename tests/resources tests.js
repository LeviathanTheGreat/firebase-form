const mocha = require("mocha");
const { assert, expect } = require("chai"); 
const tinyColor = require("tinycolor2") 

mocha.setup("tdd")


describe("tests the button color generation function",function(){ 
	before(()=>{
		
		function changeButtonColor(btn){
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

		    //omiting fron test
		    //firebase.database().ref().child("button color").set(color);
		    return color
		}
	})

	it("tests thata string, being the name of color, is returned", function(){
		let color = changeButtonColor(); 
		expect(color).be.a("string")
		console.log("the name of the button's color is " + color)
	})
})

mocha.run()
