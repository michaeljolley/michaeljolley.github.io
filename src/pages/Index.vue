<template>
  <AddBottomLayout>

     <div class="site-content">
      <div class="inner">
        <main class="site-main">
          <PostList posts="$page.posts" />
        </main>
      </div>
    </div>
    
    <div class="bottom-content" v-if="$page.talks.totalCount > 0">
      <div class="inner">
        <main class="bottom-main">
          <UpcomingTalkList talks="$page.talks" />
        </main>
      </div>
    </div>

  </AddBottomLayout>
</template>

<page-query>
  query Home ($page: Int) {
    posts: allPost (perPage: 5, page: $page) @paginate {
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
          timeToRead
          date (format: "MMMM D, YYYY")
          image
          tags {
            id
          }
          path
          content
          banner_image_alt
        }
      }
    },
    talks: allTalk (perPage: 2, sort: { by: "date", order: DESC }, filter: {date: {gte: "2020"}}) @paginate {
      totalCount
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
</page-query>
<script>
import PostList from "@/components/posts/PostList";
import UpcomingTalkList from "@/components/talks/UpcomingTalkList";
export default {
  components: { PostList, UpcomingTalkList },
  data () {
    return {
      talks: null
    }
  },
  metaInfo: {
    title: "Welcome!"
  }
};
</script>