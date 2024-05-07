/*var num = 20;

num = toString(num);

console.log(num);
console.log(typeof(num));
// document.write(num);



var num = "20";
console.log(num)
num = parseInt(num);
console.log(typeof(num));
console.log(num)
num = toString(num);
console.log(num);

num = "5.5546521423";
console.log(num)
num = parseFloat(num);
console.log(num);
console.log(num.toFixed(2));

num = 2.36546346464;
console.log(parseFloat(num.toFixed(2)));
console.log(parseFloat(num.toPrecision(10)));

console.log(Number("3.25541"))
*/



/*
var firstName = "Rezaul ";
var lastNamne =  "Karim";

var fullName = firstName + lastNamne;
console.log(fullName);
console.log("My name is " + fullName);
document.write(fullName + "is my name")

*/

/*
var text = "Bangladesh";

var len = text.length;
document.write("Number of character" + len);
document.write("<br/> Number of character" + text.length);

console.log("Number of character" + len);
console.log("Number of character" + text.length);

var name = prompt("Enter Your Name:");
document.write(" <br/> total of charcter of your name: " + name.length);
console.log(name.length)
console.log(name);
console.log(name.charAt(2));
name = name.toUpperCase();
console.log(name);
name = name.toLowerCase();
console.log(name);

var text1 = "Bangladesh";
var text2 = " is a beautiful country";
var text = text1.concat(text2);
console.log(text);

var sliceText = text1.slice(0, 6);
console.log(sliceText);
*/

/*

var x = 5;
x += 5; //x = x + 5
console.log(x);

x *= 4; //x = x * 4
console.log(x);

x /= 2; //x = x / 2
console.log(x);

x -= 10; //x = x - 10
console.log(x);

x **= 2; //x = x ^2
console.log(x);

*/

/*
var num1 = prompt("Enter first number : ");
var num2 = prompt("Enter second number : ");

num1 = Number(num1);    //num1 = parseInt(num1, 10);
num2 = Number(num2);    //num1 = parseInt(num2, 10);

var sum, sub;
sum = num1 + num2;
document.write("Addition = " + sum + "<br/>");

sub = num1-num2;
document.write("Substraction = " + sub);

document.write("<br/><br/>");


var into, divide, reminder;
into = num1 * num2;
divide = num1 / num2;
reminder = num1 % num2;

document.write(num1 + " + " + num2 + " = " + sum + "<br/>");
document.write(num1 + " - " + num2 + " = " + sub + "<br/>");
document.write(num1 + " * " + num2 + " = " + into + "<br/>");
document.write(num1 + " / " + num2 + " = " + divide + "<br/>");
document.write(num1 + " % " + num2 + " = " + reminder + "<br/>");

*/

/*
// var fern = parseFloat(prompt("Enter Ferenheight : "));
// var celsius = (fern - 32) * (5/9);

// document.write("Celsius = " + celsius.toFixed(2));

// var celsius = parseFloat(prompt("Enter Celsius Temperature"));
// var farenheight = (celsius * (9/5)) + 32;

// document.write("Farenheight : " + farenheight);
*/

/*

var num =  prompt("Enter a Number : ");

if(num > 0){
    console.log(num + " is a Positive Number");
}
else if(num < 0){
    console.log(num + " is a Negative Number");
}
else{
    console.log(num + " is Zero")
}

*/

/*
var marks = prompt("Enter your marks : ");

if(marks>=80){
    console.log("A+");
}
else if(marks>=75){
    console.log("A-");
}
else if(marks>=70){
    console.log("A");
}
else if(marks>=65){
    console.log("B+");
}
else if(marks>=60){
    console.log("B-");
}
else if(marks>=55){
    console.log("B");
}
else if(marks>=50){
    console.log("C+");
}
else if(marks>=45){
    console.log("C-");
}
else if(marks>=40){
    console.log("C");
}
else if(marks>=33){
    console.log("D");
}
else{
    console.log("You are fail.");
}
*/
/*
var num1 = prompt("Enter num1 : ");
var num2 = prompt("Enter num2 : ");
var num3 = prompt("Enter num3 : ");

if (num1>num2 && num1>num3){
    console.log(num1 + " is a big number");
}
else if(num2>num1 && num2>num3){
    console.log(num2 + " is a big number");
}
else{
    console.log(num3 + " is a big number");
}
*/

/*
var letter = prompt("Enter a letter : ");

letter = letter.toLowerCase();
if(letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u'){
    console.log(letter + " is a vowel");
}
else{
    console.log(letter + " is a consonant.");
}
*/
/*
var digit = prompt("Enter a digit :");

switch(digit){
    case "0":
        console.log("Zero");
        break;
    case "1":
        console.log("One");
        break;
    case "2":
        console.log("Two");
        break;
    case "3":
        console.log("Three");
        break;
    case "4":
        console.log("Four");
        break;
    case "5":
        console.log("Five");
        break;
    case "6":
        console.log("Six");
        break;
    case "7":
        console.log("Seven");
        break;
    case "8":
        console.log("Eight");
        break;
    case "9":
        console.log("Nine");
        break;
    default:
        console.log("Not a valid digit");
}
*/

/*
var letter = prompt("Entere a letter : ");

letter =  letter.toLowerCase();

switch(letter){
    case "a":
        console.log("Vowel");
        break;
    case "e":
        console.log("Vowel");
        break;
    case "i":
        console.log("Vowel");
        break;
    case "o":
        console.log("Vowel");
        break;
    case "u":
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}
*/

/*
var letter = prompt("Entere a letter : ");

letter =  letter.toLowerCase();

switch(letter){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('Vowel');
        break;
    default:
        console.log('Consonant');
    
}
*/
/*
for(var i = 1; i <= 10; i++){
    console.log("Bangladesh");
    document.write("Bangladesh <br/>");
}
*/
/*
var sum = 0;
for(var i = 1; i<=100; i++){
    sum += i;
}
document.write(sum);
*/

/*
var i = 1;
while(i <= 5){
    document.write(" " + i);
    i++;
}
*/

/*
var i = 100

do{
    document.write(" " + i);
    i++;
}while(i <= 10);
*/

/*
var number = 00;
var result;
result = (number >= 0)? ((number === 0) ? "Zero" : "Possitive"  ): "Negetive" ;
console.log(result);

result = (number > 0) ? "Possitive" : (number < 0 ) ? "Negetive" : "Zero";
console.log(result);
*/

/*
var number1 = 95;
var number2 = 85;
var number3 = 75;

var result = ((number1  > number2) && (number1 > number3)) ? number1: (number2 > number3) ? number2 : number3;
console.log(result);
*/

/*
function sum (number){
    return number * number;
}

console.log(sum(5));
console.log(sum(10));
*/

/*
//  IIFEs (immediately Invokeable function expressions)
(function display(message){
    console.log(message);
})("Hello")         //auto function callig

var display2 = function displayMessage(msg){
    console.log(msg);
}

display2("Hello world");
*/

/*
var names = new Array();
names[0] =  "Rezaul";
names[1] = "Karim";
names[2] = "RK";
names[3] = "Piqul"

console.log(names[0]);
console.log(names);
console.log(names.length);
document.write(names);
document.write(names.length)

//push
console.log(names.length);
names.push("Sabbir");
console.log(names.length);
console.log(names[names.length -1]);

//pop
console.log(names.length);
names.pop();
console.log(names.length);
console.log(names[names.length - 1]);

var countrey1 =  ["Bangladesh", "India"];
var countrey2 = ["Pakisthan", "Nepal", "Afganisthan"];
var country = countrey1.concat(countrey2);

console.log(country);
*/

/*
var num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var sum = 0;

for(var i = 0; i < num.length; i++){
    console.log(num[i]);
    sum += num[i];
}
console.log(sum);
*/
/*
var names = ['Rezaul', 'Karim', 'RK',  'Piqul'];

console.log(names);
names.shift(); //shift is opposit of pop
console.log(names);
names.unshift('Sabbir');    //unshift is opposit of push
console.log(names);
*/

/*
// adding elements using splice
var names = ['Rezaul', 'Karim', 'RK',  'Piqul', 'Sabbir'];
console.log(names);
names.splice(2, 2, 'Rahman', 'Rahim');
console.log(names);
//remove elements using splice
names.splice(1,3);
console.log(names);
names.unshift('Musfiq');
names.unshift('Messi');
names.unshift('Ronaldo');
console.log(names);

var newArray = names.slice(0, 3);
console.log(newArray);
console.log(names);

names.push("Anisul")
// var sortName = names.sort();
// console.log(sortName);
names.sort();
console.log(names);
names.reverse();
console.log(names);

var numbers = [3, 1, 7, 4, 20, 45, 99, 2, 5];
console.log(numbers);
//Numbers sorted method
numbers.sort(function(a, b){
    return a - b;
});
//Numbers revers sorted method
console.log(numbers);
numbers.sort(function(a, b){
    return b - a;
});
console.log(numbers);
*/
/*
function hightScore(score){
    higestNumber = score[0];
    for(var i = 1; i<score.length; i++){
        if(score[i] > higestNumber){
            higestNumber = score[i];
        }
    }
    return higestNumber;
}

let scores = [21, 55, 31, 55, 78, 90, 3000, 500];

console.log(hightScore(scores));
*/
/*
function higestScore(scores){
    max = scores[0][0];
    name = scores[0][1];
    for(var i = 1; i<scores.length; i++){
        if(max < scores[i][0]){
            max = scores[i][0];
            name = scores[i][1];
        }
    }
    return name;
}

let plyars = [
    [55, "Sabbir"],
    [770, "Musfik"],
    [1000, "Mash"],
    [55, "Liton"],
    [78, "Ashraful"]
]

console.log(higestScore(plyars))
console.log(plyars.length)
*/
//object
/*
var student = {
    name: "Rezaul Karim",
    DOB: "06.06.1999",
    cgpa: 5.00,
    lang: ["Bangla", "English", "Russian", "Hindi", "Spanis"]
};
console.log(student.name);
console.log(student.DOB);
console.log(student.lang[1]);
console.log(student.lang[2]);
*/

//constructor
/*
function Student(name, dob, cgpa, lang){
    this.name = name;
    this.dob = dob;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function(){
        console.log(this.name);
        console.log(this.dob);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}
var student1 = new Student("Rezaul Karim RK", "06.06.1999", 5.00, ["Bangla", "English", "Russian", "Hindi", "Spanis"]);
var student2 = new Student("Sabbir Rahman", "17.05.1996", 4.55, ["Bangla", "English", "Urdu", "Hindi", "Spanis"]);
var student3 = new Student("Musfiqur Rahim", "06.06.1996", 4.80, ["Bangla", "English", "Arabic", "Turkey", "Spanis"]);

console.log(student1)

console.log(student1.name);
console.log(student1.dob);
console.log(student1.cgpa);
console.log(student1.lang);

student1.display();
student2.display();
student3.display();
*/

// Math Object
/*
var number = -5;
console.log(Math.sqrt(25));  //5
console.log(Math.abs(-5));  //5

console.log(Math.sin(5));
console.log(Math.cos(5));
console.log(Math.tan(5));

console.log(Math.asin(-10));
console.log(Math.acos(-10));
console.log(Math.atan(5));

console.log(Math.pow(3, 2));

console.log(Math.floor(2.6));
console.log(Math.ceil(2.6));
console.log(Math.round(2.499));

console.log(Math.max(5, 4, 6, 10, 8));
console.log(Math.min(5, 4, 6, 10, 8));

console.log(Math.floor((Math.random() * 10 ) + 1) );
console.log(Math.floor((Math.random() * 11 ) + 10) );
*/

// Guessing Game
/*
var loss = 0;
var win = 0;
for( var i= 1; i<=5; i++){
    var guessNumber =  parseInt(prompt("Enter a number from 1 to 5 : "));
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    if(randomNumber === guessNumber){
        win++;
        console.log("You hav won. Random number was : " + randomNumber);
        console.log();
    }
    else{
        loss++;
        console.log("you have lost. Random numer was : " + randomNumber);
    }
}

console.log("Total Won : " + win);
console.log("Total Lost : " + loss);
*/

//Date Object
/*
var date = new Date();
console.log(date);

var year =  date.getFullYear();
console.log(year);

var date_day = date.getDate();
console.log(date_day);

var day = date.getDay();
console.log(day);

var month =  date.getMonth();
console.log(month);

var current_hour =  date.getHours();
console.log(current_hour);

var current_minutes = date.getMinutes();
console.log(current_minutes);
date.
*/

// DOM Document Object Model
/* reference 1
var heading = document.getElementById('heading1');
// var changeText =  heading.innerText("Hello");
heading.innerText =  "Rezaul Karim RK";
heading.innerHTML = "Sabbir Rahman";
console.log(heading.innerText);

var para =  document.getElementById("para");
console.log(para);
para.innerHTML = "Bye";

var multipleTag = document.getElementsByTagName("h1");
console.log(multipleTag[0]);
multipleTag[0].innerHTML = "Musfiqur Rahim";
multipleTag[1].innerHTML = "Tamim Iqbal";

var multipleClass = document.getElementsByClassName("heading");
console.log(multipleClass);
multipleClass[0].innerHTML = "Titumir";
multipleClass[1].innerHTML = "Ekota";
*/

// Query Selector
/* reference 2
var id = document.querySelector("#ID");
console.log(id);
id.innerHTML = "h1 Id is changed";

var classs = document.querySelector(".class");
console.log(classs);
classs.innerHTML = "h1 Class is changed.";

var tagName = document.querySelector("h2");
console.log(tagName);
tagName.innerHTML = "tag Name is changed.";

var homeSelect = document.querySelector("li a");
console.log(homeSelect);
homeSelect.innerHTML = "Contact"

homeSelect = document.querySelector("div a");
console.log(homeSelect.innerHTML);
homeSelect.innerHTML = "Loved";

homeSelect =  document.querySelector(".my-div a");
console.log(homeSelect.innerHTML);
homeSelect.innerHTML = "Checkout";

var allSelector = document.querySelectorAll("h3");
console.log(allSelector);

allSelector[0].innerHTML = 'This was changed 1';
allSelector[1].innerHTML = 'This was changed 2';
allSelector[2].innerHTML = 'This was changed 3';
allSelector[3].innerHTML = "This was changed 4";
*/

//onclick reference 3
/*
var paraID = document.querySelector("#papraId");
var changeImg = document.querySelector(".change-img");
function nadim(){
    paraID.innerHTML = "You Clicked Nadim";
    changeImg.src = "img/Nadim.png";
}

function farzul(){
    paraID.innerHTML = "You Clicked Farzul";
    changeImg.src = "img/farzul.jpg";

}

paraID.style.border = "2px solid pink";
paraID.style.padding = "5px 10px";
paraID.style.width = '10rem';
paraID.style.margin = "0 auto";
paraID.style.marginBottom = "10px";
paraID.style.borderRadius = "5px";
paraID.style.color = "hotPink";
paraID.style.backgroundColor = "black";
*/

//find, create, add, remove html elements 
/* reference 4
var heading3 = document.createElement("h1");
var text = document.createTextNode("This is heading 3 addinig by JS");
heading3.appendChild(text); 

var myDiv = document.querySelector('#my-div');
console.log(myDiv);
myDiv.appendChild(heading3); //additing last

var classDiv = document.getElementsByClassName('my-div');
console.log(classDiv);

var heading4 = document.createElement("h1");
text =  document.createTextNode("This writeted by class helper");
heading4.appendChild(text); 

classDiv[0].appendChild(heading4);   //additing last

var removeHeading = document.getElementsByTagName("h1")[1];
classDiv[0].removeChild(removeHeading);     //remov exact chilt

var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This heading additing by JS for insertBefore funtion");
heading0.appendChild(text0);
var headingFind = document.querySelectorAll(".my-div h1");
classDiv[0].insertBefore(heading0, headingFind[0]); 

classDiv = classDiv[0];
console.log(classDiv.classList);
classDiv.classList.add("Add-second-class");
console.log(classDiv);
classDiv.classList.remove("my-div");
console.log(classDiv);
*/
 
//DOM traversing & manipulating https://prnt.sc/0auslA_RV8Gv
/* reference 5
var sliderImg = document.querySelector('.slider-img');
i=1;
function prev(){
    i--;
    if(i === 0){
        i = 8;
    }
    sliderImg.src = "img/slider/" + i + ".jpg"
}
function next(){
    i++;
    if(i === 9){
        i = 1;
    }
    sliderImg.src = "img/slider/" + i + ".jpg"
}
*/

/* reference 5
var para = document.querySelector("p");
// console.log(para)
function addStyle(){
    para.classList.add("para-style");
}
function removeStyle(){
    para.classList.remove("para-style");
}
*/

//addEventListener click, mouseover
/* reference 6
document.querySelector("button").addEventListener("click", alertFuction);

function alertFuction(){
    alert("Hello")
}
var changeStyle = document.querySelector(".helloBan");

changeStyle.addEventListener("mouseover", function(){
    changeStyle.classList.add("helloBanStyle");
});
*/

/* reference 7
var len = document.querySelectorAll(".myButtton").length;
console.log(len);

for(var i = 0; i < len; i++){
    document.querySelectorAll(".myButtton")[i].addEventListener("click", function (){
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + "  Clicked";
    })
}
*/

/* reference 8 audio event useing switch
for(var i = 0; i < 3; i++){
    document.querySelectorAll(".myButtton")[i].addEventListener("click", function (){
        var text = this.innerHTML;
        audioPlay(text);
    });
}

function audioPlay(text){
    switch(text){
        case "A":
            var audio = new Audio("audio/a.mp3");
            audio.play();
            break;
        case "B":
            var audio = new Audio("audio/b.mp3");
            audio.play();
            break;
        case "C":
            var audio = new Audio("audio/c.mp3");
            audio.play();
            break;
    }
}
*/

/* reference 9 audio event useing animation
var len = document.querySelectorAll(".my-Buttton").length;
// console.log(len)
for(i = 0; i < len; i++){
    document.querySelectorAll(".my-Buttton")[i].addEventListener("click", function (){
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        playAnimation(text);
    });
}

document.addEventListener('keypress', function(event){
    var text = event.key;
    audioPlay(text);
    playAnimation(text)
});

function audioPlay(text){
    switch(text){
        case "a":
            var audio = new Audio("audio/a.mp3")
            audio.play();
            break;
        case "b":
            var audio = new Audio("audio/b.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("audio/c.mp3");
            audio.play();
            break;
            
    }
}

function playAnimation(text){
    var selectedButton =  document.querySelector("." + text);
    console.log(selectedButton);
    selectedButton.classList.add('anim');

    setTimeout(function () {
        selectedButton.classList.remove("anim");
    }, 1000);
}
*/

/* reference 10
count = 0;
document.addEventListener('keypress', function(event){
    count++;
    var text = event.key;
    console.log(text);
    document.querySelector("p").innerHTML = "you are press " + count;
});
*/

/* reference 11 change event
const input =  document.querySelector("input[name=name]");
// console.log(input);
input.addEventListener("change", changeHandler);

function changeHandler(e){
    // console.log(e);
    // console.log(e.type);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.id);
    console.log(e.target.value);
}
*/

/* reference 12 checked event
const programs = document.querySelectorAll('input[name=proram]');
console.log(programs);

Array.from(programs).map((program) => {
    program.addEventListener("change", programHandler);
});

function programHandler(e){
    // console.log('checked');
    if(e.target.checked){
        console.log(e.target.value);
    }
}
*/

/*reference 13
const depertment = document.querySelector("#depertment");
// console.log(depertment);
depertment.addEventListener("change", handleDepertment);

function handleDepertment(e){
    // console.log("selcted");
    console.log(e.target.value);
}
*/

/*reference 14 form event
const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");

form.addEventListener('submit', formHandler);

function formHandler(e){
    e.preventDefault();
    
    const userInfo = {
        name : name.value,
        email : email.value,
        password : password.value
    };
    console.log(userInfo);
    name.value = "";
    email.value = "";
    password.value = "";
}
*/

/* reference 15 Media event
const video = document.querySelector('video');

video.addEventListener('canplay', function(){
    console.log("canplay");
});

video.addEventListener('play', function(){
    console.log("Play");
});

video.addEventListener("playing", function(){
    console.log("playing")
});

video.addEventListener("pause", function(){
    console.log("pause");
});

video.addEventListener('ended',  function(){
    console.log('Thanks for watching');
});
video.addEventListener('volumechange', function(){
    console.log("volumeChange");
});
*/

/*reference 16 window event
window.addEventListener('load', function(){
    console.log("load");
});
window.addEventListener('unload', function(){
    console.log("unload");
    // this.document.write("unload")
});

window.addEventListener('scroll', function(){
    console.log('scroll')
});

window.addEventListener('resize', function(){
    console.log('resize');
    const width = this.outerWidth;
    const height = this.outerHeight;
    console.log(`height: ${height}, width: ${width}`);
});

const details = document.querySelector('details');
details.addEventListener('toggle', function(e){
    console.log(e.target.open)
});
*/

/* reference 17
//mouse event click, dblclick, mousedown, mouseup, mouseenter, mouseleave, mouseover, mousemove
const div = document.querySelector('.mouse-event');
// console.log(div)
div.addEventListener("click", function(e){
    // console.log('clicked')
    // console.log(e.target)
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.innerHTML);
    console.log(e.target.textContent);
});
div.addEventListener("dblclick", function(){
    // console.log("double Click");
});
div.addEventListener("mousedown", function(){
    // console.log("mousedown");
});
div.addEventListener('mouseup', function(){
    // console.log("mouseup");
});
div.addEventListener('mouseenter', function(){
    // console.log('MouseEnter');
});
div.addEventListener('mouseleave', function(){
    // console.log('mouseleave')
});
div.addEventListener('mouseover', function(){
    // console.log('mouseover');
});
div.addEventListener('mousemove', function(e){
    // console.log('mousemove')
    // console.log("clientX = " + e.clientX + ", clientY = " + e.clientY)
    // console.log('offsetX = ' + e.offsetX + ', offsetY ' + e.offsetY);
});

const buttons =  document.querySelectorAll('.btn');
Array.from(buttons).map((button) => {
    button.addEventListener('click', function(e){
        // console.log(e.target.textContent)
    });
});
console.log(buttons);
*/

/* Key event reference 18
const textarea = document.querySelector('textarea');
textarea.addEventListener("keydown", function(e){
    // console.log('Keydoswn');
    if(e.repeat){
        // console.log("repeat"); // if press long time eany key return true else false
        alert("Do not repert");
    }
});

textarea.addEventListener('keypress', function(){
    // console.log("Keypress");
});

textarea.addEventListener('keyup', function(e){
    // console.log("Keyup");    //when relez key
    // console.log(e.key);      //Onley key say
    // console.log(e.keyCode);  //key ascii code
    // console.log(e.code);        //key with location say
    console.log(e.shiftKey);     //when press shift + a return true if onlye shift press return false
});
*/

/* reference 19
const input = document.querySelector("input");
// console.log(input);
input.addEventListener('blur', function(e) {
    // console.log('blur is occured');
    // console.log(e.target.value);
    this.value = e.target.value.toUpperCase();

});
input.addEventListener('focus', function(){
    // console.log('focus is occured');
    // input.style.backgroundColor = 'orange';
    // input.style.border = '5px solid pink';

});
// input.addEventListener('focusin', function(){
//     console.log('focusin is occured');
//     input.style.border = '5px solid pink';

// });
// input.addEventListener('focusout', function(){
//     console.log('focusout is occured');
// });
*/


/* reference 20
const input = document.querySelector('input');
const para = document.querySelector('p');

input.addEventListener('copy', function(){
    console.log('You have copied');
    para.innerHTML = 'You have copied'
});

input.addEventListener('cut', function(){
    console.log('You have cut');
    para.innerHTML = 'You have cut'
});

input.addEventListener('paste', function(){
    console.log('You have Pasted')
    para.innerHTML = 'You have Pasted'
});
*/

/* reference 21
const div = document.querySelector('div');
const parag = document.querySelector('p');

// console.log(div);
// console.log(parag)

parag.addEventListener('dragstart', function(e){
    e.dataTransfer.setData('Text', e.target.id);
});

div.addEventListener('dragover', function(e){
    e.preventDefault();
});

div.addEventListener('drop', function(e){
    let id = e.dataTransfer.getData('Text');
    console.log(id);
    div.appendChild(document.getElementById(id));
    e.preventDefault();
});
*/

/* location reference 22
// BOM Browser object model
console.log(location);
//href
console.log(location.href);
//protocol
console.log(location.protocol);
//full host
console.log(location.host)
// port
console.log(location.port)
//hostName
console.log(location.hostname)

let locationDiv = document.querySelector('.location-div');

let p1 = locationDiv.children[0];
p1.textContent = location.href;

let p2 = locationDiv.children[1];
p2.textContent = location.protocol;

let p3 = locationDiv.children[2];
p3.textContent = location.hostname;

let p4 = locationDiv.children[3];
p4.textContent = location.host;

let p5 = locationDiv.children[4];
p5.textContent =  location.port;

let p6 = document.createElement('p');
locationDiv.appendChild(p6.appendChild(document.createTextNode(location.pathname)));

const visitButton = document.getElementById('vist-button');
visitButton.addEventListener('click', function(){
    location.assign('https://www.facebook.com/mrk99rk')
});
*/

/* popup boxes
(function deleteSomething(){
    let value = confirm("Do you want to delete?");

    if(value){
        console.log("Deleted");
    }
    else{
        console.log("Not deleted");
    }
})();
// deleteSomething()

(function welcomeMessage(){
    let h1 = document.createElement('h1');
    let text;
    let name = prompt("Enter your name: ");
    if((name == null) || (name == '')){
        text = "No name found";
    }
    else{
        text ='Welcome ' + name;
    }
    let textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
})();

// welcomeMessage();
*/

/* reference 23
// setTimeout, setInterval
setTimeout(()=>{
    console.log('Hello');
}, 3000);

const saveButton = document.querySelector('.save-btn');
const message = document.querySelector('.message');

// saveButton.addEventListener('click', saveUser);
saveButton.addEventListener('click', displayCout);

function saveUser(){
    message.textContent = 'User registration Successful';
    setTimeout(()=>{
        // message.textContent = 'User registration Successful';
        message.textContent = '';
    }, 3000);
};

function displayCout(){
    let count = 1;
    message.textContent = count;

    setInterval(() => {
        message.textContent = ++count;
    }, 1000);
};
*/

/* reference 24
//create a watch
const saveButton = document.querySelector('.save-btn');
const message = document.querySelector('.message');

saveButton.addEventListener('click', startClock);

function startClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getHours();
    let seconds = date.getSeconds();

    hours = formateTime(hours);
    minutes = formateTime(minutes);
    seconds = formateTime(seconds);
    let time = hours + ':' + minutes + ':' + seconds;

    message.textContent = time;

    setInterval(startClock, 1000);
};

function formateTime(value){
    if(value < 10){
        value ='0' + value;
    }
    return  value;
}
*/

/*
try{
    alert('Hi everyone');
    alert(rk);
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    alert('Bye Everyone');
}
*/

/*
//throw
document.querySelector('#checkButton').addEventListener('click', function(){
    console.log('clicked')
    let num = document.querySelector('#numTextfield').value;
    // console.log(num);
    try{
        if(num < 5){
            throw "input is too low";
        }
        else if(num > 10){
            throw "input is too high";
        }
    }catch(error){
        // console.log(error);
        console.log('throw');
    }
});
*/

/*
//canvas
let c = document.querySelector('#my-carvas');
// console.log(c);
let ctx = c.getContext('2d');

ctx.lineWidth = 3;
ctx.strokeStyle  = 'black';
ctx.strokeRect(10, 10, 380, 280)

ctx.fillStyle = 'green';
ctx.fillRect(12, 12, 376, 276);

let centerX = c.width / 2;
let centerY = c.height / 2;

ctx.beginPath();
ctx.arc(centerX, centerY, 80, 0, 2*Math.PI, false);
ctx.fillStyle = 'red';
ctx.fill();
ctx.strokeStyle = 'pink'
ctx.stroke();
*/

/*
const add = (x, y) => {
    console.log(x+y);
}

add(5, 6);
*/

/*
"use strict"
const message = (text = "Hello this is default parameter") => {
    console.log(`${text}`);
}

message();
message('This parametar is sended');

const sum = (x = 5, y = 25, ...z) => {
    console.log(`x = ${x} + y = ${y} = ${x+y} ${z}`);

}

sum();
sum(55, 80, 85, 41);
*/

/*
//spreed operator
const addNumber = (x, y, z) => {
    return x + y + z;
}

let numbers = [1, 2, 3, 5];

console.log(addNumber(...numbers));

const newArray = [5, 6, ...numbers];
console.log(newArray);

let p1 = {
    name : 'Rezaul Karim',
    age : 35
}
let p2 = {
    nationality : 'Bangladesh',
    occapation : 'Full Stack Web Developer'
}

let p = {...p1, ...p2};
console.log(p);
*/

/*
// spreed operator
const studentInfo1 = (name, age) => {
    return {
        name,
        age
    }   
}

console.log(studentInfo1("Rezaul Karim", 82));

let message = {
    body : () =>{
        return 'Hi I am object function';
    },
    'body name' (){
        return 'Hi im body name function in object';
    }
}

console.log(message.body());
console.log(message['body name']());
console.log(message['body']());
*/

/*
//forof forin loop
const names = ['s1', 's2', 's3'];
for(let name of names){
    console.log(name);
}

let student = {
    id: 101,
    name: 'Rezaul Karim RK',
    cgpa: 3.91
}
for(let x in student){
    console.log(`${x} : ${student[x]}`);
}
*/

/*
// forEach
var numbers = [10, 20, 30, 40, 50];
numbers.forEach(eachFunction);
let squareNumbers = [];

// const eachFunction = (data) => {
//     console.log(data);
// }
function eachFunction(data){
    console.log(data);
}

numbers.forEach(function (x){
    squareNumbers.push(x*x);
});
console.log(...squareNumbers);

squareNumbers.forEach((x, index, arr) => {
    arr[index] = x + 5;
});

console.log(...squareNumbers);
*/


/*
// map and filter
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squareNumbers = numbers.map((x) => {
    return x*x;
});

// console.log(squareNumbers);
// console.log(numbers);

let numbers2 = [21, 57, 10, 5, 82, 1, 3, 78, 1];
let geterThenTen = numbers2.filter((x) => {
    return x>20;
});

console.log(geterThenTen);
// console.log(...geterThenTen);
*/

/*
// simplyfy arrow function
const message2 = () => 'Hi developer';
// console.log(message2());

const add = (num1, num2) => num1 + num2;
// console.log(add(5, 8));

const studentInfo = [
    {
        id: 101,
        name: "Rezaul Karim",
        gpa: 5.00
    },
    {
        id: 102,
        name: 'Sabbir Rahman',
        gpa: 3.56
    }
    ,
    {
        id: 103,
        name: 'Taskin Ahmed',
        gpa: 3.18
    },
    {
        id: 103,
        name: 'Rubel Ahmed',
        gpa: 3.20
    }
];
console.log(studentInfo);

const studentName = (studentInformation) => {
    return studentInformation.filter((x) => x.gpa >3.5).map((y) => y.name);
};

console.log(studentName(studentInfo));
*/

/*
//destructing
let numbers = [10, 20, 30, 40, 50];
let [num1, num2, num3, num4, num50] = numbers;

// console.log(num1);
// console.log(num4);
let a = 10, b = 20;

[a, b] = [b, a];
// console.log(a);
// console.log(b);

const studentInf = {
    id : 101,
    fullName : 'Rezaul Karim',
    gpa : 5.00,
    language : {
        native: 'Bangla',
        beginer : 'English',
    }
};

const  {id, fullName, language} = studentInf;

console.log(id);
console.log(language.native);

const studentFunc = ({id, fullName}) => {
    console.log(`id = ${id}, Full Name = ${fullName}`);
}

studentFunc(studentInf);
*/


/*
const evenNumber = (value, index, array) => {
    if(value % 2 === 0){
        return value;
    }
}

let numbers = [5, 55, 14, 7, 78];
let firstEvenNumber = numbers.find(x => x%2 === 0);
let firstEvenIndex = numbers.findIndex(evenNumber);

console.log(firstEvenNumber);
console.log(firstEvenIndex);
*/

/*
//startsWith, endsWith, includes
const message = "Today is friday";
console.log(message.startsWith('Today', 10));
console.log(message.endsWith("friday"));
console.log(message.includes("is"));
*/

/*
//export import
import {text, months, setText, message} from "./my1Module.js";
// import {months} from './myModule.js';

// // import {text} from './myModule.js';

console.log(months);
setText("goodbye from Bangladesh");
console.log(text)
// console.log(months);
*/

/*
//class
class Student {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    set studentName (name){
        this.name = name
    }
    get studentInfo(){
        return `${this.id} + ${this.name}`;
    }
}
let s1 = new Student(159, 'Rezaul Karim');
console.log(s1);
console.log(s1.id);
console.log(s1.name);

s1.studentName = 'Sabbir Rahman';
console.log(s1)

console.log(s1.studentInfo)
*/

/*
//synchronous va Aasynchronous programming
const taskOne = () => {
    console.log("Task1");
};
const dataLoading = () => {
    console.log('Task2, Data Loading');
}
const taskTwo = () => {
    setTimeout(dataLoading, 300)
};
const taskThree = () => {
    console.log("Task3");
};
const taskFour = () =>{
    console.log('Task4');
};
const taskFive = () =>{
    console.log('Task5');
};
taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();
*/


/*
//callback and higher order function
const taskOne = (callBack) => {
    console.log("Task1");
    callBack()
};
const taskTwo = (callBack) => {
    setTimeout(() => {
        console.log('Task2, Data Loading');
        callBack();
    }, 3000);
};
const taskThree = (callBack) => {
    console.log("Task3");
    callBack();
};
const taskFour = (callBack) =>{
    console.log('Task4');
    callBack();
};
const taskFive = () =>{
    console.log('Task5');
};
// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();

taskOne(()=>{
    taskTwo(() => {
        taskThree(() =>{
            taskFour(() => {
                taskFive()
            });
        });
    });
});

const square = (num) => {
    console.log(`Square of ${num} : ${num*num}`);
}

const higherOrderFunction = (num, callBack) => {
    callBack(num);
}

const y = square;

// higherOrderFunction(5, y);
*/


/*
// promise 
console.log('welcome');
const promise1 = new Promise((resolve, reject) => {
    let completePromise = true;
    if(completePromise) {
        resolve("compleate promise 1");
    }
    else{
        reject(new Error("Not complete promise 1"));
    }
});

const promise2 = new Promise((resolve, reject) => {
    resolve('complete promise 2');
});
console.log((promise1));
promise1.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

Promise.all([promise1, promise2]).then(([res1, res2]) =>{
    console.log(res1);
    console.log(res2);
});
console.log('Bye');

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Completed Promise 3")
    }, 3000);
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Complete Promise 5");
    }, 10000);
});

Promise.race([promise3, promise4]).then((res) => console.log(res));
*/

/*
//Promise
console.log('Hello');
const promise1 = new Promise((resolve, reject) =>{
    resolve('Task 1 is completed');
});
const taskOne = () => {
    return new Promise((resolve,  reject) => {
        resolve('task one is completed');
    });
}

const taskTwo = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("task two is completed");
        }, 5000);
    });
}
const taskThree = () => {
    return new Promise((resolve, reject) => {
        // resolve('task three is completed');
        reject('Task theree is rejected');
    });
}
const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve('task four is completed')
    });
}

taskOne().then((res) => {console.log(res)})
    .then(taskTwo)
    .then((res) => console.log(res))
    .then(taskThree)
    .then((res) => console.log(res))
    .then(taskFour)
    .then((res) => console.log(res))
    .catch((err) => {
        console.log(err);
    });

console.log('program is closed');
*/

/*
// async await
const taskOne = () => {
    return new Promise((resolve,  reject) => {
        resolve('task one is completed');
    });
}

const taskTwo = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("task two is completed");
        }, 5000);
    });
}
const taskThree = () => {
    return new Promise((resolve, reject) => {
        // resolve('task three is completed');
        reject('Task theree is rejected');
    });
}
const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve('task four is completed')
    });
}

const callAllTask = async () => {
    try{
        const t1 = await taskOne();
    console.log(t1);
    const t2  = await taskTwo();
    console.log(t2);
    const t3 =  await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
    }catch(e){
        console.log(e);
    }
}
callAllTask();
*/

/*
//XMLHttpRequest fetch
//event - onload(), onerror()
//property -  response, responseText, responseType, responseURL, status, statusText
//function open(), send(), setRequestHeader()
// console.log(window);
URL = 'https://jsonplaceholder.typicode.com/posts';
const makeRequest = (method, url, data) => {
   
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            let data = xhr.response;
            console.log(xhr.responseURL);
            console.log(xhr.status);
            console.log(xhr.statusText);
            console.log(JSON.parse(data));
        }
        xhr.onerror = () => {
            console.log('error is here');
        }
        xhr.send(JSON.stringify(data));
    });

// console.log(xhr);
}

const getData = () => {
    //    https://jsonplaceholder.typicode.com/posts
    makeRequest('GET', URL).then(res => console.log(res));
}
const sendData = () => {
    makeRequest('POST', URL, {
        title: "RK",
        body: "Web Developer", 
        userId: 287289
    });
    // console.log('send data');
}

const updateData = () => {
    makeRequest('PUT', URL + '/1', {
        id: 1,
        title: 'sabbir Rahman',
        body: 'Professional Cricketer',
        userID: 1
    })
}

const updateSingleData = () => {
    makeRequest('PATCH', URL + '/2', {
        title: 'Hamas Force'
    })
}

const deleteData = () => {
    makeRequest('DELETE', URL + '/3');
}
// sendData();
getData();
// updateData()
// updateSingleData();
// deleteData();
*/


/*
// 4 ways to call api - XMLHttpRequest, fetch, acios, jquery

//fetch() has replaced XMLHttp Request
//fetch() - global method ro making http Request
// 2 wasys to call - then, async await

//+ fetch()  is easy to use compare to XMLHttp Request
//+ fetch() return a promise
//- fetch() return promise can only handle handle network error
// - does not support all the older broswer

// console.log(window.fetch);
// const url = 'https://jsonplaceholder.typicode.com/posts';
// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-type' : 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify({
//         title: 'Developer',
//         body: 'Rezaul Karim RK',
//         userId: 1,
//     }),
// })
//     .then((res) => {
//         if(!res.ok){
//             const message = `Error : ${res.status}`;
//             throw new Error(message);
//         }
//         return res.json()
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

// fetch(url + '/1', {
//     method: 'PUT',
//     headers: {
//         'Content-type' : 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify( {
//         id: 1,
//         title: 'Cricketer',
//         body: 'Sabbir Rahman as a Cricket players',
//     }),

// })
//     .then((res) =>{
//         if(!res.ok){
//             const message = `Error: ${res.status}`;
//             throw new Error(message);
//         }
//         return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

// fetch(url + '/1', {
//     method: 'PATCH',
//     headers:{
//         'Content-type' : 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify({
//         title: 'Footbolar',
//     })
// })
//     .then((res) => {
//         if(!res.ok){
            // cons messag = `Error : ${res.status}`;
//             throw new Error(message) ;
//         }
//         return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

// fetch(url + '/1', {
//     method: 'DELETE',
// })
// .then((res) => {
//     if(!res.ok){
//         message = `Error : ${res.status}`;
//         throw new  Error(res.status);
//     }
//     return res.json();
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err));


// const url = 'https://jsonplaceholder.typicode.com/posts';

// const makeRequest = async (url, config) => {
//     const res =await fetch(url, config);
//     if(!res.ok){
//         const message = `Error : ${res.status}`;
//         throw new Error(message);
//     }
//     const data = await res.json();
//     return data;
// }

// const getData = async () => {
//     makeRequest(url)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }

// const postData = async () => {
//     makeRequest(url, {
//         method: 'POST',
//         headers:{
//             'Content-type': 'application/json; charset=UTF-8',
//             // 'Content-type': 'application/json; charset=UTF-8'
//         },
//         body: JSON.stringify({
//             title: 'Footboolar',
//             body: 'Ozil is a best Foodbool players in the world',
//             usrId: 1
//         }),
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }

// const updateData = () => {
//     console.log()
//     makeRequest(url + '/1', {
//         method: 'PUT',
//         headers:{
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//         body: JSON.stringify({
//             id: 1,
//             title: 'Cricketer',
//             body: 'Taskin Ahmed is a Cricketer',
//             userId: 1,
//         }),
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }

// const singleUpdateData = () => {
//     makeRequest(url + '/2', {
//         method: 'PATCH',
//         headers: {
//             'Content-Type' : 'application/json; charset=UTF-8',
//         },
//         body: JSON.stringify({
//             body: 'This body is up to date',
//         }),
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }

const deleteData = () => {
    makeRequest(url + '/2', {
        method: 'DELETE'
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

// getData();
// postData();
// updateData();
// singleUpdateData();
deleteData();

*/

/*axios
//axios is a js library
//it helps to make request from brouser (plain js/Vue/React,Anguler) node.js
//+ very easy to use
//+ it supports all modern browser including IE
//+ throw error brilliantly
//+ No neet to set header cause axios is intelligent


// axios(config)
// axios(url [, config])

//axios.get(url [, config])
//axios.post(url [, config])
//axios.put(url [, config])
//axios.patch(url [, config])
//axios.delete(url [, config])

//axios return response object - data, status, statusTex, headers, config

// console.log(window);

// const url = 'https://jsonplaceholder.typicode.com/posts/';
// axios.get(url)
//     .then((res) => console.log(res.data))
//     .catch((err) => {
//         console.log(err);
//         console.log(err.message)
//         console.log(err.code);
//         // console.log(err.request);
// });

// axios.post(url, {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'API',
//         body: 'Hello API',
//         userId: 5,
//     }),
// })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));


// axios.put(url + '/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'Update',
//         body: 'This is updated body',
//         userId: 55,
//     }),
// })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));

// axios.patch(`${url}/1`, {
//     body: JSON.stringify({
//         // id: 2,
//         body: 'This is up to date in patch'
//     })
// })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));

// axios.delete(`${url}/5`)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));

const url = 'https://jsonplaceholder.typicode.com/posts/';

const makeRequest = async (config) => {
    return await axios(config);
}

const getData = () => {
    makeRequest(url)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

const createData = () => {
    makeRequest({
        url,
        // method: 'POST',
        data: JSON.stringify({
            title: 'Create',
            body: 'This is a create Data',
            userId: 1,
        }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

const updateData = () => {
    makeRequest({
        url: url + '/1',
        method: 'PUT',
        data: JSON.stringify({
            id: 1,
            title: 'Update',
            body: 'This is date method',
            userId: 1
        }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

const patchData = () => {
    makeRequest({
        url: url + '/1',
        method: 'PATCH',
        data: JSON.stringify({
            body: 'This is date method',
        }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}
const deleteData = () => {
    makeRequest({
        url: url + '/1',
        method: 'Delete'
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

// getData();
// createData();
// updateData();
patchData();
deleteData()
*/

/*
// ajax jquery
const url = 'https://jsonplaceholder.typicode.com/posts/';
// console.log(window)

const makeRequest = async (url, method, data) => {
    try {
        const result = await $.ajax({
            url,
            method,
            data,
        });
        return await result;
    } catch (error) {
        console.log(error);
    }
};

const getData = () => {
    makeRequest(url,'GET')
    .then((res) => console.log(res));
}

const createData = () => {
    makeRequest(url, 'POST', {
        title: 'Post Data',
        body: 'This is a post data',
        usrId: 1
    }).then((res) => console.log(res))
    .catch((err) => console.log(err));
}

const updateData = () => {
    makeRequest(url + '/1', 'PUT',  {
        id: 1,
        titile: 'Update',
        body: 'This is a updated Body',
        userId: 1,
    })
    .then((res) => console.log(res));
}
const patchData = () => {
    makeRequest(url + '/1', 'PATCH', {
        title: 'This title is changed',
    })
    .then((res) => console.log(res));
}
const deleteData = () => {
    makeRequest(url + '/1', 'delete')
    .then((res) => console.log(res));
}
// getData();
// createData();
// updateData();
// patchData();
deleteData();
*/


/*
// console.log(localStorage);

//setItem (key, value)
// localStorage.setItem('userName', 'Rezaul Karim RK');
// localStorage.setItem('password', 'Sabbir Rahman');


// //getItem(key)
// let userName = localStorage.getItem('userName');
// let userPassword = localStorage.getItem('password');
// console.log(userName);
// console.log(userPassword);

// localStorage.setItem('userName', 'Taskin Ahmed');
// localStorage.setItem('password', 'Apon1122@@');

// userName =  localStorage.getItem('userName');
// userPassword = localStorage.getItem('password');
// console.log(userName);
// console.log(userPassword);

// // removeItem(kew)
// localStorage.removeItem('userName');

localStorage.removeItem('password');

const contryies = ['Bangladesh', 'Iran', 'Pakisthan', 'Russia'];
localStorage.setItem('countries', JSON.stringify(contryies));


const data = JSON.parse(localStorage.getItem('countries'));

console.log(data);
localStorage.clear();

*/


/*
// localStorage va sessionStorage
// 10mb vs 5mb
//parmanent vs sesion(tab)

sessionStorage.setItem('user1', 'RezaulKarimRK');
sessionStorage.setItem('user2', 'RezaulKarimRK');
const userName = sessionStorage.getItem('user1');
console.log(userName);

// sessionStorage.removeItem('user1');
sessionStorage.clear();

const userInfo = {id: 102, name: 'Rezaul Karim RK'};
sessionStorage.setItem('user', JSON.stringify(userInfo));

const data = JSON.parse(sessionStorage.getItem('user'));
console.log(data.id);
*/

document.cookie = 'username=Rezaul; expires=Tue, 08 May 2024 11:38:00 GMT';
console.log(document.cookie);