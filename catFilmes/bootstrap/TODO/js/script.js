const inputBox = document.querySelector('#entrada')
const addBtn = document.querySelector('.inputField button')
const todoList = document.querySelector('.todoList')
const deleteAllBtn = document.querySelector('.footer button')

// função q ablita o butão de adicionar , quando soltar o tecla

inputBox.onkeyup = _ =>{
    let userData = inputBox.value  // eata variavel pega p valor de entrada do usuario
    if (userData.trim() != 0) {// se os valores do usuario não forem so espaço
        addBtn.classList.add('active')
    }else {
        addBtn.classList.remove('active')
    }
}