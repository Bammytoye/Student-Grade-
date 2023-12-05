function getGrade(){

    let a = parseInt(document.getElementById("Business-Policy").value);
    let b = parseInt(document.getElementById("Quantitative").value);
    let c = parseInt(document.getElementById("Cost-Accounting").value);
    let d = parseInt(document.getElementById("Intro-Business").value);
    let e = parseInt(document.getElementById("Management-Theory").value);

    if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100){
        alert ("🧑‍💻Zeke said, you must enter your correct scores")
    } else {
        let obtained = a + b + c + d + e;
        document.getElementById("obt").innerHTML = obtained;

        let percent = obtained/500 * 100;
        document.getElementById("per").innerHTML = percent + "%";
        
        if (percent < 50){
            document.getElementById("grade").innerHTML = "F"
        }
        else if (percent > 50 && percent < 60) {
            document.getElementById("grade").innerHTML = "C";
        }
        else if (percent > 60 && percent < 69) {
            document.getElementById("grade").innerHTML = "B";
        }
        else if (percent > 70 && percent < 100) {
            document.getElementById("grade").innerHTML = "A";
        }
        
    } 
} 

