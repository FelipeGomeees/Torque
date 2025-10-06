export class Vector2 {
    public x: number;
    public y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(v = new Vector2(0, 0)) {
        return new Vector2(this.x + v.x, this.y + v.y);
    }

    subtract(v: Vector2) {
        return new Vector2(this.x - v.x, this.y - v.y);
    }

    multiply(v: Vector2) {
        return new Vector2(this.x * v.x, this.y * v.y);
    }

    scale(scalar: number) {
        return new Vector2(this.x * scalar, this.y * scalar);
    }

    normalize() {
        const length = this.magnitude();
        if (length === 0) return new Vector2(0, 0);
        return new Vector2(this.x / length, this.y / length);
    }

    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    dot(v: Vector2) {
        return this.x * v.x + this.y * v.y;
    }

    equals(v: Vector2) {
        return this.x === v.x && this.y === v.y;
    }

    biggerThan(v: Vector2) {
        return this.x > v.x && this.y > v.y;
    }

    clamp(min: Vector2, max: Vector2) {
        return new Vector2(
            Math.min(Math.max(this.x, min.x), max.x),
            Math.min(Math.max(this.y, min.y), max.y)
        );
    }

    clone() {
        return new Vector2(this.x, this.y);
    }

    static zero() {
        return new Vector2(0, 0);
    }

    static from(obj: { x: number; y: number }) {
        return new Vector2(obj.x, obj.y);
    }

    static randomWithin(max: Vector2) {
        return new Vector2(Math.random() * max.x, Math.random() * max.y);
    }
    

    static randomBetween(min: Vector2, max: Vector2) {
        return new Vector2(
            Math.random() * (max.x - min.x) + min.x,
            Math.random() * (max.y - min.y) + min.y
        );
    }

    static rotate(vector: Vector2, angle: number) {
        const cosAngle = Math.cos(angle);
        const sinAngle = Math.sin(angle);
        return new Vector2(
            vector.x * cosAngle - vector.y * sinAngle, 
            vector.x * sinAngle + vector.y * cosAngle
        );
    }
}
