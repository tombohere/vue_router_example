<template>
  <div id="app" class="content">
    <div id="preloaded-images">
      <img src="http://lorempixel.com/500/800/?random&1" width="1" height="1" alt>
      <img src="http://lorempixel.com/500/800/?random&2" width="1" height="1" alt>
      <img src="http://lorempixel.com/500/800/?random&3" width="1" height="1" alt>
    </div>
    <div class="nav">
      <img :src="chars[select[0].select].img" @click="showModal = true;">
      <ul>
        <router-link to="/" tag="li" v-bind:class="$route.path == '/' ? 'is-chosen' : 'is-not'">
          <a>Home</a>
        </router-link>
        <router-link
          to="/list"
          tag="li"
          v-bind:class="$route.path == '/list' ? 'is-chosen' : 'is-not'"
        >
          <a>List</a>
          <ul>
            <router-link to="/list/list1" tag="li">
              <a>List 1</a>
              <ul>
                <router-link to="/list/list1/rev1" tag="li">
                  <a>Rev 1</a>
                </router-link>
                <router-link to="/list/list1/rev2" tag="li">
                  <a>Rev 2</a>
                </router-link>
              </ul>
            </router-link>
            <router-link to="/list/list2" tag="li">
              <a>List 2</a>
              <ul>
                <router-link to="/list/list2/rev3" tag="li">
                  <a>Rev 3</a>
                </router-link>
                <router-link to="/list/list2/rev4" tag="li">
                  <a>Rev 4</a>
                </router-link>
              </ul>
            </router-link>
          </ul>
        </router-link>
        <router-link
          to="/hero"
          tag="li"
          v-bind:class="$route.path == '/hero' ? 'is-chosen' : 'is-not'"
        >
          <a>Hero</a>
        </router-link>
        <router-link
          to="/about"
          tag="li"
          v-bind:class="$route.path == '/about' ? 'is-chosen' : 'is-not'"
        >
          <a>About</a>
        </router-link>
      </ul>
    </div>
    <div class="content-1">
      <transition name="fade" mode="out-in">
        <router-view>Content Here</router-view>
      </transition>
    </div>
    <footer class="footer">{{ $route.path }}</footer>
  </div>
</template>

<script>
import Firebase from "firebase";

let config1 = { databaseURL: "https://test-472d2.firebaseio.com" };
let app1 = Firebase.initializeApp(config1);
let db1 = app1.database();
let charRef = Firebase.database().ref("characters");
let selectRef = Firebase.database().ref("select");

export default {
  name: "app",
  data() {
    return {
      list_items1: [],
      list_icons: []
    };
  },
  firebase: {
    chars: db1.ref("characters"),
    select: db1.ref("select")
  },
  methods: {
    changeSelect: function(n) {
      let key = this.select[0][".key"];
      selectRef.child(key).remove();
      selectRef.push({ select: n });
    },
    addChar: function(c) {
      charRef.push(c);
    }
  },
  mounted() {
    let req = new XMLHttpRequest();
    let req2 = new XMLHttpRequest();
    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        this.list_items1 = JSON.parse(req.responseText).list;
      }
    };
    req.open(
      "GET",
      "https://api.jsonbin.io/b/5be3538ed8c0374f1433eb28/4",
      true
    );
    req.setRequestHeader(
      "secret-key",
      "$2a$10$lkpm7DTVXW6ThcEV/R1MP.apkC81MNSMeWEdPzb/wW8VHxWCt.wVK"
    );
    req.send();

    req2.onreadystatechange = () => {
      if (req2.readyState == XMLHttpRequest.DONE) {
        this.list_icons = JSON.parse(req2.responseText);
      }
    };
    req2.open(
      "GET",
      "https://api.backendless.com/215B8594-CF22-8240-FF16-8046BF4B7600/8E7D8EBD-64B1-9DDB-FFE9-DD778CC30900/data/Graphics?pageSize=100&sortBy=name%20asc",
      true
    );
    req2.send();
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

div#preloaded-images {
  position: absolute;
  left: -9999;
  top: -9999;
}

.nav {
  font-family: "Abel", sans-serif;
  /*  background-color: rgba(140, 59, 66, 0.8);
  background-image: url(https://unsplash.it/g/1200/40/?random&blur);*/
  background-color: #17181f;
  background-image: url("https://www.transparenttextures.com/patterns/dark-denim-3.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  user-select: none;
  /*  box-shadow: inset 0 0 0 100px rgba(0, 0, 0, 0.5);*/
  /* faded color ontop of background */
  z-index: 99;
  border-bottom: 1px solid black;
}

.nav .is-chosen {
  background-color: black;
}

.nav ul {
  list-style: none;
  text-align: left;
  padding: 0;
  margin: 0;
}

.nav li {
  display: inline-block;
  text-align: left;
}

.nav a {
  text-decoration: none;
  display: block;
  width: 80px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: "Abel", sans-serif;
  font-size: 20px;
  line-height: 2em;
  text-align: center;
  color: white;
  height: 2em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.nav a:hover {
  background-color: rgba(68, 29, 32, 0.8);
}

.nav li ul {
  position: absolute;
  display: none;
  width: 100px;
  z-index: 100;
  outline: 1px solid black;
}

.nav > ul > ul > ul {
  display: none;
}

.nav li ul li ul li a {
  background-color: rgba(193, 108, 115, 0.8);
}

.nav li:hover > ul {
  display: inline;
}

.nav li li:hover ul {
  position: absolute;
  margin-top: -1.5em;
  left: 95px;
  display: inline-block;
}

.nav li ul li a {
  background-color: rgba(176, 74, 83, 0.8);
  font-size: 16px;
  line-height: 2em;
  text-align: left;
}

.is-chosen {
  /*
  pointer-events: none;
  cursor: default;
  */
}

.is-chosen span {
  transform: scale(1.6);
}

.is-not span:hover {
  text-decoration: underline;
}

.content {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  background-color: lightsteelblue;
  min-height: 100%;
  min-width: 400px;
  border-right: 1px solid black;
  border-left: 1px solid black;
  box-shadow: 12px 0 15px -4px rgba(0, 0, 0, 0.4),
    -12px 0 8px -4px rgba(0, 0, 0, 0.4);
}

.content-1 {
  display: flex;
  flex: 1;
}

.footer {
  color: white;
  /*  background-color: rgba(140, 59, 66, 0.8);
  background-image: url(https://unsplash.it/g/1200/40/?random&blur);*/
  background-color: #17181f;
  background-image: url("https://www.transparenttextures.com/patterns/dark-denim-3.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  padding: 11px;
  margin: 0;
  z-index: 99;
  border-top: 1px solid black;
  /*  box-shadow: inset 0 0 0 100px rgba(0, 0, 0, 0.5);*/
  /* faded color ontop of background */
}

div.route {
  width: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.5);
  /* faded color ontop of background */
}

.nav img {
  position: absolute;
  width: 80px;
  top: 6px;
  right: 4px;
}

.toaster * {
  border-width: 5px;
  font-size: 32px;
}

.toaster2,
.toaster2 * {
  font-size: 48px;
}
</style>
