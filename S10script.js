class Alumno {
    promfinal = 0;

    constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }

    promedio(){
        return this.promfinal = (this.nota1 * 0.15) + (this.nota2 * 0.2) + (this.nota3 * 0.25) + (this.nota4 * 0.4)
    }
    condicion(notafinal){
        if(notafinal >= 12) {
            return "aprobado"
        }else{
            return "desaprobado"
        }
    }
    obsequio(notafinal){
        if(notafinal >= 17) {
            return "te ganaste una mochila"
        }else{
            return "nada mi rey"
        }
    }
}

const michael = new Alumno('01','Javier', 20, 20, 20, 20)
const danfer = new Alumno('02','danfer', 10, 10, 10, 10)
const harry = new Alumno('03','harry', 20, 20, 20, 20)
const oscar = new Alumno('04','oscar', 0, 20, 0, 20)
const shirley = new Alumno('05','vacomi', 15, 16, 17, 18)

console.log(harry.promedio());
console.log(harry.promfinal)
console.log(harry.condicion(harry.promfinal));
console.log(harry.obsequio(harry.promfinal));