var sts= document.querySelector("h5")
var btn = document.querySelector("#add")

var flag = 0
btn.addEventListener("click",function(){
    if(flag == 0){
        sts.innerHTML = "236"
        btn.innerHTML = "Unfollow"
        flag = 1
    }else {
        sts.innerHTML = "235K"
        btn.innerHTML = "Follow"
        flag = 0
    }
})

var con = document.querySelector("#love")
var lov = document.querySelector("#new12")
var rd = document.querySelector("#red")
var lik = document.querySelector("#likes")
var rd1 = document.querySelector("#red1")
var slag = 0
con.addEventListener("dblclick",function(){
   lov.style.transform = 'translate(-50%,-50%) scale(1)'
   setTimeout(function(){
    lov.style.transform = 'translate(-50%,-50%) scale(0)'
   },800)
   if(slag == 0){
    rd.style.color = "red"
    rd1.style.display= "none"
    slag = 1
   }else {
    rd.style.backgroundColor = "transperant"
    slag = 0
   }
})