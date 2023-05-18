

function formSubmit()
{
    var formName = document.getElementById('name').value;
    var formEmail= document.getElementById('email').value;
    var formCreditcard= document.getElementById('creditcard').value;
    var formMonth= document.getElementById('month').value;
    var formYear= document.getElementById('year').value;
    var formItems= document.getElementById('items').value;
    var formItemsno= document.getElementById('itemsno').value;





   if(!formName)
    {
        errors+= 'please provide name'
    }
if(!formEmail)
{ 
    errors+='Please provide the email'
}

var creditcardRegex = /^[0-9][0-9][0-9][0-9]\s[0-9][0-9][0-9][0-9]\s[0-9][0-9][0-9][0-9]\s[0-9][0-9][0-9][0-9]\s$/;
  if(!creditcardRegex.test(formCreditcard))
  {
    
    errors += 'credit card  should be of 16 charactors <br>';
  }

if(!formMonth)
{
    errors+='Please select month'
}    

if(!formYear)
{
    errors+='Please select year'
}
var errors='';
 
  


if(errors)
   {
    document.getElementById('errors').innerHTML = errors;

    document.getElementById('formResult').innerHTML = '';
   }
   else
     {

       var myOutput = 'Thank you! <br>';

       const itemprice = 100;
       var donat=itemprice * 0.1 ;
       var finalTotal=itemprice + donat;
    


    //if(final < donat )
   // {
   //     var total= donat;
   // }
   // else{

     //   donat = 10 ;
   // }

    //var finalTotal = parseInt(items) * itemprice;
    //var finalTotal

        myOutput += `
                Name        : ${formName} <br>
                Email       : ${formEmail} <br>
                creditcard  :${formCreditcard} <br>
                Items       :${formItems}<br>
                
                Total : $${finalTotal}
        `;
        document.getElementById('formResult').innerHTML = myOutput;
      }


     return false;   
}