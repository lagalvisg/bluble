
alert("BlueStatusMain!");
BluetoothStatus.initPlugin();
alert("BlueStatusinitPlugin!");
BluetoothStatus.enableBT();//Forzar encendido de bluetooth 
alert("BlueStatusEnable!");

    document.addEventListener("deviceready", function () {
        blueble.Scan([], 5, function(device) {
    console.log(JSON.stringify(device));
}, failure);
    }, false); //Empezar a escanear dispositivos
alert("bleScan!");

    document.addEventListener("deviceready", function () {
       blueble.stopScan();
    }, false);//Parar de scanear dispositivos
alert("StopScan!");

//si deseamos conectarnos a un dispositivo especifico agregamos un if(deviceId == 0424:9514) blueble.connect else alert("DeviceIdIncorrecto!"); 


    document.addEventListener("deviceready", function () {
       blueble.Connected(
    deviceId,
    function() {
        console.log("Peripheral is connected");
    },
    function() {
        console.log("Peripheral is *not* connected");
    }
);
    }, false);//Parar de scanear dispositivos

alert("Connecting!");


    document.addEventListener("deviceready", function () {
blueble.isConnected(deviceId,function() {
        console.log("Peripheral is connected");
    },
    function() {
        console.log("Peripheral is *not* connected");
    });
    }, false);

alert("Connected!");


