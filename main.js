const Usuario = {nombre: "Guillermo", clave: 2022}
if (Usuario.nombre == "Guillermo" && Usuario.clave == 2022){
    console.log("Estas autorizado a pasar")
}
if (Usuario.nombre == "Guillermo" && Usuario.clave != 2022){
    console.log("Te llamas Guillermo, pero no eres el que esta autorizado")
}
if (Usuario.nombre != "Guillermo" && Usuario.clave != 2022){
    console.log("No eres Guillermo")
}