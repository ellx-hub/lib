<script>
  export let value;
  export let options = [];
  export let label = '';
  export let dense = false;
</script>

<style>
  select {
    font-family: Sonsolas, monospace;
    height: 36px;
    width: 200px;
    outline: none;
    border-bottom: 1px dashed black;
  }
  
  input:focus {
    border-bottom: 1px solid black;
  }
  
  :global(.mode-dark) select {
    color: white;
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