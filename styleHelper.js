let a = 0;
export function changeBgColor(color){
    if(a == 0){
        document.body.style.backgroundColor = color;
        a = 1;
    }else{
        document.body.style.backgroundColor = "#ffffff";
        a = 0;
    }
}

let b = 0;
export function toggleTextSize(){
    if(b == 0){
        document.body.style.fontSize = "20px";
        b = 1;
    }else{
        document.body.style.fontSize = "10px";
        b = 0;
    }
}
