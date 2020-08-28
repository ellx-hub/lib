<script>
  import Tree from 'svelte-json-tree';
	
	export let value = "";
  
  let showing = new Set();

	function onClick(e) {
    const fnNode = e.path.find(a => a.classList && 
			(a.classList.contains('Function') || showing.has(a))
		);
    
    if (fnNode) {
     	fnNode.classList.toggle('show');
      if (fnNode.classList.contains('show')) {
        showing.add(fnNode);
      } else {
        showing.remove(fnNode);
      }
    }
  }
</script>

<style>
  :global(#md) .tree :global(ul) {
    padding: 0;
    margin: 0;
  }
  
  .tree :global(.Function:before) {
    content: "[Function]";
    font-size: 12px;
    color: var(--function-color);
    letter-spacing: normal;
    font-style: normal;
  }
  
  .tree :global(.Function) {
    font-size: 1px;
    letter-spacing: -1px;
    color: transparent;
  }

	.tree :global(.Function:hover) {
    cursor: pointer;
  }

	.tree :global(.Function.show:before) {
    content: "";
  }

	.tree :global(.Function.show) {
    font-size: inherit;
    letter-spacing: inherit;
    color: inherit;
    word-wrap: break-word !important;
    white-space: break-spaces !important;
  }
  
  .tree {
    padding: 1rem;
    border: 1px solid currentColor;
    background: white;
    max-width: 500px;
  }
  
  :global(.mode-dark) .tree {
    background: #212121;
  }
</style>

<div on:click={onClick} class="tree" style="--json-tree-font-family: monaco, monospace;">
	<Tree {value} />
</div>
  