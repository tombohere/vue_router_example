<template>
	<div id="list" class="nav_content">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
	export default {
  name: 'Rev2',
  data () {
    return {
      msg: 'This is Revision 2'
    }
  }
}
</script>

<style scoped>
#list {
  background-image: url(https://unsplash.it/500/800/?random&7);
}
</style>