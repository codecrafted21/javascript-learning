// METHODS FOR STRING 
 
// -----------------------------------include------------------------------------//

// it cheks whether the specific text is present in a string 


let email = "vipin7668939@gmail.com";
if (email.includes("@")){
    console.log("valid email")
}


//--------------------------------------slice------------------------------------//

// it uses when we need a some part of string 

let myname = "Vipin sharma";
console.log(myname.slice(0,5));



//--------------------------------------replace-----------------------------------//

// it used to fix and update the string text 

let code = "i hate Bugs";
console.log(code.replace("hate","love"));


//--------------------------------------trim-------------------------------------//

// It does not remove spaces in the middle, only from the start and end

let text = "        Hello MR       ";
console.log(text.trim());


//-----------------------------------uppercase----------------------------------//

//to convert into an big latter 

let new1 = "good morning";
console.log(new1.toUpperCase());


//----------------------------------lowercase----------------------------------//

// to convert into an small latter 

let new2 = "good morning";
console.log(new2.toLowerCase());


// ---------------------------------length-------------------------------------//

// it is used to know the length of a string 

let new3 = "good morning";
console.log(new3.length);



//-------------------------------split----------------------------------------//


// it used to break a string into pasts 

let new4 = "hello my name is vipin sharma " ;
console.log(new4.split(" "));


//------------------------------indexof--------------------------------------//

// it is used to find the position 

let new5 = "good morning";
console.log(new5.indexOf("m"));

//-----------------------------chatat----------------------------------------//

// it is used to get an single chracter 

let new6 = "happy day";
console.log(new6.charAt("3"));











