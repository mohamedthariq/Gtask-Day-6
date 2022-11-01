//UML Diagram into class transcript

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        console.log(this.radius);
    }
    getColor() {
        console.log(this.color);
    }

    setRadius(newRadius, newColor) {
        this.radius = newRadius;
        this.color = newColor;
    }

    getArea() {
        let Area = Math.PI * (this.radius * this.radius);
        console.log(Area)
    }

    getCircumference() {
        let circumference = 2 * Math.PI * this.radius;
        console.log(circumference)
    }

}

let circle1 = new Circle(2, "green");

console.log("Before set into new data:");
circle1.getRadius();
circle1.getColor();
//area and circumference of circle
circle1.getArea();
circle1.getCircumference();

//set the new radius and color
circle1.setRadius(3, "blue");

console.log("After set into new data:");
//updateto new radius and color
circle1.getRadius();
circle1.getColor();

//area and circumference of circle
circle1.getArea();
circle1.getCircumference();

