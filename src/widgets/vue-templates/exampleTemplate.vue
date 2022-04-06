<template>
  <div>
      <section>
          <label>Write some text:</label><br>
          <input type="text" v-model="text" class="input">
      </section>
      <section style="margin-top: 20px;">
          <p class="output">
              {{ text }}
          </p>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style id="">
.vuetify-styles input.input {
    border: 1px solid lightgray;
    margin-bottom: 1rem;
}
.output {
    font-size: 3rem;
    color:deeppink;
}
</style>