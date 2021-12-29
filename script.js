let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let errorShow = document.querySelector("#error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let name =  document.querySelector("#name");
    if(document.querySelector("#lname").value && document.querySelector("#lname").value) {
        name.innerText = fname + " " + lname;
        document.querySelector("#fname").value = "";
        document.querySelector("#lname").value = "";
        form.classList.add("active");
        setTimeout(() => {
            modal.style.display = "none";
        },300);
        setTimeout(() => {
            document.querySelector(".year ul li:first-child").
            style.top = "0px";
        },1000);
        setTimeout(() => {
            document.querySelector(".year ul li:nth-child(2)").
            style.top = "30px";
            setTimeout(() => {
                document.querySelector(".year ul li:nth-child(2)").
                style.transform = "rotateZ(-30deg)";
            },500);
        },2000);
        setTimeout(() => {
            document.querySelector(".year ul li:nth-child(3)").
            style.top = "0px";
        },3000);
        setTimeout(() => {
            document.querySelector(".year ul li:last-child").
            style.top = "20px";
        },4000);
    } else {
        errorShow.classList.add("active");
        form.classList.add("error");
        setTimeout(() => {
            form.classList.remove("error");
        },300)
    }
    
})