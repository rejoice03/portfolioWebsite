function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle("active"); 
}

const inputs = document.querySelectorAll(".input")

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}
inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

$("#form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxcpdM2MhId7ARJNz0pf1l72W6hDWxBskNMKLvCjQgG1tYS1oM5Z_RZXWz6w78VVVwO/exec",
        data:$("#form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})