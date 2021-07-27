<template>
  <component
    :is="link ? 'nuxt-link' : 'span'"
    :to="`/tags/${tag}`"
    no-prefetch
    class="inline-block mb-2 mr-2 badge badge--small"
    :class="'badge--' + tag"
    >#<span>{{ tag }}</span></component
  >
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
    link: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped>
.badge {
  @apply flex justify-center items-center;
  @apply font-semibold;
  @apply px-3 py-1;
  @apply mt-2;
  @apply rounded-full;
  @apply text-xs;
  background-color: rgba(209, 209, 209, 0.4);
  @apply text-black;
}

.badge--small {
  @apply px-2;
  @apply text-xs;
}

.badge--large {
  @apply px-4;
  @apply text-base;
}

.badge--slack {
  background: rgba(74, 21, 75, 0.4);
  @apply text-black;
}

.badge--twitch {
  @apply bg-brand-twitch;
  @apply text-white;
}

.badge--faunadb {
  background: rgba(50, 63, 203, 0.4);
  @apply text-black;
}

.badge--vue,
.badge--gridsome,
.badge--nuxtjs {
  background-color: rgba(65, 184, 131, 0.4);
  @apply text-black;
}

.badge--javascript {
  background-color: rgba(247, 223, 30, 0.4);
  color: black;
}

.badge--typescript {
  background-color: rgba(49, 120, 198, 0.4);
  @apply text-black;
}

.badge--dotnet,
.badge--aspnetcore,
.badge--blazor,
.badge--csharp,
.badge--automapper {
  background-color: rgba(93, 37, 144, 0.4);
  @apply text-black;
}

.badge--nodejs {
  background-color: rgba(61, 136, 54, 0.4);
  @apply text-black;
}

.badge--azure,
.badge--functions,
.badge--key-vault,
.badge--sql,
.badge--vscode {
  background-color: rgba(0, 127, 255, 0.4);
  @apply text-black;
}

.badge--github {
  content: 'GitHub';
  @apply bg-brand-github;
  @apply text-white;
}

.badge--netlify {
  background: linear-gradient(
    to bottom,
    rgba(35, 194, 184, 0.4),
    rgba(55, 175, 188, 0.4)
  );
  @apply text-black;
}
</style>
