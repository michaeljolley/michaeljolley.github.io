<template>
  <Layout>
    <article class="post">
      <header class="entry-header">
        <g-link title="Code of Conduct Report" :to="/report/">
          <img src="https://res.cloudinary.com/dk3rdh3yo/image/upload/c_scale/v1591405456/cover_knfirw.png" class="cld-responsive lazyload" alt="Hands of various people joined" />
        </g-link>
      </header>
      <div class="entry-content">
        <h1>Report Code of Conduct Breach</h1>
       
        <p>If you have been harassed by a member of the Bald Bearded Builder community, or if you have observed 
          someone else being harassed, please report the behaviour using the form below.</p>




      </div>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Code of Conduct Report Form"
  }
};
</script>
<style lang="scss" scoped>
.entry-header {
  background-color: $light-blue;
  padding: .5em;
  height: 95%;

  img {
    width: 100%;
    background-color: $white;
  }

}
.entry-title {
  margin: .5em 0 0 0;
  font-size: 1em;
  font-family: 'PT Sans', sans-serif;
  a {
    text-decoration: none;
    color: $white;
  }
}
.entry-meta {
  font-size: .7em;
  margin-top: .2em;
  color: $gray;
}
.entry-header {
  background-color: $light-blue !important;
}
.entry-content {
  background-color: $white;
  padding: 20px;

  h1 {
    font-size: 2.5em;
    margin: 0;
    color: $pink;
  }
  .entry-meta {
    padding-bottom: 15px;
    border-bottom: 1px dotted $mid-blue;
    a {
      color: $pink;
      text-decoration: none;
      &:hover {
        color: $pink;
      }
    }
  }
  .content {
    line-height: 1.6em;
    /deep/ blockquote {
      background-color: $lightest-gray;
      color: $dark-blue;
      margin: 0 20px;
      font-family: 'PT Sans', sans-serif;
      font-size: 1.1em;
      font-style: italic;
      border: $gray solid 1px;
      p {
        padding: 0 10px;
      }
    }
    /deep/ ul {
      li {
        display: inline-block;
        padding: 5px;
      }
    }
    /deep/ img {
      border: 10px solid;
      box-shadow: 2px 2px 10px $gray;
      border-color: $light-gray ;
      margin: 20px;
      position: relative;
      left: 25%;
      width: 40%;

      &.right, &.left {
        position: unset;
        left: unset;
        width: unset;
      }

      &.right {
        float: right;
        margin-right: 0;
      }
      &.left {
        float: left;
        margin-left: 0;
      }
    }
    /deep/ code {
      background-color: $lightest-gray;
      padding: 0 4px;
      font-style: italic;
      font-size: .9em;
    }
    /deep/ pre {
      code {
        background-color: inherit;
        font-style: inherit;
        font-size: inherit;
        line-height: inherit;
      }
    }
  }
}
.post {
  margin-bottom: 0;
}
</style>