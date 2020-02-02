<template>
  <li>
    <g-image
      :src="comment.avatar"
      :alt="'Avatar for ' + comment.name"
      class="avatar"
      height="48"
      width="48"
    />

    <blockquote :id="comment.id">
      <cite>
        <span class="author">{{ comment.name }}</span>
        <span class="bullet"> • </span>
        <a :href="'#' + comment.id" class="muted" :title="comment.date">{{ comment.date }}</a>
      </cite>
      <div class="comment-body">{{ comment.message }}</div>
    </blockquote>
  </li>
</template>
<script>
export default {
  props: ["comment"]
};
</script>