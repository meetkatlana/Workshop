// validation
let form = document.getElementById("tripform");
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let name=document.querySelector("#name").value.trim();
    let age=document.querySelector("#age").value.trim();
    let email=document.querySelector("#email").value.trim();
    let gender=document.querySelector("#gender").value.trim();
    let description=document.querySelector("#desc").value.trim();

    if(!name || !age || !email || !gender || !description){
        alert("all fields are required");
        return;
    }
})

