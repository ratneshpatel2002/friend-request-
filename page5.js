
    
    var arr = [{
        name:"Rahul",
        image:"https://images.unsplash.com/photo-1596075780750-81249df16d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        desc: "a man of powerfull experience",
        status:"strangers",
    },{
        name:"Arpit",
        image:"https://images.unsplash.com/photo-1587397845856-e6cf49176c70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        desc:"good preson with a pure heart",
        status:"strangers",
    },{
        name:"Rajeev",
        image:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
        desc:" amazing man with a good personality",
        status:"strangers",
    },
    ];
   function print(){
     var container="";
  
     arr.forEach(function(person,index) {
       container +=`<div class="card w-52 p-4 rounded-md bg-zinc-700 text-white">
       <div class="img w-10 h-10 bg-red-500 rounded-full overflow-hidden">
           <img class="w-full h-full object-cover" src="${person.image}" alt="">
       </div>
       <h2 class="text-2xl mt-2">${person.name}</h2>
       <p class="xs mb-5"> ${person.desc}</p>
       <button id="${index}" class="btn py-3 px-3 text-xs ${person.status === "strangers" ? "bg-blue-500" : (person.status === "request sent" ? "bg-yellow-500" : "bg-red-500"
       )} rounded-md">${person.status === "strangers" ? "Add Friends" :(person.status === "request sent" ? "request sent" : "remove friends")}</button>
   </div>`;
   });
   
   document.querySelector(".cards").innerHTML= container;
}
print()



var cards =document.querySelector(".cards")
cards.addEventListener("click",function(e){
if (arr[e.target.id].status === "strangers") {
  arr[e.target.id].status ="request sent";

  var a = Math.floor(Math.random()*10)

   setTimeout(function(){
    arr[e.target.id].status="friends"
    print()
   },a*1000)

}
else  {
   arr[e.target.id].status="strangers"    
} 
    

 print();
});






