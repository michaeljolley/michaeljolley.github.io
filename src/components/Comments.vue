<template>
  <div class="comments comments-area" id="comments">
    <div class="comments-inner">
      <h2 class="comments-title">Comments</h2>

      <CommentNew :path="post" />
     
      <ol id="comments-list">
        <Comment :comment="comment.node" v-for="comment in comments" :key="comment.id" />
      </ol>
    </div>
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
  padding-top: 20px;

  h2 {
    padding: 0 20px;
    color: $mint;
    margin-top: 0;
  }

  ol {
    padding: 0;
  }

  img.avatar {
    border-radius: 50%;
    float: left;
    width: 48px;
    height: 48px;
    border: 1px solid $dark-blue;
    background-color: $white;
  }
  
  #comments-list {
    list-style-type: none;

      li {
        padding: 8px;
        font-size: 1em;
        line-height: 21px;
        margin-top: 8px;
        font-size: 1em;

        &:nth-child(even) {
          background-color: $lighter-blue;
        }
  
        blockquote {
          margin-left: 60px;
          margin-top: 0;
  
          cite {
            font-style: normal;
            font-size: .8em;
  
            span.author {
              font-weight: 700;
            font-size: .8em;
            }
  
            a.muted {
              color: #656c7a;
            }
          }
  
          div.comment-body {
            line-height: 21px;
          }
        }
  
        &.byauthor {
          border-radius: 4px;
          background-color: #fcf9eb;
        }
      }
  
      .bullet {
        padding: 0;
        color: #c2c6cc;
        line-height: 1.4;
      }
  }

  
  
    form#commentform {
      padding: 8px;
  
      input {
        transition: all .2s linear;
        padding: 5px 9px;
        margin: 10px 0 0 0;
        font-size: 13px;
        border-radius: 4px;
        height: 32px;
      }
  
      input:focus, div.textarea:focus, button#commentbutton:active, button#commentbutton:focus {
        outline:none;
        box-shadow: 0 0 8px rgba(230, 210, 180, 1);
        border-color: #aaa;
      }
  
      div.textarea, div.status {
        border-radius: 4px;
        height: auto;
        line-height: 1.4;
        font-size: 14px;
        font-family: "Helvetica Neue",arial,sans-serif;
        padding: 6px 10px 8px;
      }
  
      div.textarea {
        width: 100%;
        transition: all .15s ease-in-out;
        overflow: auto;
        word-wrap: break-word;
        color: #2a2e2e;
        cursor: text;
        display: block;
        min-height: 100px;
      }
  
      div.status:not(:empty) {
        margin-bottom: 10px;
        border: solid 1px #eaa;
        background-color: #ecc;
      }
  
      div.status:empty {
        display: none;
      }
  
      [contenteditable]:empty:not(:focus):before {
        color: #687a86;
        line-height: 30px;
        font-size: 18px;
        content: attr(aria-label);
        display: block; /* For Firefox */
      }
  
      div#commenttext {
        margin-left: 60px;
      }
  
      div#comment-box {
        min-height: 48px;
      }
  
      div#comment-author {
        margin-left: 60px;
      }
  
      button#commentbutton, input, div.textarea {
        border: 1px solid #caced3;
      }
  
      button#commentbutton {
        position: relative;
        margin: 10px 0 0 0;
        padding: 5px 9px;
        cursor: pointer !important;
        height: 32px;
        color: #505050;
        border-radius: 4px;
        -webkit-appearance: none;
        appearance: none;
        background-color: 1px solid $gray;
      
        &:hover {
          border: 1px solid #b0b0c0;
      
        }
  
        &:active {
          border: 1px solid #a8acc2;
          background-color: 1px #cbcfd4;
          background-image: none;
        }
  
        &.confirm-button {
          background-color: 1px solid $white;
          color: $white;
        }
      }
  
      #remember-me {
        display: inline-block;
        padding: 5px;
        font-size: 13px;
        vertical-align: middle;
  
        label {
          display: block;
          float: left;
          padding-right: 10px;
          padding-left: 22px;
          text-indent: -22px;
  
          span {
            vertical-align: middle;
          }
        }
  
        input {
          vertical-align: middle;
          margin: auto;
          padding: auto;
          height: auto;
        }
  
      }
    } // form#commentForm
  
  }
</style>