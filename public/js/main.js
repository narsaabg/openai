function onSubmit(e){
	e.preventDefault();
	const prompt = document.getElementById('prompt').value;
	const size = document.getElementById('size').value;

	if(prompt == ''){
		alert('please enter some text');
		return;
	}

	openAIImageGenerate(prompt,size);
}

async function openAIImageGenerate(prompt,imageSize){

	document.querySelector('#image').src ='';
	document.querySelector('.msg').textContent ='';
	try{
		showSpinner();
		await fetch('/openai/generateimage',{
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				prompt,
				imageSize
			})
		}).then((res)=>{

			console.log(res);

			if(!res.ok){
				hideSpinner();
				throw new Error('Can\'t generate an image');
			}

			return res.json()
		}).then((json)=>{
			console.log(json)
			document.querySelector('#image').src=json.data
			hideSpinner();
		});
	}catch(error){
		document.querySelector('.msg').textContent = error;
	}
}

function showSpinner(){
	document.querySelector('.spinner').classList.add('show');
}

function hideSpinner(){
	document.querySelector('.spinner').classList.remove('show');
}

document.querySelector('#image-form').addEventListener('submit',onSubmit);
