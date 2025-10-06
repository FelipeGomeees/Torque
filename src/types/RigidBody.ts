import { Vector2 } from "./Vector2.js";
import { Collider } from "./Collider.js";

export type RigidBody = {
    id: string,
    position: Vector2,
    collider: Collider[],
    mass: number,
    velocity: Vector2,
    acceleration: Vector2,
    drag: number
    force: Vector2,
    isStatic: boolean,
    color: string,
}