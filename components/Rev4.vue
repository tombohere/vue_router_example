<template>
  <div id="list" class="nav_content">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Rev4",
  data() {
    return {
      msg: "This is Revision 4"
    };
  }
};
</script>

<style scoped>
#list {
  background-image: url(https://unsplash.it/500/800/?random&9);
}
</style>
