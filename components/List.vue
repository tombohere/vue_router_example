<template>
	<div id="list" class="nav_content">
    <div>
		  <h1>{{ msg }}</h1>
    </div>
    <div class="box">
      Task List (vee-validate & vue-localstorage)
      <div v-for="(t, index) in tasks" :key='index'>
        {{ index + 1 }}
        <button @click="confirmDelete(index, t.task)">Delete</button>
        {{ t.task }}
      </div>
      <form @submit.prevent="addTask">
        <input type="text" placeholder="enter new task here" v-model="task" v-validate="'min:5|required'" name="task" autocomplete="off">
        <transition name="alert-in">
          <p class="alert" v-if="errors.has('task')">{{ errors.first('task') }}</p>
        </transition>
      </form>
    </div>
    <transition name="appear">
      <modal :index="selectedIndex" :desc="selectedDesc" v-if='confirmModal' @confirm='removeTask' @cancel="cancelDelete"></modal>
    </transition>
	</div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      msg: "List",
      confirmModal: false,
      selectedIndex: null,
      selectedDesc: null,
      task: "",
      tasks: [{ task: "task1" }, { task: "task2" }, { task: "task3" }]
    };
  },
  methods: {
    removeTask: function() {
      this.confirmModal = false;
      this.tasks.splice(this.selectedIndex, 1);
    },
    addTask() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.tasks.push({ task: this.task });
          this.task = "";
        } else {
          console.log("Not valid");
        }
      });
    },
    confirmDelete(i, d) {
      this.selectedIndex = i;
      this.selectedDesc = d;
      this.confirmModal = true;
    },
    cancelDelete() {
      this.confirmModal = false;
    }
  },

  watch: {
    tasks: {
      handler() {
        localStorage.setItem("ltasks", JSON.stringify(this.tasks));
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.getItem("ltasks"))
      this.tasks = JSON.parse(localStorage.getItem("ltasks"));
  }
};
</script>

<style scoped>
#list {
/*  background-image: url(https://unsplash.it/500/800/?random&2);*/
background-color: #7c857c;
background-image: url("https://www.transparenttextures.com/patterns/clean-textile.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
}

input {
  width: calc(100% - 40px);
  border: 0;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding-left: 10px;
}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  marging-top: 20px;
}

.alert-in-enter-active {
  animation: bounce-in 0.5s;
}

.alert-in-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale (0);
  }
  50% {
    transform: scale (1.5);
  }
  100% {
    transform: scale (1);
  }
}

button {
  border-radius: 12px;
  outline: none;
}

.box {
  font-size: 24px;
}

.box input {
  font-size: 18px;
}
</style>
