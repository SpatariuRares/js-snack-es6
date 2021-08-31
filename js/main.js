/*
let bici =[
    {
        nome:"ciao",
        peso:20
    },
    {
        nome:"fd",
        peso:5
    },
    {
        nome:"fsd",
        peso:4
    },
    {
        nome:"cigfdao",
        peso:6
    },
    {
        nome:"as",
        peso:7
    },
]
let temp=bici[0];
for(let i in bici){
    if(bici[i].peso<temp.peso){
        temp=bici[i];
    }
}
const {nome,peso} = temp;
console.log(`${peso},${nome} 
ciao`);

*/

let squadre=[
    {
        nome:"napoli",
        puntifatti:0,
        fallisubiti:0
    },
    {
        nome:"juve",
        puntifatti:0,
        fallisubiti:0
    },
    {
        nome:"milan",
        puntifatti:0,
        fallisubiti:0
    },
    {
        nome:"inter",
        puntifatti:0,
        fallisubiti:0
    },
    {
        nome:"lazio",
        puntifatti:0,
        fallisubiti:0
    },
    {
        nome:"roma",
        puntifatti:0,
        fallisubiti:0
    },
    {
        nome:"bologna",
        puntifatti:0,
        fallisubiti:0
    },
]
random();
let narray=[]
for(let i in squadre){
    let {nome,fallisubiti} = squadre[i];
    narray.push({
        nome,
        fallisubiti
    })
}
console.log(narray);
function random(){
    for(let i in squadre){
        squadre[i].fallisubiti=Math.floor(Math.random()*100)+1;
        squadre[i].puntifatti=Math.floor(Math.random()*100)+1;
    }
}
