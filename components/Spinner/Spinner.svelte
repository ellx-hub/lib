<script>
  export let size = 20;
  export let fill = "currentColor";
</script>

<style>
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
    will-change: transform;
    animation: rotating 2s linear infinite;
  }
  svg {
    margin: 0 auto;
  }
  .collapsing-1 {
    animation: collapse-1 2s ease-in infinite;
  }
  @keyframes collapse-1 {
    0% {
      transform: translate(0);
    }
    50% {
      transform: translate(0%, 22%);
    }
    100% {
      transform: translate(0%, 0%);
    }
  }
  .collapsing-2 {
    animation: collapse-2 2s ease-in infinite;
  }
  @keyframes collapse-2 {
    0% {
      transform: translate(0);
    }
    50% {
      transform: translate(22%, -14%);
    }
    100% {
      transform: translate(0%, 0%);
    }
  }
  .collapsing-3 {
    animation: collapse-3 2s ease-in infinite;
  }
  @keyframes collapse-3 {
    0% {
      transform: translate(0);
    }
    50% {
      transform: translate(-25%, -13%);
    }
    100% {
      transform: translate(0%, 0%);
    }
  }
</style>

<div class="relative">
  <svg
    class="{$$props.class || ''} rotating absolute top-0 left-0"
    width="{size}px"
    height="{size}px"
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <circle class="collapsing-1" {fill} r="25" id="dot_1" cy="110" cx="200" />
      <circle class="collapsing-2" {fill} r="25" id="dot_2" cy="250" cx="100" />
      <circle class="collapsing-3" {fill} r="25" id="dot_3" cy="250" cx="300" />
    </g>
  </svg>
</div>
