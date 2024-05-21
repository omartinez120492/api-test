const data = [
    {
        name:"Goku",
        url: 'goku.jpeg'
    },
    {
        name:"Vegueta",
        url: 'vegueta.jpeg'
    },
    {
        name:"Trunks",
        url: 'trunks.jpeg'
    },
    {
        name:"Gohan",
        url: 'gohan.jpeg'
    },
    {
        name:"Bulma",
        url: 'bulma.jpeg'
    },
    {
        name:"Pikoro",
        url: 'pikoro.jpeg'
    },
]
//referencias 
//referencia de la plantilla
const tmp = document.getElementById('mitemplate')
//utilizamos fragmentos para evitar reflow
const fragmento = document.createDocumentFragment()
//referencia a donde mostraremos los datos
const drbz = document.getElementById('dbz')

//recorremos la lista (data).
data.forEach( ( item )=>{
    //Clonamos el template
    const cloneTmp = document.importNode(tmp.content, true)
    //Modificamos o insertamos los datos en la plantilla
    cloneTmp.querySelector('#imagen').src = `imgs/${item.url}`
    cloneTmp.querySelector('#texto').textContent = item.name
    // textContent vs src vs value
    // agregamos el clone al fragmento
    fragmento.appendChild(cloneTmp)
} )
// Agregamos todo al div
drbz.appendChild(fragmento)