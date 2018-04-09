//Add customer to database
function CreateCustomer()
{
    var objRequest=new XMLHttpRequest();
    var url ="https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    
    //Collect customer data from section 1
    var customerid = document.getElementById("custid").value;
    var customername = document.getElementById("custname").value;
    var customercity = document.getElementById("custcity").value;
    
    //Parameter string
    var newcustomer = '{"CustomerID":"'+customerid+'","CompanyName":"'+customername+'"}';
    
    //Checking AJAX operation return
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);
        }      
    }
    
    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type","application./x-www-form-urlencoded");
    objRequest.send(newcustomer)
}

function OperationResult(output)
{
    if (output.WasSucccesful==1)
    {
        document.getElementById("result").innerHTML="The operation was successful!"
    }
    
    else
    {
        document.getElementById("result").innerHTML="The operation was not succesful!"+"<br>"+output.Exception;
    }
}

//Menu
function MenuChoice()
{
    
    if (document.getElementById("menu").value == "Add customer to database")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Change a customer's shipping address")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Delete a customer from database")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "visible";
    }
    else
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
}