<template>
  <div class="drips">
      <div class="bar blue"></div>
      <div class="bar pink"></div>
      <div class="bar mint"></div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
 .drips {
    display: flex;
    justify-content: flex-end;

  .bar {
    height: 60px;
    border-radius: 0 50px 50px 0;
    transform: rotate(60deg);

    &.blue {
      width: 265px;
      margin-right: -85px;
      background-color: $light-blue;
    }
    &.pink {
      width: 115px;
      margin-right: -90px;
      background-color: $pink;
    }
    &.mint {
      width: 275px;
      margin-right: -70px;
      background-color: $mint;
    }
    &.gold {
      background-color: $gold;
    }
  }
 }

</style>