
var input=document.getElementById("user")
input.addEventListener("focusout",function ()
{
    var span=document.getElementById("vun")
    var input1=document.getElementById("user").value

    if(  !isNaN(input1)&& input1=="")
    {
        span.style.visibility="visible"
        span.textContent="Invalid username!!!!"
        span.style.color="red"
    }
    
    else
    {
        span.style.visibility="visible"
        span.textContent="valid username"
        span.style.color="green" 
    }
})

function email1()
{
    var span1=document.getElementById("em")
    var input1=document.getElementById("email").value
    if( !isNaN (input1))
    {
        span1.style.visibility="visible"
        span1.textContent="Invalid Email!!!!"
        span1.style.color="red"
    }
    else
    {
        span1.style.visibility="visible"
        span1.textContent="valid Email"
        span1.style.color="green" 
    }
}
function np1()
{
    var span2=document.getElementById("np")
    var input2=document.getElementById("pass").value
    if( input2.length<=7)
    {
        span2.style.visibility="visible"
        span2.textContent="Invalid password!!!!"
        span2.style.color="red"
    }
    else
    {
        span2.style.visibility="visible"
        span2.textContent="valid password"
        span2.style.color="green" 
    }
}




var input3=document.getElementById("pass1")
input3.addEventListener("focusout",function cp1()
{
    var input2=String(document.getElementById("pass").value)

    // var passs=document.getElementById("pass").value
    var span3=document.getElementById("cp")
    var input3=String(document.getElementById("pass1").value)
    if( input2!=input3)
    {
        span3.style.visibility="visible"
        span3.textContent="Invalid password!!!!"
        span3.style.color="red"
    }
    else
    {
        span3.style.visibility="visible"
        span3.textContent="valid password"
        span3.style.color="green" 
    }
})


