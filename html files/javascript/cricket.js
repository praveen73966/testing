let players =[
    {
        player_id:07,
        player_photo:"https://i.pinimg.com/564x/2b/ee/1a/2bee1ac1d0cbcdeb429151feb4627ea3.jpg",
        player_name:"MS.DHONI",
        player_city:"RANCHI",   
    },
    {
        player_id:18,
        player_photo:"https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/virat_kohli_660_040221083103.jpg",
        player_name:"VIRAT KOHLI",
        player_city:"DELHI",   
    },  
    {
        player_id:45,
        player_photo:"https://english.cdn.zeenews.com/sites/default/files/2020/06/14/866648-rohitsharmatwitter.jpg",
        player_name:"ROHITH SHARMA",
        player_city:"VIZAG",   
    },     
];

let output="";

for(let cri of players){
    output +=`
    <section>
    <article>
    <div>
    <img src=${cri.player_photo} alt=${cri.player_name}/>
    <h2>Name:${cri.player_name}</h2>
    <p>Jersey No:${cri.player_id}</p>
    <p>City:${cri.player_city}</p>
    </div>
    </article>
    </section>
    `;
}
console.log(output);
document.write(output);