cordova.define("cordova-plugin-native-ringtones.NativeRingtones", function(require, exports, module) {
var exec = require('cordova/exec');

function RingtoneManager() {
    this.propTest = 'superTest';
}


/**
 * Get the ringtone list of the device
 * 
 * @param {Object}
 *            Set the ringtone list to the attribute ringtoneList of the object
 */
RingtoneManager.prototype.getRingtone = function (successCallback, errorCallback, ringtoneType) {
    exec(successCallback, errorCallback, "NativeRingtones", "get", [ringtoneType]);
};

RingtoneManager.prototype.playRingtone = function (ringtoneUri, successCallback, errorCallback) {
    if (!successCallback) {
        successCallback = function (success) { };
    }
    if (!errorCallback) {
        errorCallback = function (error) { };
    }
    exec(successCallback, errorCallback, "NativeRingtones", "play", [ringtoneUri]);
};

RingtoneManager.prototype.stopRingtone = function (ringtoneUri, successCallback, errorCallback) {
    if (!successCallback) {
        successCallback = function (success) { };
    }
    if (!errorCallback) {
        errorCallback = function (error) { };
    }
    exec(successCallback, errorCallback, "NativeRingtones", "stop", [ringtoneUri]);
};

module.exports = new RingtoneManager();

});


