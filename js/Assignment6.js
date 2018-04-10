//Menu
function MenuChoice()
{
    
    if (document.getElementById("menu").value == "Add customer to database")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Change customer's shipping address")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Delete customer from database")
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

//Add customer to database
function CreateCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    
    //Collect customer data from section 1
    var customerid = document.getElementById("custid").value;
    var customername = document.getElementById("custname").value;
    var customercity = document.getElementById("custcity").value;
    
    //Parameter string
    var newcustomer = '{"CustomerID":"'+customerid+'","CompanyName":"'+customername+'","City":"'+customercity+'"}';
    
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
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(newcustomer);
}

function OperationResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result").innerHTML = "The operation was successful!"
    }
    else
    {
        document.getElementById("result").innerHTML = "The operation was not succesful!" + "<br>" + output.Exception;
    }
}

//Change customer shipping address
function ChangeShippingAddress()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
    
    //Collect shipping data from section 2
    var customerordernumber = document.getElementById("custordernumber").value;
    var customername2 = document.getElementById("custname2").value;
    var customerstreetaddress = document.getElementById("custstreetaddress").value;
    var customercity2 = document.getElementById("custcity2").value;
    var customerpostalcode = document.getElementById("custpostalcode").value;
    
    //Parameter string
    var newshippingaddress = '{"OrderID":"'+customerordernumber+'","ShipName":"'+customername2+'","ShipAddress":"'+customerstreetaddress+'","ShipCity":"'+customercity2+'","ShipPostcode":"'+customerpostalcode+'"}';
    
    //Checking AJAX operation return
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result2 = JSON.parse(objRequest.responseText);
            OperationResult2(result2);
        }
    }
    
    //Start AJAX request
    objRequest.open("POST",url,true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(newshippingaddress);
}

function OperationResult2(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result2").innerHTML = "The operation was successful!"
    }
    else
    {
        document.getElementById("result2").innerHTML = "The operation was not succesful!" + "<br>" + output.Exception;
    }
}

//Delete customer from database
function DeleteCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
    url += document.getElementById("custid2").value;
    
    //Checking AJAX operation return
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result3 = JSON.parse(objRequest.responseText);
            OperationResult3(result3);
        }
    }
    
    //Start AJAX request
    objRequest.open("GET",url,true);
    objRequest.send();
}

function OperationResult3(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result3").innerHTML = "The operation was successful!"
    }
    else
    {
        document.getElementById("result3").innerHTML = "The operation was not succesful!" + "<br>" + output.Exception;
    }
}
