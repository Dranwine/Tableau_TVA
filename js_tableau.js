// var dupNode = first_line.cloneNode([deep]);

let btn_ajouter = document.querySelector("#Ajouter")
let btn_supprimer = document.querySelector("#Supprimer")
let btn_effacer = document.querySelector("#Efffacer")
let btn_calculer = document.querySelector(".calculer")
let btn_eff = document.querySelector(".eff")
let btn_supp = document.querySelector(".supp")

btn_ajouter.addEventListener("click", Addligne)
btn_supprimer.addEventListener("click", SuppLigne)
btn_effacer.addEventListener("click", effacechamp)
btn_calculer.addEventListener("click", calculer)
btn_eff.addEventListener("click", eff_ligne)
btn_supp.addEventListener("click", supp_ligne)

function Addligne(){
    let ligne_a_dupliquer = document.querySelector("#first_line").cloneNode(true)
    ligne_a_dupliquer.querySelector(".calculer").addEventListener("click", calculer)
    ligne_a_dupliquer.querySelector(".eff").addEventListener("click", eff_ligne)
    ligne_a_dupliquer.querySelector(".supp").addEventListener("click", supp_ligne)
    ligne_a_dupliquer.id = ""
    ligne_a_dupliquer.querySelector(".Libelle").value = ""
    ligne_a_dupliquer.querySelector(".HT").value = ""

    document.querySelector('tbody').append(ligne_a_dupliquer)
}

// pour la fonction suprimer une ligne 2 façon de le faire
// 1er
// function SuppLigne(){
//     let ligne_a_supprimer = document.querySelector("tbody").lastChild
//     console.log(ligne_a_supprimer)
//     if (ligne_a_supprimer.id !== "first_line" && ligne_a_supprimer.nodeType === Node.ELEMENT_NODE){
//         ligne_a_supprimer.remove()
//         console.log("ligne bien supp")
//     }else{
//         console.log("impossible de supprimer la première ligne")
//     }
// }
// 2ème
function SuppLigne(){
    let ligne_a_supprimer = document.querySelector("tbody").lastElementChild
    console.log(ligne_a_supprimer)
    if (ligne_a_supprimer.id !== "first_line"){
        ligne_a_supprimer.remove()
        console.log("ligne bien supp")
    }else{
        console.log("impossible de supprimer la première ligne")
    }
}


function effacechamp(){
    let effacer_les_ligne = document.querySelectorAll("input")
    effacer_les_ligne.forEach(input=>{
        input.value = ""
    })
    let selects = document.querySelectorAll('.TVA');
    selects.forEach(select => {
        select.selectedIndex = 0
    })
}

function eff_ligne(event){
    let bouton = event.target
    let eff_champ = bouton.parentElement.parentElement.querySelectorAll(".input")
    console.log(eff_champ)
    eff_champ.forEach(input=>{
        input.value = ""
    })
    // let selects = bouton.parentElement.parentElement.querySelectorAll('.TVA');
    // selects.forEach(select => {
    //     select.selectedIndex = 0
    // })

}

function supp_ligne(event){
    let bouton = event.target
    let supp_ligne = bouton.parentElement.parentElement
    supp_ligne.remove()
}

function calculer(event){
    let bouton = event.target
    let HT = parseFloat(bouton.parentElement.parentElement.querySelector(".HT").value)
    console.log(bouton.parentElement.parentElement.querySelector(".HT").value)
    let TVA = parseFloat(bouton.parentElement.parentElement.querySelector('.TVA').value)
    console.log(bouton.parentElement.parentElement.querySelector(".TVA").value)
    let calcul = (HT*TVA)+HT
    console.log(calcul)
    bouton.parentElement.parentElement.querySelector(".TTC").value = calcul.toFixed(2)
}