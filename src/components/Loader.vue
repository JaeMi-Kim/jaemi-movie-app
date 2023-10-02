<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <!-- // eslint-disable-next-line vue/max-attributes-per-line -->
  <div :style="{ width: `${size}rem`, height: `${size}rem`, zIndex }" :class="{ absolute, fixed }"
    class="spinner-border text-primary"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 2
    },
    absolute: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss"  scoped>
.spinner-border {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &.absolute {
    position: absolute;
  }

  &.fixed {
    position: fixed;
  }
}
</style>