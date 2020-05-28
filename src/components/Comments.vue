<template>
  <div class="comments" id="comments">
    <div class="inner">
      <h2>Join the discussion</h2>
    </div>
    
    <CommentNew :path="post" />
    <ol id="comments-list">
      <Comment :comment="comment.node" v-for="comment in comments" :key="comment.id" />
    </ol>
  </div>
</template>
<script>
import Comment from "./Comment";
import CommentNew from "./CommentNew";

export default {
  props: ["post", "comments"],
  components: { Comment, CommentNew }
};
</script>
<style lang="scss">
.comments {
  background-color: $light-blue;

  .inner {
    align-items: flex-start;
    justify-content: space-between;
  }

  ol {
    padding: 0;
    margin: 0;
  }
  
  h2 {
    padding: 0 20px;
    color: $mint;
    margin-top: 20px;
  }

  img.avatar {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    border: 1px solid $dark-blue;
    background-color: $white;
  }
  
  #comments-list {
    list-style-type: none;

    li {  
      &:nth-child(odd) {
       background-color: $lighter-blue;
      }
    }
  }

  }
</style>