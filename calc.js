window.addEventListener("DOMContentLoaded", e => {
    let a = [];
    let b = [];
    let operation = null;
    let first = true;
    let finish = false;
    let result = 0;
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("click", e => {
            let num = e.target;
            let numId = num.id;
            if(numId == "display")
            {
                console.log("display");
            }
            else{
                if(first)
            {
                a.push(numId);
            }
            else
            {
                b.push(numId)
            }
            aMerge = a.join("");
            bMerge = b.join("");
            if(numId == "÷" || numId == "×" || numId == "-" || numId == "+")
            {
                aMerge = a.pop();
                aMerge = a.join("");
                first = false;
                operation = numId;
            }
            else if (numId == "cancella"){
                if(aMerge == "0") {
                    console.log("cancella");
                }
                else {
                    if (first) {
                        aMerge = a.pop();
                        aMerge = a.pop();
                        aMerge = a.join("");
                    }
                    else if(first == false) {
                        bMerge = b.pop();
                        bMerge = b.pop();
                        bMerge = b.join("");
                    }
                }
            }
            else if(numId == "=")
            {
                bMerge = b.pop(); 
                bMerge = b.join("");
                finish = true;
                console.log(aMerge);
                console.log(bMerge);
                if(operation == "÷")
                {
                    result = Number(aMerge) / Number(bMerge);
                }
                if(operation == "×")
                {
                    result = Number(aMerge) * Number(bMerge);
                }
                if(operation == "-")
                {
                    result = Number(aMerge) - Number(bMerge);
                }
                if(operation == "+")
                {
                    result = Number(aMerge) + Number(bMerge);
                }
            }
            if(finish)
            {
                document.getElementById("display").innerText = result;
            }
            else
            {
                if(operation != null)
                {
                    document.getElementById("display").innerText = aMerge + operation + bMerge;
                }
                else
                {
                    document.getElementById("display").innerText = aMerge + bMerge;
                }
            }
            if(numId == "svuota")
            {
                clear();
            }
            if(numId == "cancella")
            {
                
            }
            function clear()
            {
                a = [];
                b = [];
                aMerge = [];
                bMerge = [];
                operation = null;
                first = true;
                finish = false;
                result = 0;
                document.getElementById("display").innerText = "0";
            }
            }
            
        });
    });
});