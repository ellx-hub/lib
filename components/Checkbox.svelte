<script>
  export let value = false;
	export let label;
  export let dense = false;

	// TODO: import codicons? how to ship single icon?
</script>

<style>
  label {
    display: flex;
    align-items: center;
    height: 40px;
  }

	label span {
    margin-left: 4px;
  }
  
  .dense {
    height: 20px;
  }
</style>

<label class:dense>
  <input type="checkbox" on:change={() => value = !value} />
  <span>{label}</span>
</label>