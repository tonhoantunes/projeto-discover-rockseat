//mudar de página (dark, light)
function toggleMode() {
    const html = document.documentElement //para acessar a tag html através do documentElement

    // if(html.classList.contains('light')) { //se na lista de classe dentro de html conter 'light', execute oq tá dentro
    //     html.classList.remove('light')
    // }
    
    // else {
    //     html.classList.add('light')
    // }

    html.classList.toggle('light') //verificar se existe a classe dentro do html (faz a mesma função do if else acima)

    //pegar a tag img
    //substituir a imagem
    const img = document.querySelector("#profile img") //querySelector = pesquisa pelo seletor; o parâmetro recebido é o mesmo seletor no css

    //se tiver light mode, add a imagem light
    if(html.classList.contains('light')) { //se na lista de classe dentro de html conter 'light', execute oq tá dentro
        img.setAttribute('src', './assets/avatar-light.png') //setAtrtribute serve para modificar um atributo; o primeiro parâmetro é o antigo atributo, o segundo parâmetro é o novo atributo 
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos escuro, jaqueta e fundo gradiante do rosa para o azul. ')
    }
    
    //se tiver dark mode, add a imagem dark
    else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.')
    }
}