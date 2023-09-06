let 
output = document.querySelector(".container input"),
input = document.querySelectorAll(".container .number"),
Clear = document.querySelector(".container .clear"),
Delete = document.querySelector(".container .delete"),
Calc = document.querySelector(".container .calc");
input.forEach(e => e.addEventListener("click", e => {
    output.value += e.target.innerHTML;
    output.placeholder = "0";
}));
Clear.onclick = () => output.value = "";
Delete.onclick = () => output.value = output.value.slice(0,-1);
function calc(){
    if(output.value !== ""){
        try{output.value = eval(output.value)}
        catch{
            output.value = "";
            output.placeholder = "error";
        };
    };
};
Calc.onclick = () => calc();
document.addEventListener("keydown" , e => e.key == "Enter"?calc():output.placeholder = "0");