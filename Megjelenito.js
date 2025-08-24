export default class Megjelenito{
    #adatok=[];
    #szuloElem;
    #szekciok ={};
    #aktualindex=0;
    constructor(adatok,szuloElem){
        this.#szuloElem=szuloElem;
        this.#adatok=adatok;
        this.megjelenites();
    }

    megjelenites(){
        this.#szuloElem.innerHTML='';
       this.#adatok.forEach(adatok =>{
         const jatekterElem = document.createElement("div");
         jatekterElem.className=("jatek");
            jatekterElem.innerHTML=`
                    <div class="beallit">
                        <h2>${adatok.kategoria}</h2><br>
                        <img src="${adatok.kep}">
            `;
            
            const lista = document.createElement("ul");
            adatok.tetelek.forEach(tetel =>{
                const li = document.createElement("li");
                li.className=("szoveg");

                if(adatok.kategoria ==="szemelyes"){
                    li.textContent=tetel.cimke + " - " + tetel.ertek
                }else if(adatok.kategoria ==="tanulmanyok"){
                    li.textContent=tetel.intezmeny + " - " + tetel.idoszak + " - " + tetel.hely + " - " + tetel.leiras;
                }else if(adatok.kategoria ==="munkatapasztalat"){
                    li.textContent=tetel.ceg + " - " + tetel.beosztas + " - " + tetel.idoszak + " - " + tetel.feladatok;
                }else if(adatok.kategoria ==="sporteredmények"){
                    li.textContent=tetel.sport + " - " + tetel.eredmeny;
                }else if(adatok.kategoria ==="készségek"){
                    li.textContent=tetel.nev + " - " + tetel.szint+".szint";
                }else{
                    li.textContent=tetel;
                }
                lista.appendChild(li);
            });

            jatekterElem.appendChild(lista);
            this.#szuloElem.appendChild(jatekterElem);
        });
    }
}