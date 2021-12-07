const inputProduct= document.querySelector('.product');
const inputAmount= document.querySelector('.amount');
const inputUnits= document.querySelector('.units');
const button= document.querySelector('.button');
const ul=document.querySelector('ul');
const total=document.querySelector('.total');

	button.addEventListener("mouseenter",()=>{
		button.style.backgroundColor="green";
	})

	button.addEventListener("mouseleave",()=>{
		button.style.backgroundColor="white";
	})

button.addEventListener("click", (e)=>{
	e.preventDefault();
	

	
	const text = inputProduct.value.toUpperCase();
	const amount= parseInt(inputAmount.value);
	const units=parseInt(inputUnits.value)
	const newValue=parseInt(total.value);
	const monto=amount*units
	const sum=amount*units+newValue;
	


	if(text !== "" && amount && units > 0){
	const li = document.createElement('li');
	const pProduct = document.createElement('p');
	const pAmount = document.createElement('p');
	const pUnits = document.createElement('p');

	pProduct.textContent = "Producto: "+text;
	pAmount.textContent = "Precio: "+amount+" $ " + " X " + units ;
	pUnits.textContent = "Monto: "+monto;

	li.appendChild(pProduct);
	li.appendChild(pAmount);
	li.appendChild(pUnits);
	li.appendChild(deleteli());
	ul.appendChild(li);

	inputProduct.value="";
	inputAmount.value="";
	inputUnits.value="1";
	total.value=sum;
	}
})

function deleteli(){
	const imgdelete=document.createElement('img');
	imgdelete.setAttribute('src','https://img.icons8.com/color/30/000000/delete.png')
	imgdelete.setAttribute('class','button')



	imgdelete.addEventListener("mouseenter",()=>{
		imgdelete.style.backgroundColor="red";
	})

	imgdelete.addEventListener("mouseleave",()=>{
		imgdelete.style.backgroundColor="white";
	})

	imgdelete.addEventListener('click', (e)=>{


		const valores=e.target.parentElement;
		//console.log(valores)

		const valor=valores.querySelectorAll('p')
		//console.log(valor)
		const montostring=valor[1].textContent.toString();
		//console.log(montostring)
		const montoarreglo=montostring.split(' ');
		//console.log(montoarreglo)
		const montofinal=parseInt(montoarreglo[1]);
		//console.log(montofinal)


		const cantidadstring=valor[1].textContent.toString();
		//console.log(cantidadstring)
		const cantidadarreglo=cantidadstring.split(' ');
		//console.log(cantidadarreglo)
		const cantidadfinal=parseInt(cantidadarreglo[5]);
		//console.log(cantidadfinal)

		const resta=cantidadfinal*montofinal;
		//console.log(resta)

		total.value=total.value-resta;


		const item= e.target.parentElement;
		ul.removeChild(item);


	});
	return imgdelete;
}


