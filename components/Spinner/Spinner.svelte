<script>
  import { onMount, tick } from "svelte";

  export let size = 20;
  export let fill = "currentColor";

  export let rPeriod = 2000;
  export let wPeriod = 3000;

  const center = size * 0.5;
  const dotRadius = size / 16;

  const start = Date.now();

  let canvas, ctx, container;

  function draw() {
    const dt = Math.PI * (Date.now() - start);
    let r = Math.cos(dt / rPeriod);
    r *= r * size * 3 / 8;
    const w = 2 * dt / wPeriod;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let k of [3, 7, 11]) {
      ctx.beginPath();
      ctx.arc(
        center + r * Math.cos(k * Math.PI / 6 + w),
        center - r * Math.sin(k * Math.PI / 6 + w),
        dotRadius,
        0, 2 * Math.PI
      );
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    tick().then(() => {
      ctx.fillStyle = window.getComputedStyle(container).getPropertyValue('color');
      requestAnimationFrame(draw);
    });
  });

</script>

<div bind:this={container} style="margin: 0 auto; color: {fill};">
  <canvas
    style="margin: 0 auto;"
    width={size}
    height={size}
    bind:this={canvas}
  />
</div>
