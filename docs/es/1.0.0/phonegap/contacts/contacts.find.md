contacts.find
=============

Consulta la base de datos de contactos y retorna uno o mas objetos `Contact`, cada uno con los campos especificados.

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);

Descripción
-----------

contacts.find es una función asíncrona que consulta la base de datos de la agenda del dispositivo y retorna un array de objetos `Contact`. Los objetos retornados son pasados a la función 'callback' `contactSuccess` especificada en el argumento __contactSuccess__.

Los usuarios pueden especificar los campos que solicitan en la consulta con el argumento __contactFields__. Solo los campos que solicites en __contactFields__ serán retornados como propiedades del objeto `Contact`, que a su vez es pasado a la función 'callback'  __contactSuccess__. Si se entrega un array __contactFields__ vacio, el objeto `Contact` retornada solo las propiedades `id`. El valor ["*"] en __contactFields__ retornara todos los campos.

La string __contactFindOptions.filter__ puede usarse como filtro cuando se consulte a la base de datos. Si se entrega, este valor es sensible a capitalización y a coincidencias parciales sobre cada campo que especificastes en el argumento  __contactFields__. Si se encuentra una coincidencia con cualquier campo especificado, se retornara el contacto.

Argumentos
----------

- __contactFields:__ Campos del contacto para usarse en las búsquedas. Solo estos campos tendrán valores asignados en el objeto `Contact` retornado. _(DOMString[])_ [Requerido]
- __contactSuccess:__ Función 'callback' Success que se dispara cuando se retorna un contacto de la base de datos. [Requerido]
- __contactError:__ Función 'callback' Error. Se dispara cuando ocurre algún tipo de error. [Opcional]
- __contactFindOptions:__ Opciones de búsqueda para filtrar contactos. [Opcional]

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido
--------------

    function onSuccess(contacts) {
        alert('Se encontró ' + contacts.length + ' contactos.');
    };

    function onError(contactError) {
        alert('onError!');
    };

    // Busca todos los contactos con 'Bob' en cualquier campo "name"
    var options = new ContactFindOptions();
	options.filter="Bob"; 
	var fields = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Contacts</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espera a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
		    // Busca todos los contactos con 'Bob' en cualquier campo "name"
		    var options = new ContactFindOptions();
			options.filter="Bob"; 
			var fields = ["displayName", "name"];
		    navigator.contacts.find(fields, onSuccess, onError, options);
        }
    
        // onSuccess: Obtiene el resultado de los contactos actuales
        //
        function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				console.log("Nombre a mostrar (DisplayName) = " + contacts[i].displayName);
			}
        }
    
        // onError: Fallo al obtener contactos
        //
        function onError(contactError) {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <h1>Ejemplo</h1>
        <p>Búsqueda de Contactos</p>
      </body>
    </html>
    

