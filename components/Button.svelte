<script>
	export let label = '';
	export let onClick = () => {};
</script>

<style>
	button {
    font-family: Consolas, monaco, monospace;
    height: 34px;
    border-radius: 0;
    min-width: 200px;
    box-sizing: border-box;
    padding: 0 .5rem;
    outline: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
    background: #237EB3;
    transition: background .1s;
  }
  
  button:hover {
    cursor: pointer;
    background: #237EBF;
  }
  
</style>

<button {...$$props} on:click={onClick}>
  {label}
</button>