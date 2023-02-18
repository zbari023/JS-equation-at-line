
function calcSum(){
    let In1 = document.getElementById("input1").value;
    let In2 = document.getElementById("input2").value;
    let In3 = document.getElementById("input3").value;
    let Output = (Number(In1) - Number(In3))/Number(In2);
    document.getElementById("m=").value = Output;
    }

