<template>
  <div id="list" class="nav_content">
    <h1>{{ msg }}</h1>
    <pre>
    {{ JSON.stringify($parent.chars, undefined, 4) }}
    </pre>
  </div>
</template>

<script>
export default {
  name: "List2",
  data() {
    return {
      msg: "This is List2"
    };
  }
};
</script>

<style scoped>
#list {
  position: relative;
  background-color: lightyellow;
  z-index: 0;
  overflow: auto;
}

#list:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(http://ucooked.info/wp-content/uploads/2018/11/happy-thanksgiving-coloring-images-with-pages.png);
  width: 100%;
  height: 100%;
  opacity: 0.12;
  z-index: -1;
  background-position: bottom;
  background-size: cover;
}
</style>
