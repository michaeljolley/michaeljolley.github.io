<template>
  <Layout>
    <StreamSummary
      v-for="stream in $page.streams.edges"
      :key="stream.node.id"
      :stream="stream.node"
    />

    <nav class="pagination" v-if="$page.streams.pageInfo.totalPages > 1">
      <h2 class="screen-reader-text">Streams navigation</h2>
      <g-link
        :to="'/streams/' + previousPage"
        v-if="!$page.streams.pageInfo.isFirst"
        class="newer-posts square fill-horizontal"
      >
        <font-awesome :icon="['fa', 'chevron-left']" swap-opacity></font-awesome>
        <span class="screen-reader-text">Newer Streams</span>
      </g-link>

      <span
        class="page-number"
      >Page {{ $page.streams.pageInfo.currentPage }} of {{ $page.streams.pageInfo.totalPages }}</span>

      <g-link
        :to="'/streams/' + ($page.streams.pageInfo.currentPage + 1)"
        v-if="!$page.streams.pageInfo.isLast"
        class="older-posts square fill-horizontal"
      >
        <font-awesome :icon="['fa', 'chevron-right']" swap-opacity></font-awesome>
        <span class="screen-reader-text">Older Streams</span>
      </g-link>
    </nav>
  </Layout>
</template>

<page-query>
  query Streams ($page: Int) {
    streams: allStream (perPage: 5, page: $page) @paginate {
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
          date (format: "MMMM D, YYYY")
          image
          path
          tags
          replay
          content
        }
      }
    }
  }
</page-query>
<script>
import StreamSummary from "../components/StreamSummary";
export default {
  components: { StreamSummary },
  metaInfo: {
    title: "Streams"
  },
  computed: {
    previousPage: function() {
      if (this.$page.streams.pageInfo.currentPage === 2) {
        return "";
      }
      return this.$page.streams.pageInfo.currentPage - 1;
    }
  }
};
</script>