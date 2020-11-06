<script>
  export let min = 0;
  export let step = 1;
  export let max = 100;
  export let value = 50;
  export let size = 2;
  export let stale = false;
  export let disabled = stale;
  export let dense = false;
</script>

<style>
  .dense {
    height: 20px;
    width: 100px;
  }
</style>

<input
  class:dense
  disabled={disabled || stale}
  type="range"
  bind:value
  {step}
  {size}
  {min}
  {max} />
