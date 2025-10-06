import type { RigidBody } from "../types/RigidBody.js";
import { Vector2 } from "../types/Vector2.js";

const RBodyMock1: RigidBody[] = [];

// Scout drone with low mass and decent speed, medium drag (thin atmosphere)
RBodyMock1.push({
    id: "scout_drone",
    collider: [],
    position: new Vector2(50, 200),
    velocity: new Vector2(40, -10),
    acceleration: new Vector2(0, 0),
    force: new Vector2(0, 0),
    mass: 0.5,
    drag: 0.05,
    isStatic: false,
    color: "#00ffcc",
});

// Satellite core, heavier, slower-moving, lower drag
RBodyMock1.push({
    id: "old_satellite",
    collider: [],
    position: new Vector2(300, 150),
    velocity: new Vector2(10, -5),
    acceleration: new Vector2(0, 0),
    force: new Vector2(0, 0),
    mass: 5,
    drag: 0.01,
    isStatic: false,
    color: "#cccccc",
});

// Debris shard, tiny and light, high drag
RBodyMock1.push({
    id: "debris_shard",
    collider: [],
    position: new Vector2(200, 250),
    velocity: new Vector2(30, -20),
    acceleration: new Vector2(0, 0),
    force: new Vector2(0, 0),
    mass: 0.1,
    drag: 0.2,
    isStatic: false,
    color: "#ff8800",
});

// Abandoned tool (wrench?) - low speed, medium mass
RBodyMock1.push({
    id: "floating_tool",
    collider: [],
    position: new Vector2(180, 180),
    velocity: new Vector2(5, 2),
    acceleration: new Vector2(0, 0),
    force: new Vector2(0, 0),
    mass: 0.8,
    drag: 0.03,
    isStatic: false,
    color: "#8888ff",
});

// A static floating cargo container - for collision testing
RBodyMock1.push({
    id: "cargo_container",
    collider: [],
    position: new Vector2(250, 100),
    velocity: new Vector2(0, 0),
    acceleration: new Vector2(0, 0),
    force: new Vector2(0, 0),
    mass: 10,
    drag: 0.0,
    isStatic: true,
    color: "#333",
});

export default RBodyMock1;
