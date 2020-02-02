<template>
  <div class="comments comments-area" id="comments">
    <div class="comments-inner">
      <h2 class="comments-title">Comments</h2>

      <CommentNew :path="post.path" />

      <hr />
      <!-- <h3 id="comment-count">{% if comment_count == 1 %}One response{% else %}{{ comment_count }} responses{% endif %}</h3> -->

      <ol id="comments-list">
        <Comment :comment="comment" v-for="comment in post.comments" :key="comment.id" />
      </ol>
    </div>
  </div>
</template>
<script>
import Comment from "./Comment";
import CommentNew from "./CommentNew";

export default {
  props: ["post"],
  components: { Comment, CommentNew }
};
</script>