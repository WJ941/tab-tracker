<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      player-width="480px"
      player-height="270px">
    </youtube>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
