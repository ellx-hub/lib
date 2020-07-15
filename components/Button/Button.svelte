<script>
	export let label = '';
	export let onClick = () => {};
  export let dense = false;
  export let size = 2;
</script>

<style>
	button {
    font-family: Consolas, monaco, monospace;
    height: 34px;
    font-weight: bold;
    border-radius: 0;
    box-sizing: border-box;
    padding: 0 .5rem;
    outline: none;
    text-transform: uppercase;
    letter-spacing: 2.5px;
  }
  
  button:hover {
    cursor: pointer;
  }
  
  button.dense {
    width: 100px;
    height: 20px;
    font-size: 0.7rem;
  }
  
  :global(.mode-dark) button {
    background: black;
    color: white;
  }
</style>

<button
  style="width: {(dense ? 1 : size) * 100}px"
  class:dense
  {...$$props}
  on:click={onClick}
	on:click
>
  <slot>{label}</slot>
</button>