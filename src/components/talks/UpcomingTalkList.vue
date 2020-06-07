<template>
  <div>
    <h2>{{title}}</h2>
    <div class="list bottom">
        <TalkSummary v-for="talk in $page.talks.edges" :key="talk.node.id" :talk="talk.node" />
    </div>
  </div>
</template>

<script>
import TalkSummary from "@/components/talks/TalkSummary";
export default {
  props: ["talks"],
  components: { TalkSummary },
  computed: {
    previousPage: function() {
      if (this.$page.talks.pageInfo.currentPage === 2) {
        return '';
      }
      return this.$page.talks.pageInfo.currentPage - 1;
    },
    title: function() {
      if (undefined === this.$page.talks.edges.find(f => f.node.date < new Date())) {
        return 'Talks'
      }
      return 'Upcoming Talks'
    }
  }
};
</script>