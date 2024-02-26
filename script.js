// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del 
//tag h1 in qualcos'altro
function modificah1() {
    let h1Element = document.querySelector("h1");
    h1Element.textContent = "Magazzini Giuseppe";
}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di 
//background della pagina
function modColorPag() {
    let paginaSfondo = document.getElementsByTagName("body")[0];
    paginaSfondo.style.backgroundColor = "red";
}

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente
// nel futuro in un altro, fittizio
function modIndirizzoFooter() {
    let indirizzofooter = document.querySelector("footer p")
    indirizzofooter.textContent = "Via che Dio c'è la mandi buona"
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS 
//ad ogni link Amazon della tabella
function insClassLink() {
    let links = document.querySelectorAll("a");
    if (links) {
        links.forEach(link => {
            link.classList.add("nuovaClasse");
        });
    } else {
        console.error("Link non trovato.");
    }
}


// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere 
//una classe CSS a tutte le immagini della tabella; questa classe 
//deve modificare la visibilità/invisibilità dell'immagine

function invisibility () {
  let immage = document.querySelectorAll("img");
  for (let i=0; i<immage.length; i++){
  if (immage[i]) {
  immage[i].classList.toggle("onOff")
  } else {
    console.error()
  }
  }

}

// ESERCIZIO 12: Scrivi una funzione per cambiare il 
//colore del prezzo di ogni prodotto 
//in uno differente, ogni volta che viene invocata

function spancasuale() {
    let span =  document.getElementsByTagName ("span");
for (let i=0; i<span.length; i++) {
    span[i].style.color = coloreCasuale();
}
}


spancasuale()




// Esercizio 12bis: Ho scritto due funzioni. La funzione coloreCasuale()
// permette di creare un colore causale. Successivamente Creo funzione 
// coloreRandom() che permette di attribuire un colore random al paragrafo che contiene
// il carattere "€", ed evitare di cambiare colore a tutti i paragrafi.
function coloreCasuale () {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function coloreRandom() {
    
    let p = document.querySelectorAll ("p");
 for (let i=0; i<p.length; i++){
        if (p[i].textContent.includes("€")) {
        let setColorRandom = coloreCasuale ()
         p[i].style.color = setColorRandom

    } else {
        console.log("non è presente il prezzo")
    }
}
}


