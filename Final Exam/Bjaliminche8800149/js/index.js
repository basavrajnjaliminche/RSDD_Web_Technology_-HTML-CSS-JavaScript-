function formSubmit()
{
    var formName = document.getElementById('name').value;
    var formEmail= document.getElementById('email').value;
    var formWords= document.getElementById('words').value;
    var formOpinion= document.getElementById('opinion').value;
    var formMonth = document.getElementById('month').value;
    var formYear= document.getElementById('year').value;
    var formItems= document.getElementById('items').value;
    var formItemsno= document.getElementById('itemsno').value;
    var formSize= document.getElementById('size').value;
    

    if(!formName)
    {
        errors+= 'please provide name'
    }

    if(!formEmail)
     {
    errors+='Please provide the email'
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

    myOutput += `
                Name        : ${formName} <br>
                Email       : ${formEmail} <br>
                feedback    : ${formWords}<br>
                Opinion   : ${formOpinion}<br>

                Mobnth of Buying    : ${formMonth}<br>
                Year of Buying    : ${formYear}<br>
                Most Likes shoe    : ${formItems}<br>
                How Many times bought nike shoes   : ${formItemsno}<br>
                Shoe Size : ${formSize}<br>


                
        `;
        document.getElementById('formResult').innerHTML = myOutput;
     }

return false; 
}