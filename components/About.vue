<template>
	<div id="about" class="nav_content">
		<h1>{{ msg }}</h1>
    <img :src="$parent.chars[$parent.select[0].select].img" @click="showModal = true" />
	</div>
</template>

<script>
	export default {
  name: 'About',
  data () {
    return {
      msg: 'About'
    }
  }
}
</script>

<style scoped>
#about {
/*  background-image: url(https://unsplash.it/500/800/?random&3);*/
background-color: #7788ba;
background-image: url("https://www.transparenttextures.com/patterns/binding-light.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
}
</style>