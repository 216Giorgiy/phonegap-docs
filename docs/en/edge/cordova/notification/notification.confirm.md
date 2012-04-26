notification.confirm
====================

Shows a customizable confirmation dialog box.

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])

- __message:__ Dialog message (`String`)
- __confirmCallback:__ - Callback to invoke with index of button pressed (1, 2 or 3). (`Number`)
- __title:__ Dialog title (`String`) (Optional, Default: "Confirm")
- __buttonLabels:__ Comma separated string with button labels (`String`) (Optional, Default: "OK,Cancel")
    
Description
-----------

Function `notification.confirm` displays a native dialog box that is more customizable than the browser's `confirm` function.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 7 ( Mango )
- Bada 1.2 & 2.x

Quick Example
-------------

	// process the confirmation dialog result
	function onConfirm(button) {
		alert('You selected button ' + button);
	}

    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
	        'You are the winner!',  // message
			onConfirm,				// callback to invoke with index of button pressed
	        'Game Over',            // title
	        'Restart,Exit'          // buttonLabels
        );
    }
        
Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
            // Empty
        }
    
		// process the confirmation dialog result
		function onConfirm(button) {
			alert('You selected button ' + button);
		}

        // Show a custom confirmation dialog
        //
        function showConfirm() {
            navigator.notification.confirm(
		        'You are the winner!',  // message
				onConfirm,				// callback to invoke with index of button pressed
		        'Game Over',            // title
		        'Restart,Exit'          // buttonLabels
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">Show Confirm</a></p>
      </body>
    </html>

Windows Phone 7 Quirks
-------------

- Ignores button names, always 'OK|Cancel'
- There is no built in browser confirm, so if you want to just write alert('foo'); you can assign window.confirm = navigator.notification.confirm;
- alert + confirm calls are non-blocking, and result is only available asyncronously.

Bada 2.x Quirks
---------------
- confirm uses javascript alert

Bada 1.2 Quirks
---------------
- Ignore button names, always 'OK|Cancel'
