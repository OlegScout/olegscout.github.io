<template>
  <header class="ok-header">
    <!--  Column 1  -->
    <div class="ok-column first">
      <a
        class="ok-link ok-link-header"
        :href="header.contactsLink.contactsLinkUri"
      >
        <span class="ok-hide mobile">{{
          header.contactsLink.contactsLinkTitle
        }}</span>
        <span class="ok-show mobile">{{ '📨' }}</span>
      </a>
    </div>

    <!--  Column 2  -->
    <div class="ok-column second">
      <NuxtLink to="/" class="ok-link logo">
        <HeaderLogo />
      </NuxtLink>
    </div>

    <!--  Column 3  -->
    <div class="ok-column third">
      <a class="ok-link ok-link-header" :href="header.aboutLink.aboutLinkUri">
        <span class="ok-hide mobile">{{
          header.aboutLink.aboutLinkTitle
        }}</span>
        <span class="ok-show mobile">{{ 'i' }}</span>
      </a>
    </div>
  </header>
</template>

<script>
import { header } from '~/static/data/data.json'
import HeaderLogo from '~/assets/images/logo.svg?inline'

export default {
  name: 'Header',
  components: { HeaderLogo },
  data() {
    return {
      header,
    }
  },
}
</script>
