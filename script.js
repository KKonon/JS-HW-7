
let kettle = function(){

    this.given = function(){
        this.power = prompt("Введите мощность чайника");
        this.volume = prompt("Введите объем чайника");
        this.water = prompt("Сколько в чайнике залито литров воды?");

        this.timework();
    }

    this.timework = function(){
        this.work = this.volume - this.water / this.power;
        this.output();
    }

    this.output = function(){
        alert("Вода закипела за " + this.work.toFixed(2) + " Минут");
    }

}

let Kettle = new kettle();
Kettle.given();
