/* TRACCIA

In questo esercizio, dovrai creare una classe in JavaScript
chiamata "Veicolo" con alcune proprietà e metodi.
La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
- marca
- anno
- colore
- porte
- carburante

Successivamente:
Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
Calcoliamo l'età della vettura utilizzando il metodo calcolaEta() */

//---------------------------------------------------------------------------------

class Veicolo {
    marca;
    anno;
    colore;
    porte;
    carburante;
}

const fiat = new Veicolo();
fiat.marca = "Fiat";
fiat.anno = 2019;
fiat.colore = "Blu";
fiat.porte = 4;
fiat.carburante = "Benzina";