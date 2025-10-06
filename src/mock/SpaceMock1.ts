import { Space } from "../types/Space.js";
import { Collider } from "../types/Collider.js";
import { Vector2 } from "../types/Vector2.js";

const SpaceMock1 = new Space();

SpaceMock1
    .addBound(new Collider("bound1", new Vector2(0, 0), new Vector2(10, 10), "rectangle"))
    .setGravity(new Vector2(0, 9.81))
    .setDrag(0.1);

export default SpaceMock1;