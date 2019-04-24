<template>
	<div id="hero" class="nav_content">
		<h1>Hero</h1>
    <div class="hero" v-for="(hero, index) in $parent.chars" v-bind:key="hero['.key']" @click="$parent.changeSelect(index)">
      <img :src="hero.img" /> {{ index+1 }}. {{ hero.name }}
      <span class="check" v-if="index==$parent.select[0].select">&check;</span>
    </div>
<!--
   <div>
      <input type="text" id="img" v-model="newChar.img">
      <input type="text" id="name" v-model="newChar.name">
      <button @click="$parent.addChar(newChar)">ADD</button>
    </div>
-->
	</div>
</template>

<script>

export default {
  name: "hero",
  data() {
    return {
      msg: "Select Character",
      newChar: {
        'img': "",
        'name': ""
      }
    };
  }
};
</script>

<style scoped>
#hero {
/*  background-image: url(http://images.hellokids.com/_uploads/_tiny_galerie/20130624/vign-superhero-gek_dkc.jpg); */
background-color: #c0b8d1;
background-image: url("https://www.transparenttextures.com/patterns/arches.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
}

.hero {
  height: 28px;
  padding: 0px;
  position:relative;
  margin-left:50px;
  padding-left:10px;
  padding-top:0px;
}

.hero:hover {
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 32px;
  cursor: pointer;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
}

.hero img {
  width:40px;
  opacity: 0.0;
  position: absolute;
  left: -50px;
  top: -5px;
}

.hero:hover img {
  transform: scale(2);
  opacity: 1;
  z-index: 999999;
}

.hero,
.hero * {
  font-size: 20px;
  font-weight: bold;
  vertical-align: middle;
}

.check {
  position:absolute;
  font-size: 40px;
  color: blue;
  top: -22px;
}

</style>