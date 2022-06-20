<template>
  <div>
    <h2>Word Cloud</h2>
    <div id="word-text-area">
      <el-input
        type="textarea"
        :rows="10"
        v-model="textarea"
        placeholder="Please enter..."
      >
      </el-input>
      <div id="word-img">
        <el-image :src="'data:image/png;base64,' + pic" fit="fit">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"> </i>
          </div>
        </el-image>
      </div>
      <div id="word-operation">
        <el-row>
          <el-button type="primary" @click="onSubmit" round
            >Generate Word Cloud</el-button
          >
          <el-button type="success" @click="onDownload" round
            >Download Picture</el-button
          >
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WordCloud",
  data() {
    return {
      textarea: "",
      pic: "",
      pageTitie: "Flask Vue Word Cloud",
    };
  },
  methods: {
    onSubmit() {
      const param = {
        word: this.textarea,
      };
      this.axios
        .post("/word/cloud/generate", param)
        .then((res) => {
          this.pic = res.data;
          console.log(res.data);
        })
        .catch((res) => {
          console.log(res.data.res);
        });
    },
    onDownload() {
      const imgUrl = `data:image/png;base64,${this.pic}`;
      const a = document.createElement("a");
      a.herf = imgUrl;
      a.setAttribute("download", "word-cloud");
      a.click();
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
