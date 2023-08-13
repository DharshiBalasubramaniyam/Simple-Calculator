let isOn = false;
let display2 = document.getElementById("display2");
let display1 = document.getElementById("display1");

function show(e) {
    if (display1.value == "0") {
          display1.value = "";
    }
    if (isOn) {
          display1.value += e.textContent;
    }
    else {
          display1.value = "";
    }
            
}

function allClear() {
        display1.value = "0";
        display2.value = "";
}
        
function calculate() {
        if (isOn) {
          display2.value = "=" + eval(display1.value);
        }
        else {
          display1.value = "";
        }
}

function del() {
        let text = display1.value;
        console.log("hi");
        display2.value = "";
        if (display1.value!="0") {
            display1.value = text.substring(0, text.length-1);
        }
            
}

function onCalculater(e) {
        isOn = true;
        display1.value = "0";
}
