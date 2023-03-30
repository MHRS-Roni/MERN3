//Getting item from DOM
let namesInp = document.getElementById("nameInput")
const heightInp = document.getElementById("heightInput")
let weightInp = document.getElementById("weightInput")
let calculateBtn = document.getElementById("calculateBtn")
let unitSelect = document.getElementById("unit")
const wrongInputW = document.getElementById("wrongInputW")
const wrongInputH = document.getElementById("wrongInputH")
let result = document.getElementById("calculatedResult")
let required = document.getElementsByClassName("required")
let showDetails = document.getElementById("calculatedResult")
let nameSet = document.getElementById("name")
let weightSet = document.getElementById("weight")
let heightSet = document.getElementById("height")
let statusSet = document.getElementById("status")
let bmiSet = document.getElementById("bmi")
let bmiName = document.getElementById("bmib")
let statusName = document.getElementById("statusb")

//reseting input value after reload
const resetall = () =>{
namesInp.value = "";
weightInp.value= "";
unitSelect.value = "meterCenti";
heightInp.value= "";
showDetails.style.display = "none"
}
resetall();

//declaring variable 
let BMI = null;
let conHeight = null;
let height = null;
let weight = null;
let names = null;
let arr = null;
let unit = unitSelect.value;

//get unit after change
unitSelect.addEventListener("change",function(){
    unit = unitSelect.value
    heightInp.value = heightInputDetails()

})
//validate name
namesInp.addEventListener("keyup",function(){
    const match = /[A-Za-z]/
    if(event.keyCode == 8){}
    else if(event.key == "Enter"){
        namesInp.blur();
    }else if(match.test(event.key) || event.key == " "){
        names = namesInp.value
    }else{
        namesInp.value = names
    }
})
namesInp.addEventListener("blur",function(){
    names = namesInp.value.trim()
})
//weight input validate
weightInp.addEventListener('keyup',function(){
    const match = /([0-9.])/
    if(event.keyCode == 8){}
    else if(event.key == "Enter"){
        weightInp.blur();
    }else{
    match.test(event.key)? weight = weightInp.value  :(( wrongInputW.style.display = "block"),weightInp.value = weight);
}})
weightInp.addEventListener('focus',function(){
    weightInp.value = '';
    weight= null;
})
weightInp.addEventListener('blur',function(){
    weight = weightInp.value.trim();
    if(weightInp.value){
    weightInp.value = weightInp.value.trim()+"kg"}
    wrongInputW.style.display = "none"
})


//height input validate
heightInp.addEventListener("keyup",function(){
    const match = /([0-9 .])/
    if(event.keyCode == 8){}
    else if(event.key == "Enter"){
        heightInp.blur();
    }else{
    match.test(event.key) ? height = heightInp.value  :(( wrongInputH.style.display = "block"),heightInp.value = height);
    console.log(event.key);
}
})

//validated height input get
heightInp.addEventListener("change",function(){
    height = heightInp.value
})
heightInp.addEventListener('focus',function(){
    heightInp.value = ""
    height = null;
})

//show height input details
heightInp.addEventListener("blur",function(){
    height = heightInp.value.trim()
    console.log(height)
    arr = height.split(" ")
    heightInp.value = heightInputDetails()
    wrongInputH.style.display = "none"
    parseHeight()


})

//show result 
calculateBtn.addEventListener("click",function(){
    if(checkAllInfo()){
    console.log(heightInp.value)

    convert();
    calculate()
    // resetall()
    // result.innerHTML = Math.round(BMI * 100) / 100;
    showDetails.style.display = "block"
    deatilsSet()
    console.log(BMI)


}
    

})
//unit convertion
const convert = () =>{
    unit == "meterCenti" ? (conHeight = height ) :{};
    unit == "feetInch" ? (conHeight = height * 0.3048) : {};
    console.log(conHeight)
}
//BMI Calculation
const calculate = () => {BMI = Math.round(weight / (conHeight*conHeight) *10) / 10};






//create height details
function heightInputDetails(){
    if(heightInp.value){
    console.log(heightInp.value);
    let num1 = arr[0]
    let num2 = arr[1] ? arr[1] : 0;
    let text 
    if(unit == "meterCenti")
    text = num1 +"m  "+ num2 +"cm";
    if(unit == "feetInch")
    text = num1 +" ft  "+ num2+" in";

    return text}
    return ""
}
//convert input to number
const parseHeight = () =>{
    arr = height.split(" ")
    let num1 = arr[0]
    let num2 = arr[1] ? arr[1] : 0;
    if(unit == "meterCenti"){
        height = Math.abs(Number(num1)) + Number( num2 / 100)
    }
    if(unit == "feetInch"){
        height = Math.abs(Number(num1)) + Number( num2 / 12)
    }
        console.log(height)
    
}
//fill all the input field
function checkAllInfo(){
    if(!namesInp.value){
        required[0].style.display = "inline"}
        else{
            required[0].style.display = "none"}
    if(!weightInp.value){
        required[1].style.display = "inline"}
        else{
            required[1].style.display = "none"}
    if(!isNaN(heightInp.value)){
        required[2].style.display = "inline"}
        else {
            required[2].style.display = "none"}
   if(namesInp.value && weightInp.value && heightInp.value){
        return true}
    else    {
        return false}
}
const deatilsSet = () =>{
    nameSet.innerHTML= names
    heightSet.innerHTML = heightInputDetails()
    weightSet.innerHTML=  weight + "kg"
    bmiSet.innerHTML= BMI
    if(BMI < 18.5){
        bmiSet.style.backgroundColor = " #FFA500"
        statusSet.style.backgroundColor = " #FFA500"
        statusSet.innerHTML = "Underweight"
    }
    else if(BMI > 18.5 && BMI < 24.9){
        bmiSet.style.backgroundColor = "green"
        statusSet.style.backgroundColor = "green"
        statusSet.innerHTML = "Healthy Weight"
    }
    else if(BMI > 25 && BMI < 29.9){
        bmiSet.style.backgroundColor = "#FF6347"
        statusSet.style.backgroundColor = "#FF6347"
        statusSet.innerHTML = "Overweight"
    }
    else if(BMI > 30){
        bmiSet.style.backgroundColor = "red"
        statusSet.style.backgroundColor = "red"
        statusSet.innerHTML = "Obesity"
    }
}