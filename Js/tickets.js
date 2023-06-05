
const cantidadInput = document.getElementById('cantidad');
const opcionesSelect = document.getElementById('opciones');
const borrarButton = document.getElementById('compras1');
const resumenButton = document.getElementById('compras');
const montoAPagarDiv = document.getElementById('monto-a-pagar');


function calcularMontoAPagar() {
  const cantidad = parseInt(cantidadInput.value);
  const categoria = opcionesSelect.value;
  let precio = 200;

  if (categoria === 'Estudiante') {
    precio *= 0.2; // Descuento del 80%
  } else if (categoria === 'Trainee') {
    precio *= 0.5; // Descuento del 50%
  } else if (categoria === 'Junior') {
    precio *= 0.85; // Descuento del 15%
  }

  const montoAPagar = cantidad * precio;
  montoAPagarDiv.textContent = 'Total a pagar: $' + montoAPagar;
}


borrarButton.addEventListener('click', calcularMontoAPagar);


resumenButton.addEventListener('click', function () {
  cantidadInput.value = '';
  opcionesSelect.selectedIndex = 0;
  montoAPagarDiv.textContent = 'Total a pagar:$';
});
