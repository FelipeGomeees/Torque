import type { RigidBody } from "../types/RigidBody.js";
import { Vector2 } from "../types/Vector2.js";

const RBodyMock1: RigidBody[] = [];

RBodyMock1.push({
    id: "entity1",
    collider: [],
    position: new Vector2(100, 100),
    velocity: new Vector2(25, -25),
    acceleration: new Vector2(0, 0),
    force: new Vector2(0, 0),
    mass: 1,
    drag: 0.0,
    isStatic: false,
    color: "#0f0",
});

RBodyMock1.push({
    id: "entity2",
    collider: [],
    position: new Vector2(100, 100),
    velocity: new Vector2(25, -25),
    acceleration: new Vector2(0, 0),
    force: new Vector2(0, 0),
    mass: 1,
    drag: 0.4,
    isStatic: false,
    color: "#f00",
});

RBodyMock1.push({
    id: "entity3",
    collider: [],
    position: new Vector2(100, 100),
    velocity: new Vector2(25, -25),
    acceleration: new Vector2(0, 0),
    force: new Vector2(0, 0),
    mass: 1,
    drag: 0.2,
    isStatic: false,
    color: "#00f",
});

export default RBodyMock1;