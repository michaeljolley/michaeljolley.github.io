<template>
  <div class="pager">
    <div class="prev" v-bind:class="{ hidden: pageInfo.isFirst}">
      <g-link :to="previousPage" :title="`Newer ${label}`" v-if="!pageInfo.isFirst"><< Newer {{label}}</g-link>
    </div>
    <div class="next" v-bind:class="{ hidden: pageInfo.isLast}">
      <g-link :to="nextPage" :title="`Older ${label}`" v-if="!pageInfo.isLast">Older {{label}} >></g-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pageInfo: Object,
    label: String,
    baseUrl: {
      type: String,
      default: ''
    }
  },
  computed: {
    nextPage: function() {
      return `${this.baseUrl}/${this.pageInfo.currentPage + 1}/`;
    },
    previousPage: function() {
      if (this.pageInfo.currentPage === 2) {
      return `${this.baseUrl}/`;
      }
      return `${this.baseUrl}/${this.pageInfo.currentPage - 1}/`;
    }
  }
};
</script>
<style lang="scss">
</style>