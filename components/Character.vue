<template id="modalCharacter">
 <div class="modal" @click="onCancel">
	<div class="modal-window">
    <div class="hero" v-for="(hero, index) in $parent.$parent.chars" v-bind:key="hero['.key']" @click="onConfirm(index)">
      <img :src="hero.img" />{{ hero.name }} <span class="check" v-if="index==$parent.$parent.select[0].select">&check;</span>
    </div>
	</div>
 </div>
</template>

<script>
export default {
  name: "modalCharacter",
  methods: {
    onConfirm(i) {
      this.$parent.$parent.changeSelect(i);
      this.$parent.confirmModal = false;
    },
    onCancel() {
      this.$parent.confirmModal = false;
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome and Opera */
}

.modal-window {
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 0.5s;
  width: 10%;
  min-width: 200px;
  max-width: 600px;
  background: #8e9eab;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #eef2f3, #8e9eab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%);
  padding: 1em;
  color: black;
  text-align: center;
  border-radius: 20px;
}

.modal-window .actions {
  display: flex;
  justify-content: flex-end;
}

.actions button {
  font-size: inherit;
  margin: 4px;
  border: 1px solid black;
  padding: 6px 8px;
  cursor: pointer;
  border-radius: 9px;
}

.actions .cancel {
  background: darkred;
  color: white;
}

.actions .confirm {
  background: darkcyan;
  color: white;
}

.appear-enter {
  opacity: 0;
}

.appear-enter .modal-window {
  transform: translate(-75%, -50%);
}

.appear-enter-active {
  transition: 0.3s;
}

.appear-leave-active .modal-window {
  transform: translate(0, -50%);
}

.appear-leave-active {
  opacity: 0;
  transition: 0.3s;
}

.hero {
  position:relative;
  text-align:left;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5em;
  margin-left: 34px;
  padding-left:15px;
  padding-right:15px;
  border-radius: 20px;
  cursor: pointer;
  white-space: nowrap;
}

.hero img {
  width:26px;
  position: absolute;
  margin-left: -46px;
}

.hero:hover {
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.check {
  position:absolute;
  font-size: 36px;
  color: blue;
  top: -4px;
  padding-left: 4px;
}
</style>