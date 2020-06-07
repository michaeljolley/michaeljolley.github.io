<template>
  <article class="talk">
    <TalkHeader
          :title="talk.title"
          :banner_image_alt="talk.banner_image_alt"
          :path="talk.path"
          :image="talk.image"
          :date="talk.date"
        />
  </article>
</template>
<script>
import TalkHeader from "@/components/talks/TalkHeader";

export default {
  props: ["talk"],
  components: { TalkHeader }
};
</script>
<style lang="scss" scoped>
.talk {
  margin-bottom: 20px;
  flex-basis: 49%;
}
</style>