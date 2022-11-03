const SHEET_ID = "1J1TMPKEgUi_EUnXl0BOanCBfGLp-VvsKoPKSzWFF4Y4";

const TOKEN =
  "ya29.a0Aa4xrXNGcpqNX9gka30vIKazrGJ5cv0UfdphQkjr0lWj4_wlqhosOnQcLknvBzX8dRc-swsTqqICiADbLa--RvZe2WGqP1liOAiKYIAu8UL72q-IHaY9Q9KpwFecVUd3HJQ0Tc4vItBlcxZVjhpVsNawhfAdaCgYKATASARASFQEjDvL9IDN-bTrMQ6FlYN7Oq0y_OA0163";

// let datosOffline = [
// ["Pollo al horno", "sazonado con finas hierbas, acompañado con papas fritas o arroz", "20000"],    
// ["Tallarines con", "salsa a elección, pedi tu pancito para acompañar", "15000"],
// ["Hamburguesa", "con doble carne, queso cheddar, lechuga, tomate, huevo y panceta", "15000"],
// ["Pizza Grande", "sabores: muzzarella, pepperoni, 4 quesos, palmito, pollo catupyry", "40000"]
// ]


fetch(
  // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/almuerzo!A2:C`,
  {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`
    }
  }
//esperamos el response
).then(function (response){
        response.json().then((data)=>{
        const VALUES = data.values
        
        console.log(VALUES)
        const LISTA = document.getElementById("lista-menu")
        const ERROR = document.createElement('p')
        ERROR.innerHTML = "Datos no actualizados"

        
    
        for (let i = 0; i<VALUES.length; i++){
            //contenedor de filas
           const PRODUCTO = document.createElement("div")
            PRODUCTO.className = "menu-item"

            //nombre
            const ITEM_PROD = document.createElement("span")
            ITEM_PROD.className = "producto"
            ITEM_PROD.innerHTML = VALUES[i][0]

            const PRECIO_PROD = document.createElement("span")
            PRECIO_PROD.className = "precio"
            PRECIO_PROD.innerHTML = VALUES[i][2]

            const DESC_PROD = document.createElement("span")
            DESC_PROD.className = "desc"
            DESC_PROD.innerHTML = VALUES[i][1]

            PRODUCTO.appendChild(ITEM_PROD)
            PRODUCTO.appendChild(PRECIO_PROD)
            PRODUCTO.appendChild(DESC_PROD)

            LISTA.appendChild(PRODUCTO)
        }
    }).catch((error)=>{
        const MENUNOACTUALIZADO = document.createElement("span")
        MENUNOACTUALIZADO.className = "menuno"
        MENUNOACTUALIZADO.innerHTML = "EL MENU NO ESTA ACTUALIZADO, DISCULPE LAS MOLESTIAS"
        alert("Menu no actualizado")
    })
})
