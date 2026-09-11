<template>
  <v-app>
    <!-- Encabezado Principal Responsivo -->
    <AppHeader />

    <!-- Contenido Principal -->
    <v-main class="pb-12 pt-6">
      <v-container>
        <!-- Hero Section / Introducción -->
        <v-row align="center" class="mb-8 mt-2">
          <v-col cols="12" md="8">
            <v-chip color="secondary" variant="outlined" size="small" class="mb-3 font-weight-bold">
              PORTAFOLIO WEB PROFESIONAL
            </v-chip>
            <h1 class="text-h3 text-sm-h2 font-weight-extrabold text-white mb-3 leading-tight">
              Demostración de <span class="text-gradient-hero">Vue 3 & Vuetify</span>
            </h1>
            <p class="text-subtitle-1 text-medium-emphasis mb-4 max-w-600">
              Aplicación web SPA desarrollada con Composition API (<code class="text-secondary">&lt;script setup&gt;</code>), consumo asíncrono de la API REST de Picsum y diseño modular reactivo.
            </p>
          </v-col>

          <v-col cols="12" md="4" class="text-md-right">
            <!-- Botón de Actualización de Imágenes con Estado Loading y Disabled -->
            <v-btn
              color="primary"
              size="large"
              elevation="6"
              prepend-icon="mdi-refresh"
              :loading="loading"
              :disabled="loading"
              class="px-6 font-weight-bold btn-glow"
              @click="cargarImagenes"
            >
              Actualizar Imágenes
            </v-btn>
          </v-col>
        </v-row>

        <!-- Alerta de Error REST API -->
        <v-slide-y-transition>
          <v-alert
            v-if="error"
            type="error"
            variant="tonal"
            closable
            class="mb-6 elevation-2"
            title="Error de Conexión REST API"
            @click:close="error = null"
          >
            {{ error }}
            <template #append>
              <v-btn size="small" variant="text" color="error" @click="cargarImagenes">
                Reintentar
              </v-btn>
            </template>
          </v-alert>
        </v-slide-y-transition>

        <!-- Sección 1: Tarjetas con Imágenes de la API Picsum -->
        <div class="mb-10">
          <div class="d-flex align-center justify-space-between mb-4">
            <h2 class="text-h5 font-weight-bold text-white d-flex align-center">
              <v-icon color="primary" icon="mdi-image-multiple" class="mr-2"></v-icon>
              Galería Dinámica (API Picsum)
            </h2>
            <v-chip size="small" color="primary" variant="tonal">
              Endpoints Asíncronos
            </v-chip>
          </div>

          <!-- Skeleton Loader durante la Carga -->
          <v-row v-if="loading && !tarjeta1">
            <v-col cols="12" md="6">
              <v-skeleton-loader type="card, article" class="rounded-lg bg-surface"></v-skeleton-loader>
            </v-col>
            <v-col cols="12" md="6">
              <v-skeleton-loader type="card, article" class="rounded-lg bg-surface"></v-skeleton-loader>
            </v-col>
          </v-row>

          <!-- Grid de Tarjetas con las 2 imágenes seleccionadas aleatoriamente -->
          <v-row v-else-if="tarjeta1 && tarjeta2" class="gy-4">
            <v-col cols="12" md="6">
              <TarjetaConImagen
                :imagen="tarjeta1.imagen"
                :titulo="tarjeta1.titulo"
                :descripcion="tarjeta1.descripcion"
                :autor="tarjeta1.autor"
              />
            </v-col>
            <v-col cols="12" md="6">
              <TarjetaConImagen
                :imagen="tarjeta2.imagen"
                :titulo="tarjeta2.titulo"
                :descripcion="tarjeta2.descripcion"
                :autor="tarjeta2.autor"
              />
            </v-col>
          </v-row>
        </div>

        <v-divider class="my-10 border-opacity-10"></v-divider>

        <!-- Sección 2: Tabla de Datos de Habilidades Técnicas -->
        <section class="mb-8">
          <TablaDeDatos />
        </section>
      </v-container>
    </v-main>

    <!-- Pie de Página Responsivo -->
    <AppFooter />
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import TarjetaConImagen from './components/TarjetaConImagen.vue'
import TablaDeDatos from './components/TablaDeDatos.vue'

// Estado reactivo de la aplicación
const loading = ref(false)
const error = ref(null)
const tarjeta1 = ref(null)
const tarjeta2 = ref(null)

/**
 * Función asíncrona para consumir el endpoint de Picsum API
 * Endpoint: https://picsum.photos/v2/list?page=1&limit=50
 * Selecciona aleatoriamente dos imágenes distintas por sus IDs.
 */
const cargarImagenes = async () => {
  loading.value = true
  error.value = null

  try {
    const respuesta = await fetch('https://picsum.photos/v2/list?page=1&limit=50')
    
    if (!respuesta.ok) {
      throw new Error(`Error en la solicitud HTTP: Estado ${respuesta.status}`)
    }

    const fotos = await respuesta.json()

    if (!Array.isArray(fotos) || fotos.length < 2) {
      throw new Error('La respuesta de la API no contiene suficientes elementos.')
    }

    // Selección aleatoria de dos índices distintos
    const indice1 = Math.floor(Math.random() * fotos.length)
    let indice2 = Math.floor(Math.random() * fotos.length)

    while (indice2 === indice1) {
      indice2 = Math.floor(Math.random() * fotos.length)
    }

    const foto1 = fotos[indice1]
    const foto2 = fotos[indice2]

    // Construcción de URLs personalizadas por ID según especificación (https://picsum.photos/id/{id}/300/200)
    // Usamos 600/400 para mejor resolución visual en tarjetas responsivas
    tarjeta1.value = {
      imagen: `https://picsum.photos/id/${foto1.id}/600/400`,
      titulo: `Fotografía Galería #${foto1.id}`,
      autor: foto1.author || 'Autor Picsum',
      descripcion: `Captura en alta resolución del catálogo Picsum (ID: ${foto1.id}). Resolución original: ${foto1.width} x ${foto1.height}px.`
    }

    tarjeta2.value = {
      imagen: `https://picsum.photos/id/${foto2.id}/600/400`,
      titulo: `Fotografía Galería #${foto2.id}`,
      autor: foto2.author || 'Autor Picsum',
      descripcion: `Obra visual seleccionada de forma dinámica (ID: ${foto2.id}). Resolución original: ${foto2.width} x ${foto2.height}px.`
    }
  } catch (err) {
    console.error('Error al consumir la API de Picsum:', err)
    error.value = `No se pudieron cargar las imágenes de la API: ${err.message}`
  } finally {
    loading.value = false
  }
}

// Ejecutar la petición al cargar la aplicación
onMounted(() => {
  cargarImagenes()
})
</script>

<style scoped>
.text-gradient-hero {
  background: linear-gradient(135deg, #6366f1 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.max-w-600 {
  max-width: 600px;
}

.btn-glow {
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4) !important;
  transition: all 0.3s ease;
}

.btn-glow:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.6) !important;
}
</style>
