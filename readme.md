# ExtentionMehtod.js

ExtensionMethod.js is a ligh-weight ````JavaScript```` library to add ````C#```` like extention methods to ````JavaScript```` or ````JSON```` objects.

No external dependency.

## Basic Usage

### 1. Add a reference to ExtensionMethod.js.

````HTML
<script src="src/ExtensionMethod.js"></script>
````

### 2. Find the object to which Extension Method needs to be added.

Let's say you have a ````Person```` object, it can be a class like ````JavaScript```` object.

````JavaScript
var Person = function (first, last) {
        this.firstName = first;
        this.lastName = last;
    }
var p = new Person("Satish", "Yadav");
````

Or a JSON object

````JavaScript
var p =
    {
        "firstName" : "Satish",
        "lastName"  : "Yadav",
    };
````

### 3. Add extension method

````JavaScript
var ext = new ExtensionMethod();
ext.Add(p, "SayMyName", function(){
    alert("Hi, " + this.firstName + " " + this.lastName);
    console.log("Extension Method called. First Name: " +  this.firstName + " and Last Name: " + this.lastName);
});
````

### 4. Use this new method as if it were an native method

````JavaScript
p.SayMyName();
````

## Advance Usage

You can pass arguments as well to the extension method

````JavaScript
var ext = new ExtensionMethod();
var point = { "x" : 10, "y" : 10};
ext.Add(point, "Multiply", function(factor1, factor2) {
    alert("10 * " + factor1 + " = " + this.x + " " + this.y);
    console.log("Extension Method called. x: " +  this.x + " and y: " + y);
});
var newPoint = point.Multiply(2, 5);
````
