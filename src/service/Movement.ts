import { Space } from "../types/Space.js"
import type { RigidBody } from "../types/RigidBody.js"
import { Vector2 } from "../types/Vector2.js";

export function applyMovement(rigidBodies: RigidBody[], spaceOptions: Space, delta: number): RigidBody[] | [] {
    if (rigidBodies.length === 0) return [];

    return rigidBodies.flatMap((body: RigidBody) => {
        if (body.mass === Infinity || body.isStatic) return [];

        // === 1. Apply gravity force ===
        const gravity = spaceOptions.gravity.scale(body.mass); // F = m * g
        body.force = body.force.add(gravity);

        // === 2. Apply drag force ===
        const dragForce = body.velocity.scale(-body.drag + (-spaceOptions.drag)); // drag opposes motion
        body.force = body.force.add(dragForce);

        // === 3. Calculate acceleration (a = F / m)
        body.acceleration = body.force.scale(1 / body.mass);

        // === 4. Update velocity (v = v + a * dt)
        body.velocity = body.velocity.add(body.acceleration.scale(delta));

        // === 5. Update position (p = p + v * dt)
        body.position = body.position.add(body.velocity.scale(delta));

        // === 6. Reset force for next frame
        body.force = Vector2.zero();

        return body;
    });
}