var BluetoothStatus = function() {
};

BluetoothStatus.initPlugin = function() {
    //wait for device to be ready
    document.addEventListener("deviceready", function () {
        cordova.exec(null, null, "BluetoothStatus", "initPlugin", []);
    }, false);
};

BluetoothStatus.enableBT = function() {

    document.addEventListener("deviceready", function () {
       cordova.exec(null, null, "BluetoothStatus", "enableBT", []);
    }, false);
    
};

BluetoothStatus.promptForBT = function() {
    document.addEventListener("deviceready", function () {
       cordova.exec(null, null, "BluetoothStatus", "promptForBT", []);
    }, false);
    
};

BluetoothStatus.hasBT = false;
BluetoothStatus.hasBTLE = false;
BluetoothStatus.BTenabled = false;
BluetoothStatus.iosAuthorized = true;

alert("BluetoothStatus!");
