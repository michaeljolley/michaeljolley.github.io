<template>
  <div class="comments" id="comments">
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
<style lang="scss" scoped>
.comments {

  ol {
    padding: 0;
    margin: 0;
  }
  
  h2 {
    padding: 0 20px;
    color: $mint;
    margin-top: 20px;
  }
  
  #comments-list {
    list-style-type: none;

    li {  
      background-color: $lightest-gray;

      &:nth-child(odd) {
       background-color: $white;
      }
    }
  }

  }
</style>