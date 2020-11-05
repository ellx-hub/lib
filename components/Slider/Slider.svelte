<script>
  import Input from '/components/Input/Input.svelte';
  export let min = 0;
  export let max = 100;
  export let value = 50;
  export let dense = false;
  export let size = 2;
  export let stale = false;
  export let disabled = stale;
</script>

<style>
  .dense {
    width: 100px;
  }
  .disabled {
    pointer-events: none;
    color: lightGray;
  }

  :global(.mode-dark) .disabled {
    color: gray;
  }
</style>

<Input
  type="range"
  bind:value
  {size}
  {dense}
  {min}
  {max}
/>
