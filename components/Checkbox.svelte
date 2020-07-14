<script>
  export let value;
	export let label;

	// TODO: import codicons? how to ship single icon?
</script>

<style>
  label {
    display: flex;
    align-items: center;
  }

	label span {
    margin-left: 4px;
  }
</style>

<label>
  <input type="checkbox" {value} />
  <span>{label}</span>
</label>