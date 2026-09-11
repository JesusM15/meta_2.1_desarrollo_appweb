<template>
  <v-app-bar
    flat
    class="glass-header px-4"
    height="70"
  >
    <template #prepend>
      <v-avatar
        size="48"
        color="primary"
        class="elevation-3 mr-3 glow-avatar"
      >
        <v-img
          src="https://picsum.photos/id/1005/100/100"
          alt="Avatar del Desarrollador"
          cover
        >
          <template #placeholder>
            <span class="text-h6 font-weight-bold text-white">JD</span>
          </template>
        </v-img>
      </v-avatar>
    </template>

    <v-app-bar-title class="d-flex flex-column justify-center">
      <div class="text-h6 font-weight-bold text-gradient leading-tight">
        Jesús Manuel Perez Guerra
      </div>
      <div class="text-caption text-medium-emphasis">
        Desarrollo de Aplicaciones Web
      </div>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <div class="d-none d-sm-flex align-center ga-2">
      <v-chip
        color="primary"
        variant="tonal"
        size="small"
        prepend-icon="mdi-code-tags"
        class="font-weight-medium"
      >
        Vue 3 + Vuetify
      </v-chip>

      <v-chip
        color="secondary"
        variant="tonal"
        size="small"
        prepend-icon="mdi-api"
        class="font-weight-medium"
      >
        Picsum API
      </v-chip>

      <v-btn
        icon="mdi-github"
        variant="text"
        color="primary"
        href="https://github.com/JesusM15/meta_2.1_desarrollo_appweb"
        target="_blank"
        rel="noopener noreferrer"
      ></v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>
/**
 * AppHeader.vue
 * Barra de navegación superior responsiva utilizando v-app-bar con avatar y título.
 */
</script>

<style scoped>
.glass-header {
  background: rgba(15, 23, 42, 0.85) !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
}

.text-gradient {
  background: linear-gradient(135deg, #818cf8 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.glow-avatar {
  border: 2px solid rgba(99, 102, 241, 0.6);
  box-shadow: 0 0 12px rgba(99, 102, 241, 0.4);
}
</style>
