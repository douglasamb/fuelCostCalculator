function myScope() {
  const form = document.querySelector('.form');
  const result = document.querySelector('.result');
  let travelCost;
  let travelCostTotal;

  function recieveEventoForm (evento) {
    evento.preventDefault();

    const fuel = document.getElementById('fuel');
    const distance = document.getElementById('distance');
    const consumption = document.getElementById('consumption');
    const price = document.getElementById('price');

/* Parte do código que recolhe valores e calcula o consumo ida e ida e volta / Part of code that get the value and do the calculation */
    let travelCost = (distance.value / consumption.value) * price.value;
    let travelCostFixed = travelCost.toFixed(2);
    let travelCostTotal = travelCost * 2;
    let travelCostTotalFixed = travelCostTotal.toFixed(2);

  
    result.innerHTML += `<p>O gasto na ida com ${fuel.value} será de R$ ${travelCostFixed}</p><p>O gasto ida e volta com ${fuel.value} será de R$ ${travelCostTotalFixed}</p>`;

  }

  form.addEventListener('submit', recieveEventoForm);
}

myScope();


