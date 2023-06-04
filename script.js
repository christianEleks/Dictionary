const input = document.querySelector("input");
const btn = document.querySelector("button");
const content = document.querySelector(".content");

async function myApi(word){
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    
    if(response.status == 404){
        content.innerHTML = `<h5>Input a valid word</h5>`
    }
    else{
        var down = await response.json()
        
        let partOfSpeechArray =[]
        for(let i=0; i<down[0].phonetics.length; i++){
            partOfSpeechArray.push(down[0].phonetics[i].text)   
        }
    
    
         content.innerHTML = `
        <div class="card">
          
        <div class="property">
         <span>WORD:</span>
         <span>${down[0].word}</span>
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
         <audio controls src="${down[0].phonetics[0].audio}"></audio>
         </span>
        </div>
    
        <div id="property"></div>
       </div>
        `
        var h4 = document.createElement("h4")
        h4.innerHTML = `<div class="property">
        <span>DEFINITION(a):</span>
        <span>${down[0].meanings[0].definitions[0].definition}</span>
       </div>`
    
       var h5 = document.createElement("h5")
        h5.innerHTML = `<div class="property">
        <span>DEFINITION(b):</span>
        <span>${down[0].meanings[1].definitions[0].definition}</span>
       </div>`
    
        if(down[0].meanings.length > 1){
            content.appendChild(h4)
            content.appendChild(h5)
        }
        else if(down[0].meanings.length == 1){
            content.appendChild(h4)
            content.remove(h5.innerHTML)
        }
    
    
        var h4 = document.createElement("h4")
        h4.innerHTML = `<div class="property">
        <span>EXAMPLE(a):</span>
        <span>${down[0].meanings[0].definitions[0].example}</span>
       </div>`
    
       var h5 = document.createElement("h5")
        h5.innerHTML = `<div class="property">
        <span>EXAMPLE(b):</span>
        <span>${down[0].meanings[1].definitions[0].example}</span>
       </div>`
    
        if(down[0].meanings.length > 1){
            content.appendChild(h4)
            content.appendChild(h5)
        }
        else if(down[0].meanings.length == 1){
            content.appendChild(h4)
            content.removeChild(h5)
        }
    
        var h4 = document.createElement("h4")
        h4.innerHTML = `<div class="property">
        <span>PARTS OF SPEECH(a):</span>
        <span>${down[0].meanings[0].partOfSpeech}</span>
       </div>`
    
       var h5 = document.createElement("h5")
        h5.innerHTML = `<div class="property">
        <span>PARTS OF SPEECH(b):</span>
        <span>${down[0].meanings[1].partOfSpeech}</span>
       </div>`
    
        if(down[0].meanings.length > 1){
            content.appendChild(h4)
            content.appendChild(h5)
        }
        else if(down[0].meanings.length === 1){
            content.appendChild(h4)
            content.removeChild(h5)
        }
    }
}

   btn.addEventListener("click", () => {
    myApi(input.value)
   })


 
