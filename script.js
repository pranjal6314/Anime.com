//  Created div for highLighter
const highLighter = document.createElement("div");

// created div for arrow
const arrow = document.createElement("div"); 

// getting 
const nav = document.querySelector("nav");

// Inserted this highLighter & arrow inside navBar
nav.appendChild(highLighter);
nav.appendChild(arrow);

// add class highLighter & arrow to highLighter box
highLighter.classList.add("highLighter");
arrow.classList.add("arrow");


// selecting  navBoxes
const a1 = document.getElementById("a");
const a2 = document.getElementById("b");
const a3 = document.getElementById("c");
const a4 = document.getElementById("d");
const a5 = document.getElementById("e");

// Now applying eventListner to this boxes

a1.addEventListener("mouseover",()=>{

    // now as we hover on this a1 apply this style to highLighter element
    highLighter.style.transform = "translateX(-28vw)";
    arrow.style.transform = "translateX(-28vw)";

    a1.style.color = "crimson";
    a2.style.color = "black";
    a3.style.color = "black";
    a4.style.color = "black";
    a5.style.color = "black";
});

a2.addEventListener("mouseover",()=>{

    // now as we hover on this a2 apply this style to highLighter element
    highLighter.style.transform = "translateX(-14vw)";
    arrow.style.transform = "translateX(-14vw)";

    a1.style.color = "black";
    a2.style.color = "crimson";
    a3.style.color = "black";
    a4.style.color = "black";
    a5.style.color = "black";
});

a3.addEventListener("mouseover",()=>{

    // now as we hover on this a3 apply this style to highLighter element
    highLighter.style.transform = "translateX(0vw)";
    arrow.style.transform = "translateX(0vw)";

    a1.style.color = "black";
    a2.style.color = "black";
    a3.style.color = "crimson";
    a4.style.color = "black";
    a5.style.color = "black";
});

a4.addEventListener("mouseover",()=>{

    // now as we hover on this a4 apply this style to highLighter element
    highLighter.style.transform = "translateX(14vw)";
    arrow.style.transform = "translateX(14vw)";

    a1.style.color = "black";
    a2.style.color = "black";
    a3.style.color = "black";
    a4.style.color = "crimson";
    a5.style.color = "black";
});

a5.addEventListener("mouseover",()=>{

    // now as we hover on this a5 apply this style to highLighter element
    highLighter.style.transform = "translateX(28vw)";
    arrow.style.transform = "translateX(28vw)";

    a1.style.color = "black";
    a2.style.color = "black";
    a3.style.color = "black";
    a4.style.color = "black";
    a5.style.color = "crimson";
});


//  API CALL

let root = document.getElementById("animesBox");

fetch('https://anime-facts-rest-api.herokuapp.com/api/v1').then(Response=>Response.json()).then(json=>{
    print(json.data);
    console.log(json)

})
;

function print(data){

    data.forEach(element => {
       
        const{anime_id,anime_img,anime_name} = element;
        
            
        

        const box = document.createElement('div');

        box.classList.add("aBox");
        if(element.anime_id!=4){
        box.innerHTML = `
        
            <img src="${anime_img}" alt="..animeImges">
            <a href="./AnimeDet.html?name=${anime_name}" target="_blank"><h2>${anime_name}</h2></a> 
            
            
          `;}
          else{
            box.innerHTML=`
            <img src="404(2).jpg" alt="..animeImges">
            <a ><h2>${anime_name}</h2></a> 
            `
          }
        // console.log(anime_name);

        root.appendChild(box);

        box.onclick=()=>{
            console.log("onclick")
            // abc();
        }


        

    });
}


{/* <div class="overview">
                    
                    <h3></h3>
                            
                </div>   */}