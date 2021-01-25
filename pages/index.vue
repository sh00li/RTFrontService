<template>
  <div class="gg">
    <div class="sans">
      <div style="font-weight:100"> ایران سن یدیبدیبی بیذیبدیبدیسبلد دبپل برلپبلپب</div>
      <div style="font-weight:200"> ایران سن یدیبدیبی بیذیبدیبدیسبلد دبپل برلپبلپب</div>
      <div style="font-weight:300"> ایران سن یدیبدیبی بیذیبدیبدیسبلد دبپل برلپبلپب</div>
      <div style="font-weight:400"> ایران سن یدیبدیبی بیذیبدیبدیسبلد دبپل برلپبلپب</div>
      <div style="font-weight:500"> ایران سن یدیبدیبی بیذیبدیبدیسبلد دبپل برلپبلپب</div>
      <div style="font-weight:600"> ایران سن یدیبدیبی بیذیبدیبدیسبلد دبپل برلپبلپب</div>
      <div style="font-weight:700"> ایران سن یدیبدیبی بیذیبدیبدیسبلد دبپل برلپبلپب</div>
      <div style="font-weight:800"> ایران سن یدیبدیبی بیذیبدیبدیسبلد دبپل برلپبلپب</div>
      <div style="font-weight:900"> ایران سن یدیبدیبی بیذیبدیبدیسبلد دبپل برلپبلپب</div>
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
  .sans{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family:iranSans;
  }
}
</style>

