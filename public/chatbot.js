function firstMessage(){
    let firstText="Hi !! Do you need any help?Hi !! Do you need any help?Hi !! Do you need any help?Hi !! Do you need any help?Hi !! Do you need any help?Hi !! Do you need any help?Hi !! Do you need any help?";
    var box=document.querySelector('.chat-area');
    var botTextFirst=document.createElement('div');
    var firstMess=document.createElement('p');
    var op1=document.createElement('button');
    var op2=document.createElement('button');

    var op1Text="yes";
    var op2Text="no";

    
    botTextFirst.classList.add('botMessage');
    firstMess.classList.add('botText');
    firstMess.innerHTML=firstText;
    box.appendChild(botTextFirst);
    op1.classList.add('options');
    op2.classList.add('options');

    op1.classList.add('yes');
    op2.classList.add('no');
    botTextFirst.appendChild(firstMess);
    botTextFirst.appendChild(op2);
    botTextFirst.appendChild(op1);

    op1.innerText=op1Text;
    op2.innerText=op2Text;



    // time
    let time=msgTime();
    var timespanbot=document.createElement('span');
    timespanbot.classList.add('timespanbot');
    timespanbot.innerHTML=time;
    firstMess.appendChild(timespanbot);
}
firstMessage();

function msgTime(){
    var date= new Date();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    if(hours<10){
      hours="0"+hours;
    }
    if(minutes<10){
      minutes="0"+minutes;
    }
    let time= hours+":"+minutes;
    console.log(time);
    return time;
}


function response(text,req){
    var res = document.createElement('div');
    var outerres = document.createElement('div');
    var requestClick=document.createElement('div');
    requestClick.classList.add('userText');
    
    outerres.classList.add('botMessage')
    res.classList.add('botText');
    var element=document.querySelector('.chat-area');
    requestClick.innerHTML=req;
    element.appendChild(requestClick);
    outerres.appendChild(res);
    res.innerHTML=text;
    setTimeout(function(){
        element.appendChild(outerres);
    },3000);
    
    var op1=document.createElement('button');
    var op2=document.createElement('button');
    var op3=document.createElement('button');

    op1.classList.add('options');
    op2.classList.add('options');
    op3.classList.add('options');

    outerres.appendChild(op2);
    outerres.appendChild(op1);
    outerres.appendChild(op3);

    op1.innerText="contact";
    op2.innerText="email";    
    op2.innerText="company services";    


    op1.classList.add('contact');
    op2.classList.add('emiail');    
    op2.classList.add('companyServices');    

}









// REPLIES
responseText1();
function responseText1(option){
     var yes=document.querySelector('.yes');
     var no=document.querySelector('.no');

     var text="old text";
     yes.addEventListener('click',()=>{
        response("How can i help you","Yes");
        yes.disabled = true;
        no.disabled = true;
     })
     no.addEventListener('click',()=>{
        response("Thank you for contacting us","No");
        yes.disabled = true;
        no.disabled = true;
     })
     console.log('hello');
     console.log(text);
    //  return text;
}