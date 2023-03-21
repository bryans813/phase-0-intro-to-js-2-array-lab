// Write your solution here!
var cats = [ 'Milo', 'Otis', 'Garfield' ];

function destructivelyAppendCat(name){
cats.push(name);
return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    cats;
}

function appendCat(name){
var newArray = [...cats];
newArray.push(name);
return newArray;
}

function prependCat(name){
    var newArray = [...cats];
    newArray.unshift(name);
    return newArray;
}

function removeLastCat(){
var newArray = [...cats];
newArray.pop();
return newArray;
}

function removeFirstCat(){
    var newArray = [...cats];
    newArray.shift();
    return newArray; 
}