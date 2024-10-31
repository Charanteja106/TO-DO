const menuBtn = document.querySelector(".menu-btn")
const menuBar = document.querySelector(".menu-bar")
const addTask = document.querySelector(".add-task")
const taskList = document.querySelector(".task-container")
const inputTask = document.querySelector(".input-bar")

menuBtn.addEventListener("click", () =>{
    menuBar.classList.toggle('active')
    menuBar.style.color ="black"
})



addTask.addEventListener("click", () => {

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerHTML =`${inputTask.value}`;
    task.appendChild(li);
    if(inputTask.value ===""){
        alert("Please Enter a task")
    } else{
        taskList.appendChild(task)
    }

    let completeButton = document.createElement('button')
    completeButton.textContent='Complete'
    completeButton.style.padding = "10px"
    completeButton.style.fontSize = "16px"

    completeButton.addEventListener("click" , () => {
        li.classList.toggle('task-complete');
    });

    li.appendChild(completeButton);

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
    deleteButton.style.padding = '10px'
    deleteButton.style.fontSize = "20px"

    deleteButton.addEventListener('click' , () => {
        taskList.removeChild(li);
    });


    li.appendChild(deleteButton);
    taskList.appendChild(li);

})


//.........MenuBar-Heads.........

let links = document.querySelectorAll('li a')



for (let link of links){
    link.addEventListener('click' , () =>{
        let  sections = document.getElementsByTagName("section")
        for (let section of sections){
            if("#" + section.id === link.getAttribute("href")){
                section.style.display = "block";
            } else{ 
                section.style.display = 'none'
            }
        }
    });
}


// ....1



// // //  ......2


let Res2 = document.querySelector("#navbar-2")

function myF2(){
    Res2.style.background = "black"
}

// ...3

let Res3 = document.querySelector("#navbar-3")

function myF3(){
    Res3.style.background = "lightblue"
}

//....4

let Res4 = document.querySelector("#navbar-4")

function myF4(){
    Res4.style.background = "hotpink"
}

//......5

let Res5 = document.querySelector("#navbar-5")

function myF5(){
    Res5.style.background = "rgb(14, 128, 128)"
}

//....6

let Res6 = document.querySelector("#navbar-6")
function myF6(){  
    Res6.style.background = "lightsalmon"
}


// ....themes.....
const BGColor=document.querySelector('.bg-color')
const BGcontainer = document.querySelector('.color-container')

BGColor.addEventListener('click', () =>{
    BGcontainer.classList.toggle('active')
    // BGcontainer.style.display='block'
})
// 
const Theme1 = document.querySelector(".color-1")
const Nav2 = document.querySelector(".nav2")


function mytheme1(){
    document.body.style.background = "lightcoral"
}
function mytheme2(){
    document.body.style.background = "darkslategray"
}
function mytheme3(){
    document.body.style.background = "greenyellow"
    Nav2.style.color = "black"
}
function mytheme4(){
    document.body.style.background = "bisque"
    Nav2.style.color = "black"
}
function mytheme5(){
    document.body.style.background = "blueviolet"
    Nav2.style.color = "white"
}
function mytheme6(){
    document.body.style.background = "darkblue"
    Nav2.style.color = "#ddd"
}

function wallpaper1(){
    document.body.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpa-OPGCHyX-GPQRrwoR289o79lh94R-ERw&s") ';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "550%";
}
function wallpaper2(){
    document.body.style.backgroundImage = 'url("https://img.freepik.com/premium-photo/beautiful-lakes-mountains-artwork_1194790-180.jpg?semt=ais_hybrid") ';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "550%";
}
function wallpaper3(){
    document.body.style.backgroundImage = 'url("https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?semt=ais_hybrid") ';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "550%";
}


// login-page

const HeadPage = document.querySelector('.page')
const SigninBtn = document.querySelector('.sign-in')




SigninBtn.addEventListener("click", () =>{
    HeadPage.classList.toggle('active')
})









