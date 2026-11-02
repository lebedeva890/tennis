const change = document.getElementById("change")
change.addEventListener("click", change_all)

function change_all(){
     if(document.getElementsByTagName("div")[0].innerHTML==="Петров") {
         document.getElementsByTagName("div")[0].innerHTML = "Petrov"
         document.getElementsByTagName("div")[1].innerHTML = "Vitalii"
         document.getElementsByTagName("div")[2].innerHTML = "Aleksandrovich"
         document.getElementsByTagName("div")[3].innerHTML="Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15.05.2001"
         document.getElementsByTagName("div")[5].innerHTML="20.05.2015"
         document.getElementsByTagName("div")[6].innerHTML="GU MVD PO G.SOCHI"
         document.getElementsByTagName("div")[7].innerHTML="G.SOCHI"
         document.body.classList.add("zagran")
         document.body.style.backgroundImage = "url(image/zagran.jpg)"
     }
     else{
         document.getElementsByTagName("div")[0].innerHTML="Петров"
         document.getElementsByTagName("div")[1].innerHTML="Виталий"
         document.getElementsByTagName("div")[2].innerHTML="Александрович"
         document.getElementsByTagName("div")[3].innerHTML="Муж &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15.05.2001"
         document.getElementsByTagName("div")[5].innerHTML="20.05.2015&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;230-012"
         document.getElementsByTagName("div")[6].innerHTML="ГУ МВД ПО Г.СОЧИ"
         document.getElementsByTagName("div")[7].innerHTML="Г.СОЧИ"
         document.body.classList.remove("zagran")
         document.body.style.backgroundImage = "url(image/pass.jfif)"
     }
}

