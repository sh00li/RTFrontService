<template>
  <v-flex class="forget-password-page">
    <v-card
      class="forget-password-card"
      outlined
      width="400px"
    >
    <v-layout align-center justify-center>
      <!-- <img
        class="logo mx-auto"
        alt="ideapack Logo"
        src="/logo.png"
      > -->
    </v-layout>
    <v-layout align-center justify-center class="forget-password-title pointer">
     بازیابی رمز عبور
    </v-layout>
      <form class="mt-5">
        <v-text-field
          v-model="mobile"
          :error-messages="mobileErrors"
          label="موبایل"
          required
          @input="$v.mobile.$touch()"
          @blur="$v.mobile.$touch()"
        ></v-text-field>
        <div class="mt-5">
          <v-btn
            @click="submit"
            block
            color="#0b4f79"
            dark
          >
            بازیابی
          </v-btn>
          <v-layout align-center justify-center class="forget-password-footer">
            <span class="ml-2">ثبت‌نام نکرده‌اید؟</span>
            <nuxt-link to="/signup">ثبت‌نام</nuxt-link>
            <v-spacer></v-spacer>
            <nuxt-link to="/login">
              ورود
            </nuxt-link>
          </v-layout>
        </div>
      </form>
    </v-card>
  </v-flex>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'

  export default {
    layout: 'main',
    mixins: [validationMixin],

    validations: {
      mobile: { required, mo: (value) => /^[0][9]\d{9}$/.test(value), },
    },

    data: () => ({
      mobile: '',
    }),

    computed: {
      mobileErrors () {
        const errors = []
        if (!this.$v.mobile.$dirty) return errors
        !this.$v.mobile.required && errors.push('موبایل را وارد کنید')
        !this.$v.mobile.mo && errors.push('موبایل معتبر نیست')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.mobile = ''
      },
    },
  }
</script>
<style lang="scss">
.forget-password-page{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .forget-password-card{
    padding: 40px;
    border: none;
    @media only screen and (min-width: 768px) {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
    }
    .logo{
      height: 100px;
    }
    .login-title{
      font-size: 18px;
      color: #a83649;
    }
    .v-btn{
      font-size: 18px !important;
    }
    .v-label{
      font-size: 14px !important;
    }
    .forget-password-footer{
      margin-top: 10px;
      font-size: 12px !important;
      color: #666;
      a{
        font-weight: 500;
      }
    }
  }
}
</style>