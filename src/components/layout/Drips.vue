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
@media (min-width: $breakpoint-desktop) {
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
}

@media (max-width: $breakpoint-phone) {
  .drips {
    display: none;
  }
}

@media (min-width: $breakpoint-phone) and (max-width: $breakpoint-desktop) {
  .drips {
    display: flex;
    justify-content: flex-end;

    .bar {
      height: 60px;
      border-radius: 0 50px 50px 0;
      transform: rotate(60deg);

      &.blue {
        width: 130px;
        margin-right: -20px;
        background-color: $light-blue;
      }
      &.pink {
        width: 105px;
        margin-right: -30px;
        background-color: $pink;
      }
      &.mint {
        width: 150px;
        margin-right: -10px;
        background-color: $mint;
      }
      &.gold {
        background-color: $gold;
      }
    }
  }
}
</style>