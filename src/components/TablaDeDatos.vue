<template>
  <v-card class="glass-card rounded-lg overflow-hidden" elevation="4">
    <v-card-item class="bg-surface-variant pa-4">
      <div class="d-flex align-center justify-space-between flex-wrap ga-2">
        <div>
          <v-card-title class="text-h6 font-weight-bold text-white d-flex align-center">
            <v-icon color="secondary" icon="mdi-code-json" class="mr-2"></v-icon>
            Habilidades Técnicas y Experiencia
          </v-card-title>
          <v-card-subtitle class="text-caption text-medium-emphasis">
            Resumen del dominio en lenguajes, frameworks y herramientas clave
          </v-card-subtitle>
        </div>
        <v-chip color="primary" variant="flat" size="small" class="font-weight-medium">
          {{ habilidades.length }} Tecnologías Dominadas
        </v-chip>
      </div>
    </v-card-item>

    <v-table class="custom-table bg-transparent">
      <thead>
        <tr>
          <th class="text-left font-weight-bold text-primary">Habilidad Técnica</th>
          <th class="text-left font-weight-bold text-primary">Nivel de Dominio</th>
          <th class="text-center font-weight-bold text-primary">Años de Experiencia</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="skill in habilidades"
          :key="skill.id"
          class="table-row-hover"
        >
          <!-- Columna 1: Habilidad Técnica -->
          <td class="font-weight-semibold text-white">
            <div class="d-flex align-center">
              <v-avatar size="32" color="surface-variant" class="mr-3">
                <v-icon :icon="skill.icono" :color="skill.color" size="20"></v-icon>
              </v-avatar>
              <div>
                <div>{{ skill.nombre }}</div>
                <div class="text-caption text-medium-emphasis">{{ skill.categoria }}</div>
              </div>
            </div>
          </td>

          <!-- Columna 2: Nivel de Dominio -->
          <td style="min-width: 220px;">
            <div class="d-flex align-center justify-space-between mb-1">
              <v-chip
                :color="skill.color"
                size="x-small"
                variant="tonal"
                class="font-weight-bold"
              >
                {{ skill.nivelEtiqueta }}
              </v-chip>
              <span class="text-caption font-weight-bold text-medium-emphasis">
                {{ skill.porcentaje }}%
              </span>
            </div>
            <v-progress-linear
              :model-value="skill.porcentaje"
              :color="skill.color"
              height="6"
              rounded
              bg-color="surface-variant"
            ></v-progress-linear>
          </td>

          <!-- Columna 3: Años de Experiencia -->
          <td class="text-center font-weight-bold">
            <v-chip
              color="surface-variant"
              variant="flat"
              size="small"
              class="font-weight-bold text-white"
            >
              {{ skill.experienciaAnios }} {{ skill.experienciaAnios === 1 ? 'año' : 'años' }}
            </v-chip>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

// Dataset estructurado con mínimo 4 filas y 3 columnas (incluye categoría e iconos adicionales)
const habilidades = ref([
  {
    id: 1,
    nombre: 'Vue.js 3 / Composition API',
    categoria: 'Frontend Framework',
    icono: 'mdi-vuejs',
    color: '#42b883',
    nivelEtiqueta: 'Avanzado',
    porcentaje: 92,
    experienciaAnios: 4
  },
  {
    id: 2,
    nombre: 'Vuetify 3 / UI Components',
    categoria: 'Component Library',
    icono: 'mdi-vuetify',
    color: '#1867C0',
    nivelEtiqueta: 'Experto',
    porcentaje: 90,
    experienciaAnios: 3
  },
  {
    id: 3,
    nombre: 'JavaScript (ES6+) / TypeScript',
    categoria: 'Lenguaje Core',
    icono: 'mdi-language-javascript',
    color: '#F7DF1E',
    nivelEtiqueta: 'Experto',
    porcentaje: 95,
    experienciaAnios: 5
  },
  {
    id: 4,
    nombre: 'HTML5 & Vanilla CSS3 / SASS',
    categoria: 'Estilos Web',
    icono: 'mdi-language-html5',
    color: '#E34F26',
    nivelEtiqueta: 'Dominio Total',
    porcentaje: 98,
    experienciaAnios: 6
  },
  {
    id: 5,
    nombre: 'Vite & Build Tooling',
    categoria: 'Herramientas de Desarrollo',
    icono: 'mdi-lightning-bolt',
    color: '#646CFF',
    nivelEtiqueta: 'Intermedio - Avanzado',
    porcentaje: 85,
    experienciaAnios: 3
  }
])
</script>

<style scoped>
.custom-table :deep(th) {
  background-color: rgba(30, 41, 59, 0.9) !important;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.custom-table :deep(td) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
  padding-top: 12px !important;
  padding-bottom: 12px !important;
}

.table-row-hover:hover {
  background-color: rgba(99, 102, 241, 0.06);
  transition: background-color 0.2s ease;
}
</style>
