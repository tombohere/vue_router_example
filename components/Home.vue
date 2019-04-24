<template>
  <div id="home" class="nav_content">
    <div>
      <div class="box1">This is my Vue example program. It incorporates
        <br>
        <ul>
          <li>Vue.js</li>
          <li>vue-router</li>
          <li>vee-validate</li>
          <li>vue-localstorage</li>
          <li>vuefire + firebase (heros stored in firebase)</li>
          <li>
            Comments are stored at
            <a href="http://backendless.com" target="_blank">backendless.com</a>&nbsp;
            <a
              href="https://api.backendless.com/215B8594-CF22-8240-FF16-8046BF4B7600/8E7D8EBD-64B1-9DDB-FFE9-DD778CC30900/data/Comments?props=comment&sortBy=created%20asc"
              target="_blank"
            >view comments</a>
          </li>
          <li>
            vue-toasted
            <a href="#" @click="toast">Test</a>
          </li>
        </ul>
        <button
          class="button1"
          v-bind:style="{
            'background-image':
              'url(' + $parent.chars[$parent.select[0].select].img + ')'
          }"
          @click="chooseCharacter"
        ></button>
        <br>
        <div class="comment_section" @click="showComment = true;">
          <img
            id="commentButton"
            src="https://cdn3.iconfinder.com/data/icons/fatcow/32/comment_edit.png"
          >
        </div>
        <div class="comment" v-show="showComment">Send a comment or question
          <br>
          <textarea id="text1" class="textarea1" autofocus></textarea>
          <br>
          <button class="button2" @click="send">SEND</button>
        </div>Click above to change character
      </div>
    </div>
    <transition name="appear">
      <modalCharacter v-if="confirmModal"></modalCharacter>
    </transition>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      confirmModal: false,
      showComment: false
    };
  },
  methods: {
    chooseCharacter() {
      this.confirmModal = true;
    },
    send: function() {
      if (document.getElementById("text1").value != "") {
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
          if (req.readyState == XMLHttpRequest.DONE) {
            this.$toasted.show("Comment added");
          }
        };
        req.open(
          "POST",
          "https://api.backendless.com/215B8594-CF22-8240-FF16-8046BF4B7600/8E7D8EBD-64B1-9DDB-FFE9-DD778CC30900/data/Comments",
          true
        );
        req.setRequestHeader("Content-type", "application/json; charset=utf-8");
        req.send(
          '{"comment": "' + document.getElementById("text1").value + '"}'
        );
        document.getElementById("text1").value = "";
      }
      this.showComment = false;
    },
    toast: function() {
      this.$toasted.show("Toast test");
    }
  }
};
</script>

<style scoped>
#home {
  /*  background-image: url(https://unsplash.it/500/800/?random&1);*/
  background-color: #799db8;
  background-image: url("https://www.transparenttextures.com/patterns/subtle-grey.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  position: relative;
}

.box1 {
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  background-image: url(https://vuejs.org/images/logo.png);
  background-size: 100px;
  background-repeat: no-repeat;
  background-position: right bottom;
}

.button1 {
  font-size: 32px;
  border-radius: 99px;
  height: 100px;
  width: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  outline: none;
  background-color: lightsteelblue;
}

.comment_section::before {
  content: "Make Comment";
  position: absolute;
  white-space: nowrap;
  font-size: 16px;
  right: 36px;
}

.comment_section {
  position: absolute;
  top: 80px;
  right: 30px;
  cursor: pointer;
}
.comment {
  font-size: 14px;
  background-color: lightblue;
  position: absolute;
  top: 80px;
  right: 30px;
  padding: 4px;
  box-shadow: 2px 2px gray;
  border-radius: 10px;
  border: 1px solid black;
}

.textarea1 {
  height: 36px;
  width: 150px;
  font-family: "Abel", sans-serif;
  border: 0px;
  resize: none;
}
.button2 {
  font-size: 12px;
  font-weight: bold;
  border-radius: 12px;
}
</style>
