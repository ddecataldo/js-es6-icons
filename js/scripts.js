/* 
* Milestone 1
* Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

* Milestone 2
* Coloriamo le icone per tipo

* Milestone 3
* Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/

const icon = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const coloriIcone = {
    animal: "bown",
    vegetable: "green",
    user: "blue"
}

// Seleziono il contenitore HTML dove poi inserire le icone
const cardContainer = document.querySelector(".card-container");
// Seleziono il contenitore HTML dove andare a inserire le voci della select
const formSelect = document.getElementById("filter_select");

let color = "";
let arrayType = []


// Creo un ciclo che mi permette di stampare a schermo i box con le varie icone
for (let i = 0; i < icon.length; i++) {

    const {name, prefix, family, type} = icon[i];

	// Inserisco all'interno dall'array arrayType la chiave "type" di ogni singolo elemento
	// Se arrayType non include il valore corrente di type allora lo pusho nell'array e successivamente lo inserisco nell'html
	if(!arrayType.includes(type)){
		arrayType.push(type)
		formSelect.innerHTML += `<option value="${type}">${type}</option>`
	}

	if(type === "animal"){
		color = "brown";
	} else if (type === "vegetable"){
		color = "green";
	} else if (type === "user"){
		color = "blue";
	}

    cardContainer.innerHTML += `
    <div class="col">
      <div class="card py-3 shadow-sm">
        <div class="card-img-top">
          <i class="${family} ${prefix + name} fa-3x" style="color:${color};"></i>
        </div>
        <div class="card-body">
          <div class="card-title text-center">${name}</div>
        </div>
      </div>
    </div>`;

}


