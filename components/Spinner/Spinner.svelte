<script>
  import { onMount } from "svelte";
  export let size = 20;
  export let fill = "#237EB3";

  let canvas, ctx;

  let angles = [90, 210, 330];
  let center, r, ri, rmax;
  let running = true;

  function circle(angle) {
    const x = center + r * Math.cos(-angle * Math.PI/180);
    const y = center + r * Math.sin(-angle * Math.PI/180);

    ctx.beginPath();
    ctx.arc(x, y, ri - (r * 0.05), 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  let growing = false;

  function checkGrow() {
    if (growing) {
      r *= 1.11;
      if (r >= rmax) growing = false;
    } else {
      r *= 0.95;
      if (r <= 1) growing = true;
    }
  }

  function draw() {
    if (!running) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    angles.forEach(circle);
    angles = angles.map(i => i + 2);

    checkGrow();

    requestAnimationFrame(draw);
  }

  onMount(() => {
    ctx = canvas.getContext("2d");
    ctx.fillStyle = fill;

    center = size / 2;
    r = rmax = size / 3;
    ri = size / 16;

    draw();

    return () => {
      running = false;
    }
  })
</script>

<style>
  canvas {
    margin: 0 auto;
  }
</style>

<canvas
  width={size}
  height={size}
  bind:this={canvas}
/>
