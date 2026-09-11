<template>
  <v-footer class="app-footer pa-0 text-body-2">
    <v-container class="py-6">
      <v-row align="center" justify="space-between" class="gy-4">
        <!-- Columna 1: Información del Desarrollador -->
        <v-col cols="12" md="5">
          <div class="d-flex align-center mb-2">
            <v-icon color="primary" icon="mdi-account-badge-outline" class="mr-2"></v-icon>
            <span class="text-subtitle-1 font-weight-bold text-white">
              {{ nombreCompleto }}
            </span>
          </div>
          <p class="text-caption text-medium-emphasis mb-0">
            Ingeniería en Desarrollo de Software | Aplicaciones Web Modulares
          </p>
        </v-col>

        <!-- Columna 2: Matrícula e Identificación -->
        <v-col cols="12" sm="6" md="3" class="text-sm-center">
          <v-chip
            color="secondary"
            variant="tonal"
            size="medium"
            prepend-icon="mdi-card-account-details-outline"
            class="font-weight-medium"
          >
            Matrícula: {{ matricula }}
          </v-chip>
        </v-col>

        <!-- Columna 3: Fecha Actual Dinámica con JS -->
        <v-col cols="12" sm="6" md="4" class="text-sm-right">
          <div class="d-inline-flex align-center text-medium-emphasis">
            <v-icon color="secondary" icon="mdi-calendar-clock-outline" class="mr-2"></v-icon>
            <span>Fecha actual: <strong class="text-white">{{ fechaFormateada }}</strong></span>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-4 border-opacity-10"></v-divider>

      <v-row align="center" justify="space-between" class="text-caption text-medium-emphasis">
        <v-col cols="12" sm="auto">
          &copy; {{ anioActual }} Todos los derechos reservados.
        </v-col>
        <v-col cols="12" sm="auto">
          Construido con <v-icon color="error" size="small" icon="mdi-heart"></v-icon> usando Vue 3 & Vuetify 3
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { ref, computed } from 'vue'

// Propiedades reactivas requeridas
const nombreCompleto = ref('Jesús Manuel Perez Guerra')
const matricula = ref('MAT-2026-WEB')

// Generación dinámica de la fecha actual con JavaScript
const fechaFormateada = computed(() => {
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const hoy = new Date()
  const fecha = hoy.toLocaleDateString('es-ES', opciones)
  // Capitalizar primera letra del día
  return fecha.charAt(0).toUpperCase() + fecha.slice(1)
})

const anioActual = computed(() => new Date().getFullYear())
</script>

<style scoped>
.app-footer {
  background: rgba(15, 23, 42, 0.95) !important;
  border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
  color: #94a3b8;
}
</style>
