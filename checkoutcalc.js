//finds the value associated with the key param from the URL 
function getUrlParamArray(param)
{
  param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
  var value = [];
  var regex = new RegExp("[?&]" + param + "=([^&#]*)", "g");
  var url   = decodeURIComponent(window.location.href);
  var match = null;
  while (match = regex.exec(url)) {
    value.push(match[1]);
  }
  return value;
}

//calculates the cost from how the pizza is customized
function costCalc(){
    var cost = 0;
    switch(getUrlParamArray("size").toString()) {
        case "6\"":
            cost += 15;
            break;
        case "9\"":
            cost += 30;
            break;
        case "12\"":
            cost += 50;
            break;
        default:
            cost += 9999;
    }

    switch(getUrlParamArray("cheese").toString()) {
        case "ncheese":
            cost += 2;
            break;
        case "echeese":
            cost += 4;
            break;
        case "e2cheese":
            cost += 5;
            break;
        default:
            cost += 9999;
    }

    switch(getUrlParamArray("crust").toString()) {
        case "ncrust":
        case "nycrust":
            break;
        case "cbcrust":
        case "bbqcrust":
            cost += 5;
            break;
        default:
            cost += 9999;
    }
    return cost;
}

//Array of times ahead of the current time in 15 minute intervals
function timeArray(){
    var today = new Date();
    var tArray = [];
    for(var i = 0; i< 10; i++){
        var future = new Date(today.getTime() + 15*60000*[i+1]); //adds 15 minutes and 15 additional 
        //minutes each iteration 
        tArray[i]= future.toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric"});
    }
    return tArray;
}

//Inputs the values into the table
table = document.getElementById("table");
table.rows[0].cells[0].innerHTML = ""+ getUrlParamArray("size") + " Pizza with "
+ getUrlParamArray("cheese")+ " cheese and " + getUrlParamArray("crust")+" crust";

table.rows[0].cells[1].innerHTML = "RM" + costCalc() +".00";
//adds a value to the total
document.getElementById("total").innerHTML="RM" + costCalc() +".00";

//finds the select element
var dtime = document.getElementById("dtime");
//gets the array of time
tArray = timeArray();
//populates the select element
for(var i = 0; i < tArray.length; i++){
    var option = document.createElement("OPTION"),
    txt = document.createTextNode(tArray[i]);
    option.appendChild(txt);
    option.setAttribute("value",tArray[i]);
    dtime.insertBefore(option,dtime.lastChild);
}