<script>
	export let label = '';
	export let onClick = () => {};
  export let dense = false;
  export let size = 2;
  export let stale = false;
  export let disabled = stale;
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
    border: 1px solid black;
    transition: all .2s ease-in;
  }
  
  button:hover {
    cursor: pointer;
    background: black;
    color: white;
  }
  
  button.dense {
    width: 100px;
    height: 20px;
    font-size: 0.7rem;
  }
  
  :global(.mode-dark) button {
    background: black;
    color: white;
    border: 1px solid white;
  }
  
  :global(.mode-dark) button:hover {
    background: white;
    color: black;
    border: 1px solid black;
  }
  
  .disabled {
    pointer-events: none;
    color: lightGray;
    background: #EEE;
    cursor: default;
    border: 1px solid lightGray;
  }
  
  :global(.mode-dark) .disabled {
    background: #AAA;
    color: gray;
    border: none;
  }
</style>

<button
  class:disabled
  style="width: {(dense ? 1 : size) * 100}px"
  class:dense
  {...$$props}
  on:click={onClick}
	on:click
>
  <slot>{label}</slot>
</button>