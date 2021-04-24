<script>
  export let value = false;
  export let label = '';
  export let dense = false;
  export let stale = false;
  export let disabled = stale;

  // TODO: import codicons? how to ship single icon?
</script>

<style>
  label {
    display: flex;
    align-items: center;
    height: 40px;
    font-family: Consolas, monaco, monospace;
    font-size: 12px;
  }

  label span {
    margin-left: 4px;
  }

  .dense {
    height: 20px;
  }

  .disabled {
    pointer-events: none;
    color: lightGray;
  }

  :global(.mode-dark) .disabled {
    color: gray;
  }
</style>

<label class:disabled class:dense>
  <input type="checkbox" checked={value} on:change={() => value = !value} />
  <span>{label}</span>
</label>
