<template>
  <footer>
    <Logo />
    <a href="https://main--radiant-creponne-375ed1.netlify.app/" target="self">
      (c){{ new Date().getFullYear() }} JAEMI
    </a>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 70px 0;
  text-align: center;
  opacity: .6;

  .logo {
    display: block;
    margin-bottom: 4px;
  }
}
</style>