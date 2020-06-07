<template>
  <AddBottomLayout>

     <div class="site-content">
      <div class="inner">
        <main class="site-main">
          <TalkList />
        </main>
      </div>
    </div>
    
    <div class="bottom-content" >
      <div class="inner">
        <main class="bottom-main">
          <RecentPostList />
        </main>
      </div>
    </div>

  </AddBottomLayout>
</template>

<script>
import TalkList from "@/components/talks/TalkList";
import RecentPostList from '@/components/posts/RecentPostList';
export default {
  components: { 
    RecentPostList, 
    TalkList 
  },
  metaInfo: {
    title: "Talks"
  }
};
</script>