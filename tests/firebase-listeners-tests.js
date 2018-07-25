const mocha = require("mocha");
const {assert, expect, should} = require("chai"); 
const nodeAssert = require("assert")
const sinon = require("sinon");
const firebase = require("firebase");
const fakeData = JSON.parse(require("test-dependancies/firebase-fake_data.js"));

//database initialization
let config = {
    
};

firebase.initializeApp(config)



mocha.setup("tdd")

describe("dependancies loaded",function(){
    
    it("fakeData is present",function(){
        assert.ok(fakeData)       
    })

    it("tests global presence of chai assert",function(){
        nodeAssert(expect)       
    })
    it("tests global presence of chai assert",function(){
        nodeAssert(assert)
    })
    it("tests global presence of chai should",function(){
        nodeAssert(should)
    })

})

describe("testing the lib functions",function(){
    
});

describe("tests value response of child_added listener", function(){
    
    beforeEach(function(){
        for(let i = 0; i < fakeData; ){
            firebase.database().ref("/testDogs").push({
                name:"sam",
                sex:"is maleish",
                hair-color:"brownish",
                description:"is doggish",
            
            }) 
        }
    })
    
    
    
    before(function(){
        var spyHandler = sinon.spy();    
    })
        
    it("the event fired, the mocha before works sorta as like extending the scope,and the value was picked up",function(){
        
        
        firebase.on("child_added", function(snapshot){
            let Fval = snapshot.val();
            console.log(val)  
            spyHandler(Fval)
        })

        assert(spyHandler.calledWith)
    })



    afterEach(function(){
        firebase.database().ref("/testDogs").parent()/* ->   */
    })
    
    afterEach("take away the firebase event listner",function(){
        firebase.database().ref("/testDogs").off("child_added")
    })
    
    
})


mocha.run()
