function mudaEstadoDescricao(id, idSeta) {

    const seta = document.getElementById(idSeta)

    if(seta.style.rotate === '') {
        seta.style.rotate = '90deg'
    } else {
        seta.style.rotate = ''
    }

    const desc = document.getElementById(id)

    if (desc.style.display === '') {
        desc.style.display = 'flex'
    } else {
        desc.style.display = ''
    }

}