<script>
  export let value;
  export let options = [];
  export let label = '';
  export let dense = false;
</script>

<style>
  select {
    font-family: Consolas, monaco, monospace;
    height: 36px;
    width: 200px;
    outline: none;
    border-bottom: 1px dashed black;
  }
  
  input:focus {
    border-bottom: 1px solid black;
  }
  
  :global(.mode-dark) select {
    background: transparent;
    color: white;
    border-bottom: 1px dashed white;
  }
  
  :global(.mode-dark) select:focus {
    border-bottom: 1px solid white;
  }
  
  .dense {
    height: 20px;
    width: 100px;
  }
</style>

<select class:dense bind:value>
  {#if label}
    <option value=''>{label}</option>
	{/if}
  {#each options || [] as option}
  	<option
			value={option.value || option}
      selected={option.value === value || option === value}
    >{option.text || option.value || option}</option>
  {/each}
</select>