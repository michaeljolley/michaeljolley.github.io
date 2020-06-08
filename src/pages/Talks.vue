<template>
  <AddBottomLayout>

     <div class="site-content">
      <div class="inner">
        <main class="site-main">
          <TalkList talks="$page.talks" />
        </main>
      </div>
    </div>
    
    <div class="bottom-content" v-if="$page.posts.totalCount > 0">
      <div class="inner">
        <main class="bottom-main">
          <RecentPostList posts="$page.posts" />
        </main>
      </div>
    </div>

  </AddBottomLayout>
</template>

<page-query>
  query Home ($page: Int) {
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
    },
    posts: allPost (perPage: 2, sort: { by: "date", order: DESC }) @paginate {
      totalCount
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
    }
  }
</page-query>
<script>
import TalkList from "@/components/talks/TalkList";
import RecentPostList from '@/components/posts/RecentPostList';
export default {
  components: { 
    RecentPostList, 
    TalkList 
  },
  metaInfo: {
    title: "Talks"
  }
};
</script>