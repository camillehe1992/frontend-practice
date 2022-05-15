<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <emenu />
      </el-col>
      <el-col :span="19">
        <elife />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <emovie />
      </el-col>
    </el-row>
    <el-row :span="24">
      <eapartment />
    </el-row>
    <el-row :span="24">
      <erecommend />
    </el-row>
    <el-row :span="24">
      <enavigation />
    </el-row>
  </div>
</template>

<script>
import Emenu from '@/components/index/menu.vue'
import Elife from '@/components/index/life.vue'
import Emovie from '@/components/index/movie.vue'
import Eapartment from '@/components/index/apartment.vue'
import Erecommend from '@/components/index/recommend.vue'
import Enavigation from '@/components/index/navigation.vue';

export default {
  components: {
    Emenu,
    Elife,
    Emovie,
    Eapartment,
    Erecommend,
    Enavigation
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/index/index.scss";
</style>
