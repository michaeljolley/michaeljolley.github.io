<template>
  <div class="new-comment">
    <form
        action="https://michaeljolley-comments.azurewebsites.net/api/Comment"
        method="post"
        id="commentform"
        ref="commentform"
        class="comment-box"
      >
        <input name="redirect" type="hidden" value="https://baldbeardedbuilder.com/thanks" />
        <input name="postpath" type="hidden" v-model="path.path" />
        <input name="comment-site" type="hidden" value="https://baldbeardedbuilder.com" />
        <input type="hidden" name="avatar" id="avatarInput" ref="avatarInput" />

        <div id="commentstatus" class="status" ref="commentstatus"></div>
        
        <div class="input">
          <label for="message">Your comment</label>
          <textarea
              tabindex="0"
              name="message"
              v-model="message"
              id="message"
              rows="5"
              data-required="true"
              value
            />
        </div>

      <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            title="Name displayed with your comment"
            data-required="true"
            v-model="name"
          />
      <input
            type="text"
            name="identity"
            id="identity"
            placeholder="email/@twitter/github"
            data-required="true"
            v-model="identity"
            v-on:change="checkAvatar"
            value
          />
      
        <img
          src="data:image/gif;base64,R0lGODlh9AH0AbMAAP///8z//8zM/8zMzJnMzGbMzGaZzGaZmTOZmTNmmQBmmQAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2ICgxMy4wIDIwMTIwMzA1Lm0uNDE1IDIwMTIvMDMvMDU6MjE6MDA6MDApICAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRDMzQUE3OTZGNjkxMUUxODAxN0UzQ0I1MkEzRTYyQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRDMzQUE3QTZGNjkxMUUxODAxN0UzQ0I1MkEzRTYyQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFEMzNBQTc3NkY2OTExRTE4MDE3RTNDQjUyQTNFNjJCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFEMzNBQTc4NkY2OTExRTE4MDE3RTNDQjUyQTNFNjJCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+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"
          data-fallbacksrc="/images/comments/unknown-avatar.png"
          data-role="user-avatar"
          alt="avatar"
          class="avatar"
          id="avatarPreview"
          ref="avatarPreview"
        />
        <button
          type="button"
          id="commentbutton"
          v-on:click="postComment"
          ref="commentbutton"
        >Leave response</button>
    </form>
</div>
</template>
<script>
export default {
name: "CommentNew",
props: ["path"],
data() {
  return {
    message: "",
    identity: "",
    name: "",
    remember: false,
    avatar: ""
  };
},
methods: {
  checkAvatar() {
    const emailRegex = /[^@\s]+@[^@\s]+\.[^@\s]+$/;
    let possibleAvatars = [];

    if (this.identity.match(emailRegex)) {
      possibleAvatars.push(
        `https://secure.gravatar.com/avatar/${md5(
          this.identity
        )}?s=80&d=identicon&r=pg`
      );
    } else {
      possibleAvatars.push(`https://github.com/${this.identity}.png`);
      possibleAvatars.push(
        `https://avatars.io/twitter/${this.identity}/medium`
      );
    }
    possibleAvatars.push("/images/comments/unknown-avatar.png");

    let image = this.$refs.avatarPreview;
    image.possible = possibleAvatars;

    avatarPreview.onerror = e => {
      this.tryLoad(e.target, 1);
    };

    image.currentIndex = 0;

    if (image.currentIndex < image.possible.length) {
      image.src = image.possible[image.currentIndex];
    } else {
      avatarPreview.onerror = null;
      image.src = image.dataset.fallbacksrc;
    }
  },
  tryLoad(image, increment) {
    if (increment) {
      image.currentIndex += increment;
    }

    if (image.currentIndex < image.possible.length) {
      image.src = image.possible[image.currentIndex];
    } else {
      image.onerror = null;
      image.src = image.dataset.fallbacksrc;
    }
  },
  postComment() {
    let button = this.$refs.commentbutton;
    var status = this.$refs.commentstatus;
    let image = this.$refs.avatarPreview;
    status.innerText = "";

    var missing = Array.from(document.querySelectorAll("[data-required]"))
      .filter(el => el.value === "")
      .map(el => el.name);
    if (missing.length > 0) {
      status.innerText =
        "Some required fields are missing - (" + missing.join(", ") + ")";
      return;
    }

    if (button.innerText != "CONFIRM") {
      button.setAttribute(
        "title",
        "Click the button again to confirm the comment"
      );
      button.classList.add("confirm-button");
      button.innerText = "Confirm";
      this.checkAvatar();
      return;
    }

    if (this.remember) {
      window.localStorage.name = this.name;
      window.localStorage.identity = this.identity;
    } else {
      window.localStorage.name = "";
      window.localStorage.identity = "";
    }

    this.$refs.avatarInput.value = image.src;

    this.identity = "";
    button.setAttribute("disabled", "disabled");
    button.innerText = "Posting...";
    button.classList.remove("confirm-button");
    this.$refs.commentform.submit();
  }
}
};
</script>
<style lang="scss">

.new-comment {
  form {
    width: 350px;
    margin-right: 20px;

    .input {
      width: 100%;
      background-color: $white;

      label {
        position: relative;
        top: 0;
        left: 0;
        z-index: 1;
      }
      textarea, input {
        position: relative;
        z-index: 0;
        background-color: transparent;
        border: 0;
        font-size: 1em;
      }
    }


  }
}

</style>