import { Collider } from "./Collider.js"
import type { RigidBody } from "./RigidBody.js"
import { Vector2 } from "./Vector2.js"

export class Space {
    public bounds: Collider[]
    public gravity: Vector2
    public drag: number
    public isActive: boolean

    constructor() {
        this.bounds = []
        this.gravity = new Vector2(0, 9.81)
        this.isActive = true
        this.drag = 0
    }

    public addBound(bound: Collider | Collider[]) {
        if (Array.isArray(bound)) {
            this.bounds.push(...bound)
        } else {
            this.bounds.push(bound)
        }
        return this;
    }

    public setGravity(gravity: Vector2) {
        this.gravity = gravity
        return this;
    }

    public setDrag(drag: number) {
        this.drag = drag
        return this;
    }
}