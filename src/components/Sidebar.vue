<template>
  <aside class="sidebar">
    <section class="widget widget-text">
      <h2 class="widget-title">About Michael Jolley</h2>
      <p>Michael is a bald, bearded, builder with a passion for helping others succeed. For nearly 20 years, he’s used his experience in software development and DevOps for clients ranging from start-ups to Fortune 500.</p>
    </section>

    <section class="widget widget-recent-posts">
      <h2 class="widget-title">Latest Posts</h2>
      <ul class="recent-posts">
        <li class="recent-item" v-for="post in $static.posts.edges" :key="post.node.id">
          <g-link :to="post.node.path">{{ post.node.title }}</g-link>
          <span>{{ post.node.date }}</span>
        </li>
      </ul>
    </section>
    <!--
    {% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
    {% assign sortedTags = site_tags | split:',' | sort %}
    <section class="widget widget-tags">
        <h2 class="widget-title">Tags</h2>
        <div class="tagcloud">
            {% for tag in sortedTags %}
            <a href="{{site.baseurl}}/tags/#{{ tag | cgi_escape }}">{{ tag }}</a>
            {% endfor %}
        </div><
    </section>-->
  </aside>
</template>

<static-query>
  query  {
    posts: allPost (perPage: 5, page: 1) @paginate {
      edges {
        node {
          id
          title
          date (format: "MMMM D, YYYY")
          path
        }
      }
    }
  }
</static-query>
<script>
export default {};
</script>
