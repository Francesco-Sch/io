<script lang="ts">
  import { value } from './stores';

  let localValue = $value;
</script>

<style>
  .slidecontainer {
    display: flex;
    align-items: center;
    width: 99%;
    height: 50px;
  }

  .slidecontainer .slider {
    /* Override default CSS styles */
    -webkit-appearance: none;  
    appearance: none;

    width: 99%;
    height: 5px;
    background: #0000ff;
    outline: none;
  }

  .slidecontainer .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    background: #ffffff;
    border: 3px solid #0000ff;
    border-radius: 100px;
    cursor: pointer;
  }

  .slidecontainer .slider::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: #ffffff;
    border: 3px solid #0000ff;
    border-radius: 100px;
    cursor: pointer;
  }

  .value {
    display: flex;
    align-items: center;
    height: 200px;
    font: sans-serif;
    font-size: 12rem;
    font-weight: medium;
  }
</style>

<div class="slidecontainer">
  <input type="range" min="1" max="100" class="slider" bind:value="{localValue}" on:input={() => value.set(localValue)}>
</div>

<p class="value">{$value}</p>