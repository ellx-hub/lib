<script>
	export let label = '';
	export let onClick = () => {};
  export let dense = false;
</script>

<style>
	button {
    font-family: Consolas, monaco, monospace;
    height: 34px;
    font-weight: bold;
    border-radius: 0;
    min-width: 200px;
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
    min-width: 100px;
    height: 20px;
  }
</style>

<button class:dense {...$$props} on:click={onClick}>
  {label}
</button>