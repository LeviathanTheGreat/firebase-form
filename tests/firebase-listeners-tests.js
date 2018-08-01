const mocha = require("mocha");
const {assert, expect, should} = require("chai"); 
const nodeAssert = require("assert")
const sinon = require("sinon");
const firebase = require("firebase");
const fakeDoggoData = JSON.parse(require("test-dependancies/firebase-fake_data.js"));

//database initialization
let config = {
    apiKey: "AIzaSyCTzXVtnpGNABDoG1brrT_nrNmx_JBglsI",
    authDomain: "my-test-project-fcd05.firebaseapp.com",
    databaseURL: "https://my-test-project-fcd05.firebaseio.com",
    projectId: "my-test-project-fcd05",
    storageBucket: "my-test-project-fcd05.appspot.com",
    messagingSenderId: "862753541155"
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
        for(let i = 0; i < fakeDoggoData.length; ){
            firebase.database().ref("/testDogs").push({
                name:"sam",
                sex:"is maleish",
                hair-color:"brownish",
                description:"is doggish",
            
            })
        }
    })
    

        
    it("the event fired, the mocha before works sorta as like extending the scope,and the value was picked up",function(){
        
        
        
        firebase.on("child_added", function(snapshot){
            let Fval = snapshot.val();
            assert.ok(Fval)
        })
            

    })
    
    it("tests that the firebase push funtionality is working",function(){
            
    });
    
    afterEach(function(){
        firebase.database().ref("/testDogs").removeValue()/* ->   */
    })
    
    afterEach("take away the firebase event listner",function(){
        firebase.database().ref("/testDogs").off("child_added")
    })
    
    
})


mocha.run()
