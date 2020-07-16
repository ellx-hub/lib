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

  .outlined:focus {
    border-width: 2px;
  }

  :global(.mode-dark) .outlined {
    border: 1px solid white;
  }

  input:focus {
    border-bottom: 2px solid black;
  }

  :global(.mode-dark) select {
    background: transparent;
    color: white;
    border-bottom: 1px dashed white;
  }

  :global(.mode-dark) select:focus {
    border-bottom: 2px solid white;
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
