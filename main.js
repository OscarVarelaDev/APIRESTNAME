let boton = document.getElementById("enviar")
var result = ""
var probability = ""
boton.addEventListener("click", () => {
    let nombre = document.getElementById("name").value
    nombre.toUpperCase()
    getName(nombre)
});

async function getName(nombre) {
    try {
        const resultado = await fetch(`https://api.nationalize.io?name=${nombre}`)
        const data = await resultado.json();
        let result = ""
        let probability = ""

        probability = data.country[0].probability
        result = data.country[0].country_id;

        document.getElementById("resultNanme").innerText = "Iniciales de paises:" + result
        document.getElementById("resultNanme2").innerText = `Probabilidad de uso: ${probability}`

        return result, probability



    }
    catch { console.error("Se encontro un error"); }
}



