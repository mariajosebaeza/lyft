
telefono = document.getElementById("campo").value;
if( !(/^\d{9}$/.test(valor)) ) {
	alert("Recuerda, son 9 digitos")
  return false;
}