import MiniRenderEngine from "../render/minimalRenderEngine.js"; // Adjust path as needed
import { applyMovement } from "../service/Movement.js";
import type { RigidBody } from "../types/RigidBody.js";
import RBodyMock1 from "../mock/RBodyMock2.js";
import SpaceMock1 from "../mock/SpaceMock2.js";

// Initialize engine and state
const engine = new MiniRenderEngine();
const spaceOptions = SpaceMock1;

let lastTime = performance.now();

// Simulation + Rendering loop
function loop(currentTime: number) {
    const delta = 1 / 60;
    lastTime = currentTime;

    // Run simulation
    const currentRigidBodies = applyMovement(RBodyMock1, spaceOptions, delta);

    if (currentRigidBodies.length === 0) return;

    engine.update(currentRigidBodies);

    requestAnimationFrame(loop);

    document.getElementById("log")!.textContent = JSON.stringify(currentRigidBodies, null, 2);
}

window.addEventListener("load", () => {
    requestAnimationFrame(loop);
});
