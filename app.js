var counter=0;

function handleSubmit(event){
    event.preventDefault()
    Meme_Board.appendChild(makeMemeDiv(Inputs.elements[0].value,Inputs.elements[1].value,Inputs.elements[2].value))
    document.getElementById("meme"+counter).addEventListener("click",handleClick)
    Inputs.reset()
    counter++
}

function makeMemeDiv(url,top_text,bottom_text){
    let wholeDiv = document.createElement('div') //container for entire meme
    let topDiv = document.createElement('div')  //contains text on top
    let bottomDiv = document.createElement('div')   //contains text on bottom
    let img = document.createElement('img') //contains image
    let shadowContainer = document.createElement('div') //contains shadow img
    let shadow = document.createElement('img')  //thing that'll show on hover

    wholeDiv.className="Meme"
    wholeDiv.id="meme"+counter
    topDiv.className="top_text"
    bottomDiv.className="bottom_text"
    shadowContainer.className="shadow_container"
    shadow.className="shadow"

    img.src=url
    topDiv.innerHTML=top_text
    bottomDiv.innerHTML=bottom_text
    shadow.src="x-mark.png"

    wholeDiv.append(topDiv)
    wholeDiv.append(img)
    wholeDiv.append(bottomDiv)
    wholeDiv.append(shadowContainer)
    shadowContainer.append(shadow)
    return wholeDiv
}

function handleClick(event){
    event.target.closest(".Meme").parentNode.removeChild(event.target.closest(".Meme"))
}

document.addEventListener("submit",handleSubmit) 