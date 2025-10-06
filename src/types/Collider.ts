
import { Vector2 } from "./Vector2.js";
export class Collider {
    public id: string;
    public offset: Vector2;
    public size: Vector2;
    public shape: string;

    constructor(id: string, offset: Vector2, size: Vector2, shape: string) {
        this.id = id;
        this.offset = offset;
        this.size = size;
        this.shape = shape;
    }
}