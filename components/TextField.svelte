<script>
  export let value = '';
</script>

<style>
  input {
    font-family: Consolas, monaco, monospace;
    height: 34px;
    border-radius: 0;
    min-width: 200px;
    box-sizing: border-box;
    padding: 0 .5rem;
    outline: none;
    background: #DFDFDF;
  }
  
  :global(.mode-dark) input {
    color: white;
    background: #2A2A2A;
  }
  
  input:focus {
    border-right: 1px solid #297EB3;
  }
  
  label {
    position: absolute;
    top: 0;
    right: 0;
  }
  
  label, input::-moz-placeholder {
    font-size: 12px;
    margin: 1px 1px 0 0;
    padding: 9px 7px 0 0;
  }

  label, input:-ms-input-placeholder {
    font-size: 12px;
    margin: 1px 1px 0 0;
    padding: 9px 7px 0 0;
  }

  label, input::-webkit-input-placeholder {
    font-size: 12px;
    margin: 1px 1px 0 0;
    padding: 9px 7px 0 0;
  }
  
  :global(.mode-dark) label {
    background: #2A2A2A;
  }
  
  .wrapper {
    position: relative;
  }
</style>

<div class="wrapper">
  <input
    type="text"
    autocomplete="off"
    autocorrect="off"
    spellcheck="false"
    bind:value
    placeholder={$$props.label || $$props.placeholder}
    {...$$props}
    on:click
  />
  {#if value !== '' && $$props.label}
    <label>{$$props.label}</label>
  {/if}
</div>