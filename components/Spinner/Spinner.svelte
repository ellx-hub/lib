<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  export let size = 160;
  export let fill = "currentColor";

  const angles = writable([90, 210, 330]);
  let running = true;

  let center = 200;
  let r, rmax;
  r = rmax = 120;
  let ri = 25;
  let tm;

  const x = angle => center + r * Math.cos(-angle * Math.PI / 180);
  const y = angle => center + r * Math.sin(-angle * Math.PI / 180);

  let growing = false;

  function checkGrow() {
    if (growing) {
      r *= 1.25;
      if (r >= rmax) growing = false;
    } else {
      r *= 0.9;
      if (r <= 1) growing = true;
    }
  }

  function draw() {
    if (!running) return;

    $angles = $angles.map(i => i + 2);

    checkGrow();

    tm = setTimeout(() => requestAnimationFrame(draw), 40);
  }

  onMount(() => {
    draw();

    return () => {
      running = false;
      clearTimeout(tm);
    }
  })
</script>

<style>
  svg {
    margin: 0 auto;
  }
  circle {
    will-change: translate;
  }
</style>

<svg class="{$$props.class || ''} z-40" width="{size}px" height="{size}px" viewBox="0 0 400 400"  xmlns="http://www.w3.org/2000/svg">
  <g>
    {#each $angles as angle}
      <circle fill={fill} r={ri} cx=0 cy=0 style="transform: translate({x(angle)}px, {y(angle)}px)" />
    {/each}
  </g>
</svg>
