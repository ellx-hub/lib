<script>
  export let value;
  export let options = [];
  export let label = '';
  export let dense = false;
  export let stale = false;
  export let disabled = stale;
  export let outlined = false;
</script>

<style>
  select {
    font-family: Consolas, monaco, monospace;
    height: 36px;
    width: 200px;
    outline: none;
    border-bottom: 1px dashed black;
  }

  .outlined {
    border: 1px solid black;
  }

  :global(.mode-dark) .outlined {
    border: 1px solid white;
  }

  :global(.mode-dark) select {
    color: white;
    border-bottom: 1px dashed lightGray;
  }

  :global(.mode-dark) select:focus {
    box-shadow: 0px 1px 0px 0px white;
  }

	select:focus {
    border-style: solid;
    box-shadow: 0px 1px 0px 0px black;
  }

	.outlined:focus, :global(.mode-dark) .outlined:focus {
    box-shadow: 0 0 0 1px inset;
  }

  .dense {
    height: 20px;
    width: 100px;
  }

  .disabled {
    pointer-events: none;
    color: lightGray;
    border-bottom: 1px solid lightGray;
  }

  :global(.mode-dark) .disabled {
    color: gray;
  }
</style>

<select class:dense bind:value class:disabled class:outlined>
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
