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