import type { RigidBody } from "../types/RigidBody.js";
import { Vector2 } from "../types/Vector2.js";
import { Space } from "../types/Space.js";

type Scene = {
    bgColor: string;
    debug: boolean;
    rigidBodies: RigidBody[];
};

class MiniRenderEngine {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private vw = 800;
    private vh = 600;

    constructor() {
        // Create and set up canvas
        this.canvas = document.createElement('canvas');
        document.body.style.margin = '0';
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d')!;
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    private resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        const scaleX = this.canvas.width / this.vw;
        const scaleY = this.canvas.height / this.vh;
        const scale = Math.min(scaleX, scaleY);

        this.ctx.setTransform(scale, 0, 0, scale, 0, 0);
    }

    private drawRigidBodies(rigidBodies: RigidBody[]) {
        this.ctx.strokeStyle = "#00f"; // Blue outline
        this.ctx.lineWidth = 4;

        rigidBodies.forEach(body => {
            // body.collider.forEach(col => {
            //     const { x, y } = body.position;

            //     this.ctx.strokeRect(x, y, 2, 2);
            // });

            // Draw center point
            this.ctx.fillStyle = body.color;
            this.ctx.beginPath();
            this.ctx.arc(body.position.x, body.position.y, 2, 0, Math.PI * 2);
            this.ctx.fill();

            // // Velocity vector (green)
            // this.ctx.strokeStyle = "#0f0";
            // this.ctx.beginPath();
            // this.ctx.moveTo(body.position.x, body.position.y);
            // this.ctx.lineTo(
            //     body.position.x + body.velocity.x * 10,
            //     body.position.y + body.velocity.y * 10
            // );
            // this.ctx.stroke();

            // // Acceleration vector (magenta)
            // this.ctx.strokeStyle = "#f0f";
            // this.ctx.beginPath();
            // this.ctx.moveTo(body.position.x, body.position.y);
            // this.ctx.lineTo(
            //     body.position.x + body.acceleration.x * 50 * -1,
            //     body.position.y + body.acceleration.y * 50 * -1
            // );
            // this.ctx.stroke();
        });
    }

    public update(rigidBodies: RigidBody[] | []) {
        // this.ctx.clearRect(0, 0, this.vw, this.vh);
        // this.ctx.fillRect(0, 0, this.vw, this.vh);

        // this.ctx.fillStyle = "#ddd";
        // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        

        if (rigidBodies) {
            this.drawRigidBodies(rigidBodies);
        }
    }
}

export default MiniRenderEngine;
