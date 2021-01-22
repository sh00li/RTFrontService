<template>
  <div class="gg">
    <div style="font-family:iranSans;">
      ایران سن یدیبدیبی بیذیبدیبدیسبلد دبپل برلپبلپب
    </div>
    <div style="font-family:dana">
      ذانا دانایبذیبذیبذیبذی بلتدبلدبلتد زلدبلد
    </div>
    <v-checkbox
      v-model="checkbox1"
      :label="`Checkbox 1: ${checkbox1.toString()}`"
    ></v-checkbox>
  </div>
</template>

<script>


export default {
  layout: 'home',
  data () {
    return {
      checkbox1: true
    }
  },
}
</script>
<style lang="scss" scoped>
.gg{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  display:block;
  text-align:center
}
</style>

