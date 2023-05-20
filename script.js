let string = "";
let buttons = document.querySelectorAll("button")
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        // show result when user clicked =
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("textarea").innerText = string;
        }
        // clears full calculation
        else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector("textarea").innerText = string;
        }
        // removes last element using slice method
        else if(e.target.innerHTML == "←"){
            string = string.slice(0,-1)
            document.querySelector("textarea").innerText = string;
        }
        else{
            string = string + e.target.innerText;
            document.querySelector("textarea").innerText = string;
        }
    })
})