<script>
  export let min = 0;
  export let max = 100;
  export let value = 50;
  export let dense = false;
</script>

<style>
  .dense {
    width: 100px;
  }
</style>

<input class:dense type="range" bind:value {min} {max} {...$$props}>
