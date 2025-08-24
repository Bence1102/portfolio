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
     
    }
}