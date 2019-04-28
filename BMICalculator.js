function calculateFunction() {
    resetGraphics();  //make sure no previous graphics are "on"

    var kgIn = document.getElementById('kg').value;
    var mIn = document.getElementById('meter').value;
    console.log(kgIn);
    console.log(mIn);

    console.log( BMI(kgIn,mIn) );
    console.log(assignBodyType(BMI(kgIn,mIn)));
    
    if (kgIn>0 && mIn>0) {
        bmiResults.innerHTML = 'BMI: ' + BMI(kgIn,mIn);
        bmiText.innerHTML = assignBodyType(BMI(kgIn,mIn));
    }
    else {
        bmiResults.innerHTML = 'You need to enter your height and weight above';
    }
}

function resetFunction(){
/* reset inputs */
    document.getElementById('kg').value = 0;
    document.getElementById('meter').value = 0;

/* reset results text */
    bmiResults.innerHTML = '';
    bmiText.innerHTML = '';

/* reset graphic styles */
    resetGraphics();
}

function resetGraphics(){
    var imgId0 = document.getElementById('underweight');
    imgId0.setAttribute('class','imgClassOff');
    var imgId1 = document.getElementById('normalweight');
    imgId1.setAttribute('class','imgClassOff');
    var imgId2 = document.getElementById('overweight');
    imgId2.setAttribute('class','imgClassOff');
    var imgId3 = document.getElementById('obese');
    imgId3.setAttribute('class','imgClassOff');
}


function BMI(kgIn, mIn) {
    if (kgIn>0 && mIn>0) {
        var calcBMI = kgIn / (mIn*mIn);
        return calcBMI;
    }
    else { return 0; }
}

function assignBodyType(bmiIn) {
    var typeDesc;
    if (bmiIn===0){
        typeDesc='You need to enter your weight and height!';
    }
    else if(bmiIn<=18.5){
        typeDesc='(Underweight)';
        
        //change the css class for graphic
        var imgId = document.getElementById('underweight');
        imgId.setAttribute('class','imgClassOn');
    }
    else if(bmiIn<=24.9){
        typeDesc='(Normal weight)';
        
        var imgId = document.getElementById('normalweight');
        imgId.setAttribute('class','imgClassOn');
    }
    else if (bmiIn<=29.9){
        typeDesc='(Overweight)';

        var imgId = document.getElementById('overweight');
        imgId.setAttribute('class','imgClassOn');
    }
    else if (bmiIn>=30){
        typeDesc='(Obese)';

        var imgId = document.getElementById('obese');
        imgId.setAttribute('class','imgClassOn');
    }
    else {
        typeDesc='What have you done?  Some kinda error....';
    }
    
    return typeDesc;
}