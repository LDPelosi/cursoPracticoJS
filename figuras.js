console.group("Cuadrados")
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden:  ${ladoCuadrado}cm`)

const perimetroCuadrado = ladoCuadrado * 4
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`)

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log(`El area del cuadrado es: areaCuadradocm2`)
console.groupEnd()

console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;

console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + ladoTriangulo3 
    + "cm"
)

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm")

const areaTriangulo = (ladoTriangulo3 * alturaTriangulo) / 2
console.log(`El area del triangulo es: ${areaTriangulo}cm2`)

console.groupEnd()

console.group("Circulo")

const radioCirculo = 4,
    diametroCirculo = radioCirculo *2,
    PI = Math.PI,
    perimetroCirculo = diametroCirculo * PI,
    areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log(`El radio del circulo es: ${radioCirculo} 
El diametro del circulo es ${diametroCirculo} 
El perimetro del circulo es ${perimetroCirculo}
El area del circulo es ${areaCirculo}`)

console.groupEnd()
