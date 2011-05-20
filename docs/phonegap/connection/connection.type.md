connection.type
===================

Checks the active network connection that is being used.

Description
-----------

This property is a fast way to determine the device's network connection state, and type of connection.


Supported Platforms
-------------------

- iOS
- Android

Quick Example
-------------

    function checkConnection() {
        var networkState = navigator.connection.type;
        
        var states = {};
        states[Connection.UNKNOWN]	= 'Unknown connection';
        states[Connection.ETHERNET]	= 'Ethernet connection';
        states[Connection.WIFI]   	= 'WiFi connection';
        states[Connection.CELL_2G]	= 'Cell 2G connection';
        states[Connection.CELL_3G]	= 'Cell 3G connection';
        states[Connection.CELL_4G]	= 'Cell 4G connection';
        states[Connection.NONE]   	= 'No network connection';
    
        alert('Connection type: ' + states[networkState]);
    }
    
    checkConnection();


Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>navigator.connection.type Example</title>
        
        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">
            
        // Wait for PhoneGap to load
        // 
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
        
        // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
        //
        function onDeviceReady() {
            checkConnection();
        }
        
	    function checkConnection() {
	        var networkState = navigator.connection.type;

	        var states = {};
	        states[Connection.UNKNOWN]	= 'Unknown connection';
	        states[Connection.ETHERNET]	= 'Ethernet connection';
	        states[Connection.WIFI]   	= 'WiFi connection';
	        states[Connection.CELL_2G]	= 'Cell 2G connection';
	        states[Connection.CELL_3G]	= 'Cell 3G connection';
	        states[Connection.CELL_4G]	= 'Cell 4G connection';
	        states[Connection.NONE]   	= 'No network connection';

	        alert('Connection type: ' + states[networkState]);
	    }
        
        </script>
      </head>
      <body onload="onLoad()">
        <p>A dialog box will report the network state.</p>
      </body>
    </html>

iOS Quirks
----------
- for a cellular connection, connection.type will always be Connection.CELL_2G
