<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div v-for="nav in navigations" :key="nav.name" class="nav-item">
        <RouterLink :to="nav.href" active-class="active" :class="{ active: isMatch(nav.path) }" class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <!-- <RouterLink to="/about" class="user">
      <img src="https" alt="Jeami" />
    </RouterLink> -->
    <div class="user" @click="toAbout">
      <img :src="image" :alt="name" />
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/'
        },
        {
          name: 'Movie',
          href: '/movie/tt2294629',
          path: /^\/movie/ //'/movie'
          // href: '/movie/tt4520988'
        },
        {
          name: 'About',
          href: '/about'
        }
      ]
    }
  },
  computed: {
    ...mapState('about', [
      'image',
      'name'
    ])
    // ...mapState('movie', [ 추가로 불러 드릴수 있다. 하단 methods의 this.image, this.name등으로 불러서 사용할수 있다.
    //   'movies',
    //   'loading'
    // ])
    // image() {
    //   return this.$store.state.about.image
    // },
    // name() {
    //   return this.$store.state.about.name  //about 모듈 이름, name 데이터 이름
    // }
  },
  methods: {
    isMatch(path) {
      if (!path) return false
      console.log(this.$route)
      return path.test(this.$route.fullPath)
    },
    toAbout() {
      console.log('!!!')
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="scss"  scoped>
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  position: relative;

  .logo {
    margin-right: 40px;
  }

  .user {
    width: 40px;
    height: 40px;
    padding: 6px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    transition: .4s;

    &:hover {
      background-color: darken($gray-200, 10%);
    }

    img {
      width: 100%;
    }
  }

  @include media-breakpoint-down(sm) {
    .nav {
      display: none;
    }
  }
}
</style>