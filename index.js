function about(){
    var x=document.getElementById("about_box");
    if(x.style.display=="none"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}
function projects(){
    var x=document.getElementById("project_box");
    if(x.style.display=="none"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}
function resume(){
    var x=document.getElementById("resume_box");
    if(x.style.display=="none"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}
function contact(){
    var x=document.getElementById("contact_box");
    if(x.style.display=="none"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}
function sendMail(){
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("msg").value,
    };
    const serviceID="service_phfg7a6"
    const tempelateID="template_p64ac48"

    emailjs
        .send(serviceID,tempelateID,params)
        .then((res)=>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("msg").value="";
            console.log(res);
            alert("Your message sent successfully! :)");
        })
        .catch((err)=>console.log(err));
}