<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <links-item :link="links.header.link" classLink="header__item">
        <img
          :src="require(`@/assets/logo/${links.header.icon}`)"
          :alt="links.header.icon"
        />
      </links-item>
      <links-item
        v-for="link in links.other"
        :key="link.id"
        :link="link.link"
        :text="link.text"
        classLink="header__item"
      ></links-item>
    </ul>
  </header>
</template>
<script>
import LinksItem from "@/components/LinksItem";
export default {
  components: { LinksItem },
  computed:{
    links(){
      return this.$store.getters['getHeaderLinks']
    }
  }
  
};
</script>
