<template>
  <main class="ok-main page--home">
    <!--  Column 1  -->
    <div class="ok-column first">
      <div class="ok-title">{{ hub.greeting }} &#x1F44B;</div>
      <div class="ok-heading">
        {{ hub.message }}
      </div>
    </div>
  </main>
</template>

<script>
import { hub } from '~/static/data/data.json'

export default {
  name: 'Main',
  data() {
    return {
      hub,
    }
  },
}
</script>
