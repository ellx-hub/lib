<script>
	export let value = false;
  export let label = '';
</script>

<style>
  .track {
    margin-left: 2px;
    width: 40px;
    min-width: 40px;
    height: 20px;
    border: 1px solid gray;
    border-radius: 20px;
    position: relative;
    cursor: pointer;
    margin-right: 4px;
  }
  
  .thumb {
    width: 14px;
    height: 14px;
    position: absolute;
    top: 2px;
    border-radius: 50%;
    transition: all .2s;
  }
  
  .off .thumb {
    background: gray;
    left: 2px;
  }
  
  :global(.mode-dark) .on {
    border-color: white;
  }
  
  .on {
    border: 1px solid black;
  }
  
  :global(.mode-dark) .on .thumb {
    background: white;
  }
  
  .on .thumb {
    background: black;
    left: 22px;
  }
  
  label {
    font-family: Consolas, monaco, monospace;
    font-size: 12px;
  }

  input {
    display: none;
  }
</style>
<input type="checkbox" {value}>

<div class="flex items-center">
  <div class:on={value} class:off={!value} class="track" on:click={() => value = !value}>
    <div class="thumb"/>	
  </div>
  <label>
    {label}
  </label>
</div>