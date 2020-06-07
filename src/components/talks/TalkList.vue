<template>
  <div>
    <div class="list">
      <TalkSummary v-for="talk in $page.talks.edges" :key="talk.node.id" :talk="talk.node" />
    </div>
    <Pager :pageInfo="$page.talks.pageInfo" label="Talks" baseUrl="/talks"/>
  </div>
</template>

<script>
import Pager from '@/components/Pager'
import TalkSummary from "@/components/talks/TalkSummary";
export default {
  props: ["talks"],
  components: { 
    Pager,
    TalkSummary 
  }
};
</script>