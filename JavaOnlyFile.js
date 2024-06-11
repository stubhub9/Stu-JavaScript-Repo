//  HEllo comments.
/*  Place this script in the html body. 
    */
//  var traffic = "<h3>light<h3>";
// var get hoisted and provide more VISIBLITY [window, ..]; while let does private {} block scoping
//  Global [use var or let at this scope]
var traffic = "light";
let redText = "<span style=\"color:red\">I am colorful.</span>";
const weather = "sunny";

let beginEffect = "<strong>",
    endEffect = "</strong>",
    beginPara = "<p>",
    endPara = "</p>";

function fncCombine2Texts(text1, text2) {
    // If text1 && text2 exist
    if (text1 && text2) {
        return text1 + text2;
    }
    else {
        window.alert("text args not found");
        return "args are missing";
    }
}

// var of an anonymous function
var combineText = function (text1, text2) {
    // If text1 && text2 exist
    if (text1 && text2) {
        return text1 + text2;
    }
    else {
        window.alert("text args not found");
        return "args are missing";
    }
};
//  Cap constructors (object?)
function Car(seats, engine) {
    this.seats = seats;
    this.engine = engine;
    this.printSeats = print_CarSeats;
}
//  add default color = 'red', property to Car.prototype. [owned by prototype]
//  setting car1.color would make color an OwnedProperty of car1 [.hasOwnedProperty(color) ==true]
Car.prototype.color = "red";

//  Method called by Car.printSeats
function print_CarSeats () {
    document.write ("This car has " + this.seats + " seats.");
};

class OldCar {
    constructor (seats, engine) {
        this.seats = seats;
        this.engine = engine;
    }
    print_Engine () {
        document.write ("Seats:  " + this.seats );
    }
}
//  No semicolon for class declaration

let AltCar = class {
    constructor (seats, engine ) {
        this.seats = seats;
        this.engine = engine;
    }
    print_Properties () {
        document.write ("AltCar");
        for (let _carProps in this) {
         if (this.hasOwnProperty (_carProps)) {
        
        document.write (_carProps + ":  " + this [_carProps] + "<br>" );

         }   
        }
    }
};
// Semicolon ends class expression
let myCar1 = new AltCar ("cloth", "V-6");
myCar1.print_Properties ();

//  Add a method to prototype
Car.prototype.printEngine = function () {
    document.write ("Engine:  " + this.engine );
}


//  Wire an event to it's dedicated, anon. function.
document.onclick = function () {
    window.alert("Don't click on my page!");
};

function fncSampleFunction(arg1, arg2) {
    // JS follows
    let returnValue,
        someConstant;



    return returnValue;

}

let linktag = "<a href=\"http://www.google.com\">Link to a site</a>";
document.write("Java text from a remote " + traffic + " js file.<br>");

document.write(`It is a ${weather} day with ${traffic} traffic.`)

document.write(beginEffect + beginPara + redText + linktag + endPara + endEffect);

