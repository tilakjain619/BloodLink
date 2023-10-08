document.querySelector(".signIn-btn").addEventListener("click",function(){
    document.querySelector(".signIn_Form_section").classList.add("formActive");
});
document.querySelector(".signIn_Form_section .close-btn").addEventListener("click",function(){
    document.querySelector(".signIn_Form_section").classList.remove("formActive");
});