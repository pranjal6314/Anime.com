const arrName=['bleach','black_clover','dragon_ball','jujutsu_kaisen','fma_brotherhood','naruto','gintama','itachi_uchiha','one_piece','demon_slayer','attack_on_titan','hunter_x_hunter','boku_no_hero_academia'];
let root1 = document.getElementById("hr")

arrName.forEach(i=>{
    fetch('https://anime-facts-rest-api.herokuapp.com/api/v1/'+i).then(Response=>Response.json()).then(json=>{
    // console.log(json);
    print(json.data,json.img);
    
})
})

let root = document.getElementById("accordionExample")




function print(datas,img){
  
          
          
          
    datas.forEach(element => {
        const {fact_id,fact} = element;
      
        
        
       
        const box = document.createElement('div');
        box.classList.add("aBox");


        
        box.innerHTML = `

         
      
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Fact Number #${fact_id}
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              ${fact}
            </div>
          </div>
        </div>

            
          `;
          
          root.appendChild(box);
        

    })

}
