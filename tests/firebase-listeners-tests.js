const mocha = require("mocha");
const path = require("path")
const {assert, expect, should} = require("chai"); 
const nodeAssert = require("assert")
const sinon = require("sinon");
const firebase = require("firebase");
const firebaseMock = require("firebase-mock");
const fakeDoggoData = require( path.resolve( __dirname, "./firebase-fake_data.js" ) );

//database initialization
let config = {
    apiKey: "AIzaSyCTzXVtnpGNABDoG1brrT_nrNmx_JBglsI",
    authDomain: "my-test-project-fcd05.firebaseapp.com",
    databaseURL: "https://my-test-project-fcd05.firebaseio.com",
    projectId: "my-test-project-fcd05",
    storageBucket: "my-test-project-fcd05.appspot.com",
    messagingSenderId: "862753541155"
};

firemock.initializeApp(config)

firebaseMock.override();

describe("dependancies loaded",function(){
    
    it("test that the fakeData dep. is loaded for default doggos  ",function(){
        assert.ok(fakeDoggoData)       
    })

    it("firemock is present",()=>{
        console.log("firemock messages: " + Object.keys(firemock))
        assert(firemock)
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
        for(let i = 0; i < fakeDoggoData.length; i++ ){
            firemock.database().ref("/testDogs").push({
                ...fakeDoggoData[i]
            })
        }
        firemock.database().flush()
    })
    

        
    it("the event fired, the mocha before works sorta as like extending the scope,and the value was picked up",function(){
        
        const fake = sinon.fake();
        
        firemock.database().ref("/testDogs").on("child_added", function(snapshot){
            FVal = snapshot.val();
            fake(FVal)
        })
            
        
        for(let key in fakeDoggoData){
            if(fakeDoggoData[key] !== fake.lastArg){
                assert(fakeDoggoData[key] === fake.lastArg)
            }
        }
    })
    
    it("tests that the firebase push funtionality is working",function(){
        
        var doggoAdded;
        
        firemock.on("child_added", function(snapshot){
            doggoAdded = snapshot.val();
        })
        
         firemock.database().ref("/testDogs").push({
                name:"Sam",
                sex:"maleish",
                hairColor:"brownish",
                description:"is doggish",
         })
        
        assert(doggoAdded["name"] === "sam") 
   
    });
    
    afterEach(function(){
        firemock.database().ref("/testDogs").removeValue()
    })
    
    afterEach(function(){
        firemock.database().ref("/testDogs").off("child_added")
    })
    
})
