<template>
  <v-card
    class="glass-card h-100 rounded-lg overflow-hidden d-flex flex-column"
    elevation="4"
  >
    <!-- Imagen con estado de carga y aspect-ratio -->
    <v-img
      :src="imagen"
      :alt="titulo"
      height="230"
      cover
      class="align-end text-white gradient-overlay"
    >
      <template #placeholder>
        <div class="d-flex align-center justify-center fill-height bg-slate-800">
          <v-progress-circular
            color="primary"
            indeterminate
            size="36"
          ></v-progress-circular>
        </div>
      </template>

      <template #error>
        <div class="d-flex flex-column align-center justify-center fill-height bg-slate-800 text-medium-emphasis">
          <v-icon size="40" icon="mdi-image-broken-variant" color="error"></v-icon>
          <span class="text-caption mt-1">Error al cargar la imagen</span>
        </div>
      </template>

      <!-- Badge de autor superpuesto en la imagen -->
      <div class="pa-3">
        <v-chip
          color="surface"
          variant="flat"
          size="small"
          prepend-icon="mdi-camera-outline"
          class="font-weight-medium text-caption text-white"
        >
          Fotógrafo: {{ autor }}
        </v-chip>
      </div>
    </v-img>

    <!-- Contenido de la Tarjeta -->
    <v-card-item class="pb-1 pt-4">
      <v-card-title class="text-h6 font-weight-bold text-white text-truncate">
        {{ titulo }}
      </v-card-title>

      <v-card-subtitle class="text-caption text-secondary font-weight-semibold mt-1">
        <v-icon size="small" icon="mdi-account" class="mr-1"></v-icon>
        Autor: {{ autor }}
      </v-card-subtitle>
    </v-card-item>

    <v-card-text class="text-body-2 text-medium-emphasis flex-grow-1 pt-2">
      {{ descripcion }}
    </v-card-text>

    <!-- Acciones de la Tarjeta -->
    <v-card-actions class="px-4 pb-4 pt-0">
      <v-btn
        variant="tonal"
        color="primary"
        size="small"
        prepend-icon="mdi-open-in-new"
        :href="imagen"
        target="_blank"
        rel="noopener noreferrer"
        block
      >
        Ver Imagen HD
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
/**
 * TarjetaConImagen.vue
 * Componente reutilizable con v-card, v-img, v-card-title, v-card-text, v-card-subtitle
 * y validación estricta de props.
 */
defineProps({
  imagen: {
    type: String,
    required: true,
    validator: (val) => val.trim().length > 0
  },
  titulo: {
    type: String,
    required: true,
    validator: (val) => val.trim().length > 0
  },
  descripcion: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true,
    default: 'Autor Desconocido'
  }
})
</script>

<style scoped>
.gradient-overlay {
  background: linear-gradient(180deg, rgba(15, 23, 42, 0) 40%, rgba(15, 23, 42, 0.9) 100%);
}

.bg-slate-800 {
  background-color: #1e293b;
}
</style>
