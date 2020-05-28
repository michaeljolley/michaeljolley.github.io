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
        <span class="bullet">&nbsp; &nbsp;| &nbsp;</span>
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
  padding: 20px 40px 10px;
  display: flex;
  font-size: 1em;

  blockquote {
    margin: 0 40px 10px;
    color: $white;

    cite {
      margin-bottom: 5px;
      display: inline-block;
      .author {
        color: $pink;
        font-weight: bold;
      }

      .bullet {
        font-style: normal;
      }

      a {
        color: $light-gray;
        font-style: normal;
        font-size: 1em
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