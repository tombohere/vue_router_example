<template id="modal">
 <div class="modal">
	<div class="modal-window">
    <img class="hero" :src="$parent.$parent.chars[$parent.$parent.select[0].select].img" />
	  <p><strong>Delete Task #{{ index+1 }} "{{ desc }}" ?</strong></p>
	  <div class="actions">
		 <button class="cancel" @click="onCancel">Cancel</button>
		 <button class="confirm" @click="onConfirm">Confirm</button>
	  </div>
	</div>
 </div>
</template>

<script>
export default {
  name: "modal",
  props: ["index", "desc"],
  methods: {
    onConfirm() {
      this.$emit("confirm");
    },
    onCancel() {
      this.$emit("cancel");
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
}

.modal-window {
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 0.5s;
  width: 40%;
  min-width: 250px;
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
  width: 150px;
  position: absolute;
  left: -85px;
  top: -20px;
}
</style>