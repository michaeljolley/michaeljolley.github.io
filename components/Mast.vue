<template>
  <section v-if="backgroundImage">
    <div
      class="mast container"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="text">
        <h1>
          {{ opening }}
          <span>It's Michael.</span>
        </h1>
        <p>
          Michael Jolley is the bald, bearded builder.
          <span>(Yes, another one.)</span>
        </p>
        <p>
          At work, he leads the Developer Relations team at
          <a
            target="_blank"
            title="Deepgram"
            href="https://www.deepgram.com/"
            rel="noreferrer"
            class="deepgram"
            >Deepgram</a
          >
          where he gets to play with awesome APIs. You can also catch him giving
          <NuxtLink to="/talks/" title="Talks Michael's given">talks</NuxtLink>
          at various events, sharing two videos a week on
          <a
            target="_blank"
            title="Bald Bearded Builder on YouTube"
            href="https://bbb.dev/youtube"
            rel="noreferrer"
            class="youtube"
            >YouTube</a
          >, or hosting the
          <a
            target="_blank"
            title="Bald Bearded Builder on Twitch"
            href="https://bbb.dev/twitch"
            rel="noreferrer"
            class="twitch"
            >Bald. Bearded. Builder.</a
          >, a live-streamed show on Twitch.
        </p>
        <p>
          After 20 years in the software industry, this follicly challenged
          developer finds his greatest fulfillment helping others learn and
          succeed.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
const salutations = ['Hey!', 'Hi!', 'Eh.', 'Oh no.', 'Meh.', 'Uh oh.', 'Eek!']

export default {
  data() {
    return {
      opening: null,
      mastNumber: 0,
    }
  },
  computed: {
    backgroundImage() {
      return `https://res.cloudinary.com/dk3rdh3yo/image/upload/g_auto,f_auto/v1607302424/mj_${this.mastNumber}.png`
    },
  },
  mounted() {
    this.opening = salutations[Math.floor(Math.random() * salutations.length)]
    this.mastNumber = Math.floor(Math.random() * 13 + 1)
  },
}
</script>
<style lang="css" scoped>
section {
  @apply hidden;

  @apply lg:visible;
  @apply lg:flex;
  @apply lg:flex-col;

  @apply bg-gray-600;
}

.mast {
  @apply lg:bg-right;
  @apply lg:bg-no-repeat;
  @apply lg:mx-auto;
  @apply lg:py-10;
}

.text {
  @apply w-full;
  @apply md:w-2/3;
  @apply text-white;
}

h1 {
  @apply text-white;
  @apply mb-0;
  @apply border-0;
  @apply font-bold;
  @apply text-2xl;
  line-height: 1em;
  font-size: 4rem;
}

h1 span {
  background: linear-gradient(
    90deg,
    rgba(255, 0, 255, 1) 0%,
    rgba(0, 255, 255, 1) 100%
  );
  @apply bg-clip-text;
  -webkit-text-fill-color: transparent;
  @apply md:mb-2;
  font-size: 4rem;
}

p {
  @apply mb-4;
  @apply text-lg;
}

p span {
  @apply text-sm;
  @apply italic;
  @apply block;
  @apply text-blue-600;
}

.deepgram {
  color: #fb2640;
}
.youtube {
  @apply text-brand-youtube;
}
.twitch {
  @apply text-brand-twitch;
}
</style>
