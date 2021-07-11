<template>
  <div class="title">
    <slot name="name"></slot>
    <slot name="translation"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.title {
  text-align: center;
  padding: 1rem 0;
  h2 {
    font-size: 0.55rem;
    color: #333333;
    text-align: center;
    position: relative;
    padding: 0.4rem 0;
    display: inline-block;
    margin: 0;
    float: none !important;
    max-width: 80%;
    font-weight: inherit;
  }
  h2:after {
    content: '';
    width: 60%;
    height: 1px;
    background-color: #2c4058;
    position: absolute;
    left: 50%;
    margin-left: -30%;
    top: 0;
    min-width: 35px;
  }
  h4 {
    color: #2594db;
    font-size: 0.1rem;
    font-weight: 400;
  }
}
.white {
  h2 {
    color: var(--white-font-clolr);
  }
  h2:after {
    background-color: var(--white-font-clolr);
  }
  h4 {
    color: var(--white-font-clolr);
  }
}
</style>