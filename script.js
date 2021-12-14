let number = 0

function mais(){
    number++
    render()
}

function menos(){
    number--
    render()
}

function render(){
    const p =
    document.querySelector("p")
    p.innerText = number
}

render()