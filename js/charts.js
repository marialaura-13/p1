// Obtener una referencia al elemento canvas del DOM
const $instock = document.querySelector("#instock");
// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril", "Mayo" , "Junio"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datos2020 = {
    label: "Clase 1",
    data: [98, 57, 80, 51, 70, 68], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(0, 0, 0, 0)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 2,// Ancho del borde
};

const datos2021 = {
    label: "Clase 2",
    data: [50, 100, 80, 100, 37, 89], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(0, 0, 0, 0)', // Color de fondo
    borderColor: 'rgba(255, 0, 0, 1)', // Color del borde
    borderWidth: 2,// Ancho del borde
}; 

const datos2022 = {
    label: "Clase 2",
    data: [59, 46, 66, 27, 37, 89], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(0, 0, 0, 0)', // Color de fondo
    borderColor: 'rgba(74, 186, 49, 1)', // Color del borde
    borderWidth: 2,// Ancho del borde
}; 

/*
new Chart($instock, {
    type: 'line',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datos2020,
            datos2021,
            datos2022,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }

}); 

const myChart = new Chart($instock, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}); */

const mixedChart = new Chart($instock, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            // this dataset is drawn below
            order: 2
        }, {
            label: 'Line Dataset',
            data: [10, 10, 10, 10],
            type: 'line',
            // this dataset is drawn on top
            order: 1
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
 });
 