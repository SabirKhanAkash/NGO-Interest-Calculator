function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;

    var year = new Date().getFullYear()+parseInt(years);

    if(principal<=0)
        alert('Enter a positive number please!');
    else
    {
        var output = "If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";
        document.getElementById("result").innerHTML=output;
    }
    
    
}

function updateRate()
    {
        var rateVal = document.getElementById("rate").value;
        console.log(rateVal);
        document.getElementById("rate_val").innerText=rateVal;
    }
        