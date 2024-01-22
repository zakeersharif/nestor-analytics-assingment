let tabEl=document.getElementById('tab')
let inputEl=document.getElementById('input')
let enterEl=document.getElementById('enter')
let mainEl=document.getElementById('main')

enterEl.onclick=function(){
    let urlvalue=inputEl.value
    console.log(urlvalue)
    let iframeEl=document.getElementById('iframe')
    iframeEl.src=urlvalue

}


function newTab(){
    let tabsEl=document.getElementById('tabs')
    let tabBtnEl=document.createElement('button')

    tabBtnEl.onclick=function(){
        divEl.classList.toggle('display') 

    }

    tabBtnEl.textContent='Tab'
    tabsEl.prepend(tabBtnEl)
    let divEl=document.createElement('div')

    let inpEl=document.createElement('input')
    let btnEl=document.createElement('button')
    btnEl.textContent='Submit'
    btnEl.onclick=function(){
        let iframeEl=document.createElement('IFRAME')
        iframeEl.src=inpEl.value
        iframeEl.classList.add('block')
        divEl.appendChild(iframeEl)
    }

    divEl.appendChild(inpEl)
    divEl.appendChild(btnEl)
    
    divEl.classList.add('display')
    mainEl.appendChild(divEl)
    
}