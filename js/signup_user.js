/*Validate email */ 
function validateForm(){
	function email(){
		var email = document.getElementById("varemail").value;
		if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
			alert("Ingresa un email válido")
			return false;
		}else if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
			alert("Debes ingresar tu correo")
			return false;
		}
	}
	email();


	/* validate checkbox*/
	function checkbox(){
		var checkbox = document.getElementById("filled-in-box");
		if( !elemento.checked ) {
			alert("Tienes que aceptar las condiciones del servicio")
			return false;
		}	
	}
	checkbox();
}
