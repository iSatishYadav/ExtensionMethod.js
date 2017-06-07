(function () {
    this.ExtensionMethod = function () {
        //Blank constructor
    };
    ExtensionMethod.prototype.Add = function (objectUnder, functionName, callback) {
        var proto = objectUnder.prototype ? objectUnder.prototype.__proto__ : objectUnder.__proto__ || Object.getPrototypeOf(objectUnder).prototype || Object.getPrototypeOf(objectUnder).__proto__;
        proto[functionName] = callback;
        return objectUnder;
    }
})();