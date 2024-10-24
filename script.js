const Input = document.querySelector(".input");
const resetKey = document.querySelector(".reset-key");
const answerKey = document.querySelector(".answer-key");
const deleteKey = document.querySelector(".delete-key");
const keys = document.querySelectorAll(".key");

const keysArray = Array.from(keys);

const keyClickHander = (event) => {
    console.log("keyClicked: ", event.target.innerText);
  
    const value = event.target.innerText;
  
    if (value === "." && decimalAdded) {
      
      return;
    }
  
    if ("+-x/".includes(value)) {
         if (lastKeyIsOperator) {
        initalValue = Input.value;
        updatedValue = initalValue.substring(0, initalValue.length - 1) + value;
        console.log(updatedValue);
        Input.value = updatedValue;
        return;
      }
  
      lastKeyIsOperator = true; 
      decimalAdded = false; 
    } else {
     
      lastKeyIsOperator = false; 
  
      if (value === ".") {
        decimalAdded = true;
      }
    }
  
    Input.value += value; 
    Input.scrollLeft = Input.scrollWidth;
  };
  
  const resetHandler = () => {
    console.log("Reset Clicked");
    Input.value = "";
  };
  
  const deleteHandler = () => {
    console.log("Delete Clicked");
    initalValue = Input.value;
    updatedValue = initalValue.substring(0, initalValue.length - 1);
    Input.value = updatedValue;
  };
  
  const expressionHandler = (expression) => {
    console.log("Inside expression handler");
  
    
    const formattedExpression = expression.replace(/x/g, "*");//for bodmas
  
    
    const result = eval(formattedExpression);
  
    return result;
  };
  
  const answerHandler = () => {
    console.log("answerClicked");
  
    
    const expression = Input.value;
    const result = expressionHandler(expression);
    Input.value = result;
  };
  
  keysArray.forEach((key) => key.addEventListener("click", keyClickHander));
  resetKey.addEventListener("click", resetHandler);
  deleteKey.addEventListener("click", deleteHandler);
  answerKey.addEventListener("click", answerHandler);
  