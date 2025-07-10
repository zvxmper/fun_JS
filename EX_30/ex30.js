// La Programación Orientada a Objetos (POO) es un paradigma de programación que se basa en el concepto de “objetos”, que pueden contener datos y comportamientos. Es una forma de estructurar software que facilita la modelación de entidades del mundo real y la reutilización de código. La Programación Orientada a Objetos (POO) se construye sobre dos conceptos fundamentales que provienen de paradigmas anteriores: la programación con estado y el paso de mensajes. En la POO, los objetos son entidades que encapsulan tanto datos (atributos) como comportamientos (métodos), permitiendo una representación más natural y modular de las aplicaciones.

// Conceptos clave
// Objeto: Es una instancia de una clase, que contiene atributos (datos) y métodos (funciones o comportamientos).

// Clase: Es una plantilla o molde que define las propiedades (atributos) y comportamientos (métodos) comunes para un conjunto de objetos.

// Encapsulamiento: Es el mecanismo para ocultar los detalles internos de un objeto y exponer solo lo necesario mediante interfaces (métodos públicos).

// Herencia: Permite crear nuevas clases basadas en clases existentes, reutilizando y extendiendo su funcionalidad.

// Polimorfismo: Permite que diferentes clases implementen métodos con el mismo nombre, pero comportamientos diferentes según la clase que los implemente.

// Abstracción: Consiste en enfocarse en los aspectos relevantes de un objeto, ignorando detalles irrelevantes.

// Escearo.
//cosecionario de automoviles
// ne a consignataria Auto S.A.S. en la satiago de cali, vale del cauca, existen distintos tipos de vehiculos.todos comparten algunas caracteristicas tales como:marca. modelo, velocidad, entre otros. sin embargo, cada tipo de aut tene fnciones especificas que se diferencian entre si.




// un constructor es un metodo especial dentro de una clase cuya funcion principal es inicializar un objetivo cuando se crea. ek constructor puedeser pensado como el encargado de dar indentidadinicial a cada objeto, es decir, como ejemplo cuando se compra un celuclar nuevo y, ants de utilizarlo, primero configura el idioma, red, cuentas, entre otras. esto seria lo que hace el constructor: prepara el objetivo para que este listo para usarse.

//cnstructor
//asigna vaores iniciales
//se ejecuta automaticamente cuando se utiliza la palabra reservad nw para crear un objeto
//solo hay por clase (aunque puede haber sobrecarga en algunos lenguajes como java o C#).
//inicia los atributos (tambien llamados propiedades).

//atributos
//datos o caracteristicas que defne el estado de un objeto
//se guarda como variable dentro de cada objet y sirven para almacenar informacio sobre el 

//metodos
//funcion ascada a una clase u objeto
//define el comportamiento o accion a reaizar (logica)
//utiliza los atributos del objetivo es decir que uedes modificarlos muchas veces
//concepto 1. clase (class) = plano automovil. 
class automovil{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }
    acelerar(){
        this.veocdad += 10;
        console.log(`${this.marca} ${this.modelo} va a ${this.velocidad} km/h`);
    }
    frenar(){
        this.veocdad = 0;
        console.log(`${this.marca} ${this.modelo} se detuvo`);
    }
}

//concepto 2. objeto (object) = auto Real
const auto1 = new automovil ('toyora', 'corolla')
auto1.acelerar();
auto1.frenar();

//concepto 3. herencia = tipos de vehiculos
class camion extends automovil{
    cargapeso(peso){
        console.log(`${this.marca} ${this.modelo} esta cargando ${this.peso} kg`);
    }
}

const camion1 = new camion1 ('volvo', 'FH16');
camion1.acelerar();
camion1-cargapeso(5000);

// 4: encapsulamiento = control del motor 
class automovilEncapsulado {
    #motorEncendido = false;

    encenderMotor(){
        this.#motorEncendido = true;
        console.log("Motor encendido");
    }
    apagarMotor(){
        this.#motorEncendido = false;
        console.log("motor apagado");
    }

    estadoMotor(){
        return this.#motorEncendido ? "encenddo" : "apagado";
    }
}

const  auto2 = new automovilEncapsulado();
auto2.encenderMotor();
console.log(auto2.estadoMotor());

// 5: polimorfiso = acelerar de distntas formas 
class deportivo extends automovil {
    acelerar(){
        this.velocidad += 30; 
        consle.log(`${this.marca} ${this.modelo} va a ${this.veocdad} km/h (¡Veloz!)`);
    }
}

class sedan extends automovil {
    acelerar(){
        this.veocdad += 10;
        console.log(`${this.marca} ${this.modelo} va a ${this.veocdad} km/h`);
    }
}

const ferrari = new Deportvo("ferrari", "488");
const nissan = new sedan("nissan", "sentra");

ferrari.acelerar();
nissan.acelerar();

// 6: abstraccin = ocultar lo comlejo del arranque
class AutomovilAbstracto {
    arrancar(){
        this.#verificarSistema();
        this.#inyectarCombustible();
        console.log("¡auto encendido!");
    }

    #verificarSistema(){
        console.log("verificando sistemas...");
    }

    #inyectarCombustible(){
        console.log("inyectando combustible...");
    }
}

const auto3 = new AutomovilAbstracto();
auto3.arrancar();

/*
concepto: ejemplo en automoviles
clase: plan gneral de un automovil
objeto: un ferrari real, un toyota real
herencia: camion, deportivo heredan de un automovil
encapsulamiento: motor y su estado ocultos al exterior
polimorfismo: cada tipo de auto acelera de forma distinta
abstraccion: solo se llama el metodo "arrancar", sin saber los pasos 
*/