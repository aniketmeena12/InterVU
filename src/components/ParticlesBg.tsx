import { useEffect, useRef } from "react";

const STAR_COLOR = "#fff";
const STAR_SIZE = 3;
const STAR_MIN_SCALE = 0.2;
const OVERFLOW_THRESHOLD = 50;
const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

type Star = { x: number; y: number; z: number };
type Pointer = { x: number | null; y: number | null };
type Direction = "z" | "l" | "r" | "t" | "b";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stars = useRef<Star[]>([]);
  const velocity = useRef({ x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 });
  const pointer = useRef<Pointer>({ x: null, y: null });
  const animationRef = useRef<number | null>(null);
  const scale = window.devicePixelRatio || 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth * scale;
    let height = window.innerHeight * scale;

    const resize = () => {
      width = window.innerWidth * scale;
      height = window.innerHeight * scale;
      canvas.width = width;
      canvas.height = height;
      stars.current.forEach((star) => {
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      });
    };

    canvas.width = width;
    canvas.height = height;

    stars.current = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
    }));

    const recycleStar = (star: Star): void => {
      let direction: Direction = "z";
      const vx = Math.abs(velocity.current.x);
      const vy = Math.abs(velocity.current.y);
      const axis = vx > vy ? "h" : "v";

      if (vx > 1 || vy > 1) {
        direction =
          axis === "h"
            ? velocity.current.x > 0
              ? "l"
              : "r"
            : velocity.current.y > 0
            ? "t"
            : "b";
      }

      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);
      if (direction === "z") {
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      } else {
        star.x = direction === "l" ? -OVERFLOW_THRESHOLD :
                 direction === "r" ? width + OVERFLOW_THRESHOLD :
                 Math.random() * width;

        star.y = direction === "t" ? -OVERFLOW_THRESHOLD :
                 direction === "b" ? height + OVERFLOW_THRESHOLD :
                 Math.random() * height;
      }
    };

    const update = () => {
      velocity.current.tx *= 0.96;
      velocity.current.ty *= 0.96;
      velocity.current.x += (velocity.current.tx - velocity.current.x) * 0.8;
      velocity.current.y += (velocity.current.ty - velocity.current.y) * 0.8;

      stars.current.forEach((star) => {
        star.x += velocity.current.x * star.z;
        star.y += velocity.current.y * star.z;
        star.x += (star.x - width / 2) * velocity.current.z * star.z;
        star.y += (star.y - height / 2) * velocity.current.z * star.z;
        star.z += velocity.current.z;

        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > height + OVERFLOW_THRESHOLD
        ) {
          recycleStar(star);
        }
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      stars.current.forEach((star) => {
  const hoverRadius = 30 * scale;
  const px = pointer.current.x;
  const py = pointer.current.y;

  const dist = px !== null && py !== null
    ? Math.hypot(star.x - px * scale, star.y - py * scale)
    : Infinity;

  const isHovering = dist < hoverRadius;

  ctx.beginPath();
  ctx.lineCap = "round";
  ctx.lineWidth = STAR_SIZE * star.z * scale * (isHovering ? 1.8 : 1);
  ctx.globalAlpha = isHovering ? 1 : 0.5 + 0.5 * Math.random();
  ctx.strokeStyle = isHovering ? "#00fff7" : STAR_COLOR;

  const tailX = velocity.current.x * 2 || 0.5;
  const tailY = velocity.current.y * 2 || 0.5;

  ctx.moveTo(star.x, star.y);
  ctx.lineTo(star.x + tailX, star.y + tailY);
  ctx.stroke();
});
    };

    const step = () => {
      update();
      render();
      animationRef.current = requestAnimationFrame(step);
    };

    const movePointer = (x: number, y: number, isTouch = false): void => {
      if (pointer.current.x !== null && pointer.current.y !== null) {
        const ox = x - pointer.current.x;
        const oy = y - pointer.current.y;
        velocity.current.tx += (ox / 8) * scale * (isTouch ? 1 : -1);
        velocity.current.ty += (oy / 8) * scale * (isTouch ? 1 : -1);
      }
      pointer.current = { x, y };
    };

    const onMouseMove = (e: MouseEvent): void => movePointer(e.clientX, e.clientY, false);
    const onTouchMove = (e: TouchEvent): void => {
      movePointer(e.touches[0].clientX, e.touches[0].clientY, true);
      e.preventDefault();
    };
    const onMouseLeave = () => {
      pointer.current = { x: null, y: null };
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchend", onMouseLeave);

    step();

    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchend", onMouseLeave);
    };
  }, [scale]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{       
  zIndex: -1,
  backgroundColor: "#000",
  backgroundImage: "none"
      }}
    />
  );
}
