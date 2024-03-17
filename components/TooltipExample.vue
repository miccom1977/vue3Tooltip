<template>
  <div>
    <!--element with title attribute -->
    <button v-tooltip title="toltip <strong>text</strong>">onmouse me</button>
  </div>
</template>

<script>
import { TooltipDirective } from "@/directives/TooltipDirective.js";

export default {
  name: 'TooltipExample', // component name
  directives: {
    Tooltip: TooltipDirective // add directive
  }
};
</script>

<style>
/* Sample styling for tooltip */
  #infoTooltip {
    display:none;
    position:absolute;
    border:1px solid #333;
    border-radius: 15px;
    box-shadow: 2px 2px 10px #000, -2px -2px 10px #000;
    background-color: blue;
    padding:10px;
    color:#fff;
    font-size:12px;
    z-index:5;
    text-align: center;
    max-width:300px;
}
</style>
