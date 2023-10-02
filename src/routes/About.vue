<template>
  <div class="about">
    <div class="photo">
      <Loader v-if="imageLoading" absolute />
      <img :src="image" :alt="name" />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <div>{{ blog }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// eslint-disable-next-line no-unused-vars
import Loader from '~/components/Loader'

export default {
  data() {
    return {
      imageLoading: true
    }
  },
  computed: {
    ...mapState('about', [ // 전계연산자 ... about모듈의 이름 명시, 배열 데이터를 추가 해서 배열에 아이템의 이름을 갖고 온다. 
      'image',
      'name',
      'email',
      'blog',
      'phone'
    ])
    // image() {
    //   return this.$store.state.about.image
    // },
    // name() {
    //   return this.$store.state.about.name
    // },
    // email() {
    //   return this.$store.state.about.email
    // },
    // blog() {
    //   return this.$store.state.about.blog
    // },
    // phone() {
    //   return this.$store.state.about.phone
    // }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      await this.$loadImage(this.image)
      this.imageLoading = false
    }
  }
}
</script>


<style lang="scss" scoped>
.about {
  text-align: center;

  .photo {
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 30px;
    border: 10px solid $gray-300;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    position: relative;

    img {
      width: 100%;
    }
  }

  .name {
    font-size: 40px;
    font-family: "Oswald", sans-serif;
    margin-bottom: 20px;
  }
}
</style>