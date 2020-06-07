<template>
  <div class="talk-list">
    <TalkSummary v-for="talk in $static.talks.edges" :key="talk.node.id" :talk="talk.node" />
    <Pager :info="$static.talks.pageInfo"/>
  </div>
</template>

<static-query>
  query Talks ($page: Int) {
    talks: allTalk (perPage: 5, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
        isFirst
        isLast
      }
      edges {
        node {
          id
          title
          description
          date (format: "MMMM D, YYYY")
          image
          path
          banner_image_alt
        }
      }
    }
  }
</static-query>
<script>
import { Pager } from 'gridsome'
import TalkSummary from "@/components/talks/TalkSummary";
export default {
  components: { 
    Pager,
    TalkSummary 
  },
  computed: {
    previousPage: function() {
      if (this.talks.pageInfo.currentPage === 2) {
        return "";
      }
      return this.talks.pageInfo.currentPage - 1;
    }
  }
};
</script>
<style lang="scss">
.talk-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
    
  .talk:first-child {
    flex-basis: 100%;

    .entry-header {
      background-color: $white;
      padding: 1em;
    }
    .entry-title { 
      margin: .2em 0 0 0;
      font-size: 1.8em;
      a {
        color: $pink;
      }
    }
    .entry-meta {
      color: $dark-blue;
      margin-top: .1em;
    }
  }
}
</style>