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
        <a :href="'#' + comment.id" :title="comment.date">{{ comment.date }}</a>
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
<style lang="scss">
li {
  padding: 20px;
  padding-bottom: 0;
  display: flex;
  font-size: .9em;

  blockquote {
    margin-top: 0;
    color: $white;

    cite {
      .author {
        color: $pink;
        font-weight: bold;
      }

      a {
        color: $gray;
        font-style: normal;
        font-size: .9em;
        &:hover {
          color: $pink;
        }
      }
    }

    div.comment-body {
      line-height: 21px;
    }
  }

  .byauthor {
    border-radius: 4px;
    background-color: #fcf9eb;
  }

}
</style>