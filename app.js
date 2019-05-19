var counter=0;

function handleSubmit(event){
    event.preventDefault()
    Meme_Board.appendChild(makeMemeDiv(Inputs.elements[0].value,Inputs.elements[1].value,Inputs.elements[2].value))
    document.getElementById("meme"+counter).addEventListener("click",handleClick)
    Inputs.reset()
    counter++
}

function makeMemeDiv(url,top_text,bottom_text){
    let wholeDiv = document.createElement('div')
    let topDiv = document.createElement('div')
    let bottomDiv = document.createElement('div')
    let img = document.createElement('img')
    let wrapper = document.createElement('div')

    wholeDiv.className="Meme"
    wholeDiv.id="meme"+counter
    topDiv.className="top_text"
    bottomDiv.className="bottom_text"

    img.src=url
    topDiv.innerHTML=top_text
    bottomDiv.innerHTML=bottom_text

    wholeDiv.append(topDiv)
    wholeDiv.append(img)
    wholeDiv.append(bottomDiv)
    return wholeDiv
}

function handleClick(event){
    event.target.closest(".Meme").parentNode.removeChild(event.target.closest(".Meme"))
}

document.addEventListener("submit",handleSubmit) 