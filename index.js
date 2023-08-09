let count = 0

const element = document.querySelector("#counter")

const increase = () => {
    count ++
    element.innerText = count
}

const decrease = () => {
    count --
    element.innerText = count
}

const reset = () => {
    count = 0
    element.innerHTML = `<mark>${count}</mark>`
}

const selectTheme = (theme) => {
    const body = document.querySelector("body")
    body.className = theme

    document.querySelector("main").className = theme

    const buttons = document.querySelectorAll("button")
    for(let button of buttons) {
        button.className = theme
    }
}