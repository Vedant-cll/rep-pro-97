function perimeter_and_area(){
    window.location="perimeter-and-area.html";
}
function Calculate1(){
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    answer1 = parseInt(input1) * parseInt(input2);
    question_number = "<h4>" +'Area: '  + answer1 +"</h4>";
    document.getElementById("output1").innerHTML = question_number;

    answer1_2 = parseInt(input1) * (2);
    answer1_3 = parseInt(input2) * (2);
    answer1_4 = parseInt(answer1_2) + parseInt(answer1_3)
    question_number1_2 = "<h4>" +'Perimeter: ' + answer1_4 +"</h4>";
    document.getElementById("output1.2").innerHTML =question_number1_2;
}

function Volume(){
    window.location="volume.html";
}
function Calculate2(){
    input3 = document.getElementById("input3").value;
    input4 = document.getElementById("input4").value;
    input5 = document.getElementById("input5").value;
    answer2 = parseInt(input3) * parseInt(input4) * parseInt(input5);
    question_number1 = "<h4>"+"Volume: " + answer2 +"</h4>";
    document.getElementById("output2").innerHTML = question_number1;
}


function Area_and_perimeter_of_circle(){
    window.location="Perimeter_and_area_of_a_circle.html";
}

function Calculate3(){
    input6 = document.getElementById("input6").value;
    answer3 = 3.1416 * (parseInt(input6) * parseInt(input6));
    question_number2 = "<h4>"+"Area of a circle: " + answer3 +"</h4>";
    document.getElementById("output3").innerHTML = question_number2;

    answer3_1 =2 * 3.1416 * parseInt(input6);
question_number2_1 = "<h4>"+"Circumference of a circle: " + answer3_1 +"</h4>";
document.getElementById("output3.1").innerHTML = question_number2_1;
}



function Volume_of_sphere(){
    window.location="volume_of_sphere.html";
}

function Calculate4(){
    input7 = document.getElementById("input7").value;
answer4 = (4/3) * 3.1416 * (parseInt(input7)* parseInt(input7)* parseInt(input7));

question_number3 = "<h4>"+"Volume of a sphere: " + answer4 +"</h4>";
document.getElementById("output4").innerHTML = question_number3;
}

function home(){
    window.location="index.html";   
}