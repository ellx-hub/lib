<script>
	export let value;
  
  function read(e) {
    var file = e.target.files.item(0);
    var reader = new FileReader();

    reader.onload = function() {
      value = reader.result;
    }

    reader.readAsText(file);
  }
</script>

<style>
  :global(.mode-dark) input {
    color: white;
  }
</style>

<input
  type="file"
  on:change={read}
/>