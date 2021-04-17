function getTimeReamaining(endtime){
    const total=Date.parse(endtime)-Date.parse(new Date());
    const seconds=Math.floor((total/1000)%60);
    const Minutes=Math.floor((total/1000/60)%60);
    const hours=Math.floor((total/(1000*60*60))%24);
    const days=Math.floor(total/(1000*60*60*24));
    return{
        total,
        days,
        hours,Minutes,seconds
    };
}
document.write(getTimeReamaining);