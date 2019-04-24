<template>
  <div id="list" class="nav_content">
    <h1>{{ msg }}</h1>
    <pre>
    {{ JSON.stringify($parent.list_items1, undefined, 4) }}
    </pre>
  </div>
</template>

<script>
export default {
  name: "Rev3",
  data() {
    return {
      msg: "This is Revision 3"
    };
  }
};
</script>

<style scoped>
#list {
  position: relative;
  z-index: 0;
  overflow: auto;
}

#list:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(https://oxen.tech/wp-content/uploads/2018/05/tech-tip-background.jpg);
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: -1;
}
</style>
