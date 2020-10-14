<script>
  export let value;
  export let options = [];
  export let direction = 'vertical';
  export let stale = false;
  export let disabled = stale;
</script>

<style>
  .flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-row {
    flex-direction: row;
  }
  label {
    height: 20px;
    padding: 4px 8px;
    font-family: Consolas, monaco, monospace;
    font-size: 12px;
  }
  .items-center {
    align-items: center;
  }
  .ml-2 {
    margin-left: .2rem;
  }
  
  .disabled {
    pointer-events: none;
    color: lightGray;
  }
  
  :global(.mode-dark) .disabled {
    color: gray;
  }
</style>

<div
  class="flex"
  class:disabled
  class:flex-col={direction === 'vertical'}
  class:flex-row={direction === 'horizontal'}
>
  {#each options as option}
    <label class="flex items-center">
      <input bind:group={value} type="radio" value={option} />
      <span class="ml-2">{option}</span>
    </label>
  {/each}
</div>
