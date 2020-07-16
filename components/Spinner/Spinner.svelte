<script>
  const keyTimes = "0; 0.2; 0.8; 1";

  export let dur = "2s";
  export let size = 20;
  export let fill = "default";
</script>

<style>
  .ellipse {
    fill: black;
  }
  
  :global(.mode-dark) {
    fill: white;
  }
  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(720deg);
    }
  }
  .rotating {
    animation: rotating 2s linear infinite;
  }
  
  svg {
    margin: 0 auto;
  }
</style>

<svg class="{$$props.class || ''} rotating" width="{size}px" height="{size}px" viewBox="0 0 400 400"  xmlns="http://www.w3.org/2000/svg">
  <g>
    <ellipse {fill} ry="25" rx="25" id="dot_1" cy="110" cx="200">
      <animate attributeName="cy" values="200;110;200;200" {keyTimes} {dur} repeatCount="indefinite" />
      <animate attributeName="cx" values="200;200;200;200" {keyTimes} {dur} repeatCount="indefinite" />
    </ellipse>
    <ellipse {fill} ry="25" rx="25" id="dot_2" cy="250" cx="100">
      <animate attributeName="cy" values="200;250;200;200" {keyTimes} {dur} repeatCount="indefinite" />
      <animate attributeName="cx" values="200;100;200;200" {keyTimes} {dur} repeatCount="indefinite" />
    </ellipse>
    <ellipse {fill} ry="25" rx="25" id="dot_3" cy="250" cx="300">
      <animate attributeName="cy" values="200;250;200;200" {keyTimes} {dur} repeatCount="indefinite" />
      <animate attributeName="cx" values="200;300;200;200" {keyTimes} {dur} repeatCount="indefinite" />
    </ellipse>
  </g>
</svg>

