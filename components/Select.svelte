<script>
  export let value;
  export let options = [];
  export let label;
</script>

<style>
  select {
    font-family: Sonsolas, monospace;
    height: 36px;
    width: 200px;
    outline: none;
    background: #DFDFDF;
    padding: 0 .5rem;
  }
  
  input:focus {
    border-right: 2px solid #297EB3;
  }
  
  :global(.mode-dark) select {
    background: #2A2A2A;
    color: white;
  }
</style>

<select bind:value>
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