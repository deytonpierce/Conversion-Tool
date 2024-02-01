var inch = 0;
var feet = 0;
var yard = 0;
var mile = 0;

var cent = 0;
var meterA = 0;
var meterB = 0;
var kilo = 0;

function changeInchMore(){
    var inchCount = document.querySelector('#inchNum');
    var centCount = document.querySelector('#centNum');
    inch = inch + 1;
    cent = inch * 2.54;
    cent = (Math.round(cent * 100) / 100).toFixed(2);
    inchCount.innerText = inch;
    centCount.innerText = cent;
}
var changeInchMoreVar = document.querySelector('#inchMore');
changeInchMoreVar.onclick = changeInchMore

function changeInchLess(){

    var inchCount = document.querySelector('#inchNum');
    var centCount = document.querySelector('#centNum');
    inch = inch - 1;
    cent = inch * 2.54;
    cent = (Math.round(cent * 100) / 100).toFixed(2);
    inchCount.innerText = inch;
    centCount.innerText = cent;
}
var changeInchLessVar = document.querySelector('#inchLess');
changeInchLessVar.onclick = changeInchLess

function changeFeetMore(){
    var feetCount = document.querySelector('#feetNum');
    var meterACount = document.querySelector('#meterANum');
    feet = feet + 1;
    meterA = feet * 0.3048;
    meterA = (Math.round(meterA * 100) / 100).toFixed(2);
    feetCount.innerText = feet;
    meterACount.innerText = meterA;
}
var changeFeetMoreVar = document.querySelector('#feetMore');
changeFeetMoreVar.onclick = changeFeetMore

function changeFeetLess(){
    var feetCount = document.querySelector('#feetNum');
    var meterACount = document.querySelector('#meterANum');
    feet = feet - 1;
    meterA = feet * 0.3048;
    meterA = (Math.round(meterA * 100) / 100).toFixed(2);
    feetCount.innerText = feet;
    meterACount.innerText = meterA;
}
var changeFeetLessVar = document.querySelector('#feetLess');
changeFeetLessVar.onclick = changeFeetLess

function changeYardMore(){
    var yardCount = document.querySelector('#yardNum');
    var meterBCount = document.querySelector('#meterBNum');
    yard = yard + 1;
    meterB = yard * 0.9144;
    meterB = (Math.round(meterB * 100) / 100).toFixed(2);
    yardCount.innerText = yard;
    meterBCount.innerText = meterB;
}
var changeYardMoreVar = document.querySelector('#yardMore');
changeYardMoreVar.onclick = changeYardMore

function changeYardLess(){
    var yardCount = document.querySelector('#yardNum');
    var meterBCount = document.querySelector('#meterBNum');
    yard = yard - 1;
    meterB = yard * 0.9144;
    meterB = (Math.round(meterB * 100) / 100).toFixed(2);
    yardCount.innerText = yard;
    meterBCount.innerText = meterB;
}
var changeYardLessVar = document.querySelector('#yardLess');
changeYardLessVar.onclick = changeYardLess

function changeMileMore(){
    var mileCount = document.querySelector('#mileNum');
    var kiloCount = document.querySelector('#kiloNum');
    mile = mile + 1;
    kilo = mile * 1.60934;
    kilo = (Math.round(kilo * 100) / 100).toFixed(2);
    mileCount.innerText = mile;
    kiloCount.innerText = kilo;
}
var changeMileMoreVar = document.querySelector('#mileMore');
changeMileMoreVar.onclick = changeMileMore

function changeMileLess(){
    var mileCount = document.querySelector('#mileNum');
    var kiloCount = document.querySelector('#kiloNum');
    mile = mile - 1;
    kilo = mile * 1.60934;
    kilo = (Math.round(kilo * 100) / 100).toFixed(2);
    mileCount.innerText = mile;
    kiloCount.innerText = kilo;
}
var changeMileLessVar = document.querySelector('#mileLess');
changeMileLessVar.onclick = changeMileLess

function reset(){
    var inchCount = document.querySelector('#inchNum');
    var centCount = document.querySelector('#centNum');
    var feetCount = document.querySelector('#feetNum');
    var meterACount = document.querySelector('#meterANum');
    var yardCount = document.querySelector('#yardNum');
    var meterBCount = document.querySelector('#meterBNum');
    var mileCount = document.querySelector('#mileNum');
    var kiloCount = document.querySelector('#kiloNum');
    inch = 0;
    cent = 0;
    feet = 0;
    meterA = 0;
    yard = 0;
    meterB = 0;
    mile = 0;
    kilo = 0;
    inchCount.innerText = inch;
    centCount.innerText = cent;
    feetCount.innerText = feet;
    meterACount.innerText = meterA;
    yardCount.innerText = yard;
    meterBCount.innerText = meterB;
    mileCount.innerText = mile;
    kiloCount.innerText = kilo;
}
var resetVars = document.querySelector('#resetButton');
resetVars.onclick = reset