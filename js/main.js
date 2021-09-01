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
] */
/*
const temp = (bici) => {
    let v=bici[0];
    for(let i in bici){
        if(bici[i].peso<v.peso){
            v=bici[i];
        }
    }
    return v;
}
console.log(temp(bici));*/
/*
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

/*
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
*/

let array1=[1,2,3,4,5,6,7,8,9,10];
let a=4;
let b=6;

const array2 = array1.filter((element,index) => {
    if(index>=a && index<=b) return true;
    return false;
});
console.log(array2);