window.onload = () => 
{
    let button = document.querySelector("#btn");
  
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI()
 {
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");

    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    {
  
        if (bmi < 18.5) 
        result.innerHTML ="Under Weight" ;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
        result.innerHTML = "Normal ";
  
        else if(bmi > 25 && bmi< 29.9 )
         result.innerHTML ="Over Weight";

        else if(bmi>=30)
         result.innerHTML ="obese";
         
        else if(bmi>30 && bmi <34.9)
         result.innerHTML ="obese class I"
        
        else if(bmi>35 && bmi <39.9)
         result.innerHTML ="obese class II"

        else
         result.innerHTML ="obese class III"
    }
}











