<script>
  export let min = 0;
  export let max = 100;
  export let value = 50;
</script>

<input type="range" bind:value {min} {max} {...$$props}>
