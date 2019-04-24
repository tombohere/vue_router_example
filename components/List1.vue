<template>
  <div id="list" class="nav_content">
    <div class="title">{{ msg }}</div>
    <div class="list noselect">
      <div
        class="list_item"
        v-for="(t, index) in $parent.list_items1"
        :key="index"
      >
        <img :src="t[1]" /><span>{{ t[0] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List1",
  data() {
    return {
      msg: "This List is loaded from jsonbin.io"
    };
  },
  methods: {
    edit: function() {
      this.$parent.list_items1.splice(1, 1, "Tester");
      let req = new XMLHttpRequest();
      req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          alert(req.responseText);
        }
      };

      req.open(
        "PUT",
        "https://api.jsonbin.io/b/5be3538ed8c0374f1433eb28",
        true
      );
      req.setRequestHeader("Content-type", "application/json");
      req.setRequestHeader(
        "secret-key",
        "$2a$10$lkpm7DTVXW6ThcEV/R1MP.apkC81MNSMeWEdPzb/wW8VHxWCt.wVK"
      );
      req.setRequestHeader("versioning", "false");
      req.send('{"list": ' + JSON.stringify(this.$parent.list_items1) + "}");
    }
  }
};
</script>

<style scoped>
#list {
  position: relative;
  z-index: 0;
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

.list {
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 12px;
}
.list_item {
  position: relative;
  height: 40px;
  vertical-align: bottom;
  margin-left: 40px;
  font-size: 20px;
  font-weight: bold;
  z-index: 2;
}
.list_item span {
  display: inline-block;
  margin-top: 5px;
}
.list_item img {
  position: absolute;
  height: 32px;
  width: 32px;
  margin-left: -40px;
}
.title {
  background-color: rgba(255, 255, 255, 1);
  padding: 4px 10px 4px 10px;
  border-radius: 12px;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  border: 1px solid black;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
</style>
