<template>
  <v-flex class="register-page">
    <v-card
      class="register-card"
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
    <v-layout align-center justify-center class="register-title pointer">
      ثبت نام در دنک
    </v-layout>
      <form class="mt-5">
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          label="نام"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="family"
          :error-messages="familyErrors"
          label="نام خانوادگی"
          required
          @input="$v.family.$touch()"
          @blur="$v.family.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="mobile"
          :error-messages="mobileErrors"
          label="موبایل"
          required
          @input="$v.mobile.$touch()"
          @blur="$v.mobile.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :error-messages="passwordErrors"
          label="رمز عبور"
          required
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="توافق‌نامه را خوانده و آن را تایید می‌کنم"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>
        <div class="mt-5">
          <v-btn
            @click="submit"
            block
            color="#0b4f79"
            dark
          >
            ثبت نام
          </v-btn>
          <v-layout align-center justify-center class="register-footer">
            <span class="ml-2">قبلا ثبت‌نام کرده‌اید؟</span>
            <nuxt-link to="/login">ورود</nuxt-link>
            <v-spacer></v-spacer>
            <nuxt-link to="/forgetpassword">
              رمز عبور را فراموش کرده‌ام
            </nuxt-link>
          </v-layout>
        </div>
      </form>
    </v-card>
  </v-flex>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength } from 'vuelidate/lib/validators'

  export default {
    layout: 'main',
    mixins: [validationMixin],

    validations: {
      name: { required, fa: (value) => /^[\u0600-\u06FF\s]+$/.test(value), maxLength: maxLength(40) },
      family: { required, fa: (value) => /^[\u0600-\u06FF\s]+$/.test(value), maxLength: maxLength(40) },
      mobile: { required, mo: (value) => /^[0][9]\d{9}$/.test(value), },
      password: { required, minLength: minLength(6) },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      name: '',
      family: '',
      mobile: '',
      password: '',
      checkbox: false,
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('نام حداکثر ۴۰ حرف است')
        !this.$v.name.required && errors.push('نام را وارد کنید')
        !this.$v.name.fa && errors.push('نام را فارسی وارد کنید')
        return errors
      },
      familyErrors () {
        const errors = []
        if (!this.$v.family.$dirty) return errors
        !this.$v.family.maxLength && errors.push('نام خانوادگی حداکثر ۴۰ حرف است')
        !this.$v.family.required && errors.push('نام خانوادگی را وارد کنید')
        !this.$v.family.fa && errors.push('نام خانوادگی را فارسی وارد کنید')
        return errors
      },
      mobileErrors () {
        const errors = []
        if (!this.$v.mobile.$dirty) return errors
        !this.$v.mobile.required && errors.push('موبایل را وارد کنید')
        !this.$v.mobile.mo && errors.push('موبایل معتبر نیست')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push('کلمه عبور حدافل ۶ حرف است')
        !this.$v.password.required && errors.push('کلمه عبور را وارد کنید')
        return errors
      },
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('تایید لازم است')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.family = ''
        this.mobile = ''
        this.checkbox = false
      },
    },
  }
</script>
<style lang="scss">
.register-page{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .register-card{
    padding: 40px;
    border: none;
    @media only screen and (min-width: 768px) {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
    }
    .logo{
      height: 100px;
    }
    .register-title{
      font-size: 18px;
      color: #a83649;
    }
    .v-btn{
      font-size: 18px !important;
    }
    .v-label{
      font-size: 14px !important;
    }
    .register-footer{
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