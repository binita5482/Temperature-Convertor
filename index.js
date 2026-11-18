
const celsious = document.getElementById("celsious")
const fahrenheit = document.getElementById("fahrenheit")
const kelvin = document.getElementById("kelvin")


function computeTemp(event){
   const currentValue = +event.target.value 

   //computation of temperature conversion
   switch(event.target.name){
    case "celsious":
            kelvin.value = (currentValue + 273.15).toFixed(2) 
            fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2) 
            break;
        
        case "fahrenheit":
            celsious.value = ((currentValue - 32) / 1.8).toFixed(2)   
            kelvin.value = ((currentValue - 32) * 5/9 + 273.15).toFixed(2)
            break;

        case "kelvin":
            celsious.value = (currentValue - 273.15).toFixed(2)
            fahrenheit.value = ((currentValue - 273.15)*1.8 + 32).toFixed(2)
            break;

        default:
            break;    
    } 
}