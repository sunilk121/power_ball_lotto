//let lottoentry=[]

const enteryElm= document.getElementById("entry");
const pwElm= document.getElementById("pw");

const randomnumber=max=>
{
 return Math.floor(Math.random()*max+1);
};


const handleOnclick=()=>
{
    let lottoEntry=[];
    
    for (let i=0;lottoEntry.length<7;i++)
{
    const numb=randomnumber(35);
    if(!lottoEntry.includes(numb)) lottoEntry.push(numb);
    

}


enteryElm.innerText=lottoEntry;

pwElm.innerText=randomnumber(20);
}




