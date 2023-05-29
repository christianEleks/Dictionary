const input = document.querySelector("input");
const btn = document.querySelector("button");
const content = document.querySelector(".content");

async function myApi(word){
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json());
    return res[0]
}

   btn.addEventListener("click", myFun)


   async function myFun(){
    const down = await myApi(input.value);
    console.log(down);


    let partOfSpeechArray =[]
    for(let i=0; i<down.phonetics.length; i++){
        partOfSpeechArray.push(down.phonetics[i].text)   
    }


     content.innerHTML = `
    <div class="card">
      
    <div class="property">
     <span>WORD:</span>
     <span>${down.word}</span>
    </div>

   <div class="property">
     <span>PHONETICS(a):</span>
     <span>${partOfSpeechArray[0]}</span>
    </div>

    <div class="property">
     <span>PHONETICS(b):</span>
     <span>${partOfSpeechArray[1]}</span>
    </div>

    <div class="property">
     <span>
     <audio controls src="${down.phonetics[0].audio}"></audio>
     </span>
    </div>

    <div id="property"></div>
   </div>
    `
    var h4 = document.createElement("h4")
    h4.innerHTML = `<div class="property">
    <span>DEFINITION(a):</span>
    <span>${down.meanings[0].definitions[0].definition}</span>
   </div>`

   var h5 = document.createElement("h5")
    h5.innerHTML = `<div class="property">
    <span>DEFINITION(b):</span>
    <span>${down.meanings[1].definitions[0].definition}</span>
   </div>`

    if(down.meanings.length > 1){
        content.appendChild(h4)
        content.appendChild(h5)
    }
    else if(down.meanings.length == 1){
        content.appendChild(h4)
        content.removeChild(h5)
    }


    var h4 = document.createElement("h4")
    h4.innerHTML = `<div class="property">
    <span>EXAMPLE(a):</span>
    <span>${down.meanings[0].definitions[0].example}</span>
   </div>`

   var h5 = document.createElement("h5")
    h5.innerHTML = `<div class="property">
    <span>EXAMPLE(b):</span>
    <span>${down.meanings[1].definitions[0].example}</span>
   </div>`

    if(down.meanings.length > 1){
        content.appendChild(h4)
        content.appendChild(h5)
    }
    else if(down.meanings.length == 1){
        content.appendChild(h4)
        content.removeChild(h5)
    }

    var h4 = document.createElement("h4")
    h4.innerHTML = `<div class="property">
    <span>PARTS OF SPEECH(a):</span>
    <span>${down.meanings[0].partOfSpeech}</span>
   </div>`

   var h5 = document.createElement("h5")
    h5.innerHTML = `<div class="property">
    <span>PARTS OF SPEECH(b):</span>
    <span>${down.meanings[1].partOfSpeech}</span>
   </div>`

    if(down.meanings.length > 1){
        content.appendChild(h4)
        content.appendChild(h5)
    }
    else if(down.meanings.length === 1){
        content.appendChild(h4)
        content.removeChild(h5)
    }
    }

