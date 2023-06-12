<template>
  <HeaderCont attr="header__wrap SBAggro3 bg-beige"/>
  <router-view/>
  <FooterCont attr="footer__wrap SBAggro3 section bg-ivory" />

</template>

<script>
import HeaderCont from '@/components/HeaderCont.vue'
import FooterCont from '@/components/FooterCont.vue'
export default {
  components: {
    HeaderCont,
    FooterCont
  }
}

</script>

<style lang="scss">
  @import "index.scss"
</style>
