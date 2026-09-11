# Portafolio Personal Web - Vue 3 & Vuetify 3

Aplicación web de portafolio personal moderna, responsiva y altamente estética construida con **Vue 3 (Composition API con `<script setup>`)**, **Vuetify 3**, **Vite** y consumo en tiempo real de la API REST de **Picsum Photos**.

---

## 🚀 Tecnologías Utilizadas

- **Core & Framework:** [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`)
- **Librería de Componentes:** [Vuetify 3](https://vuetifyjs.com/) (Tema Oscuro Personalizado + Material Design Icons)
- **Tooling & Bundler:** [Vite 5](https://vitejs.dev/)
- **Estilos:** Vanilla CSS / SASS con efectos Glassmorphism
- **API REST:** [Picsum Photos API](https://picsum.photos/) (`https://picsum.photos/v2/list`)
- **Control de Versiones:** Git & GitHub

---

## 📋 Requisitos Previos

Asegúrate de tener instalados los siguientes entornos en tu sistema:
- **Node.js:** v18.0.0 o superior (Recomendado v20+)
- **NPM** o **PNPM**

---

## 🛠️ Instalación y Ejecución

Sigue estos pasos para clonar e ejecutar el proyecto localmente:

### 1. Clonar el repositorio
```bash
git clone https://github.com/JesusM15/meta_2.1_desarrollo_appweb.git
cd meta_2.1_desarrollo_appweb
```

### 2. Instalar dependencias

Con **pnpm**:
```bash
pnpm install
```

Con **npm**:
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

Con **pnpm**:
```bash
pnpm run dev
```

Con **npm**:
```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`.

### 4. Compilar para producción (Build)

```bash
npm run build
```

---

## 📁 Estructura del Proyecto

```text
meta_2.1_desarrollo_appweb/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AppFooter.vue          # Pie de página responsivo con fecha dinámica en JS
│   │   ├── AppHeader.vue          # Barra de navegación superior (v-app-bar + avatar)
│   │   ├── TablaDeDatos.vue       # Tabla de habilidades técnicas (v-table)
│   │   └── TarjetaConImagen.vue   # Componente reutilizable v-card con props validados
│   ├── plugins/
│   │   └── vuetify.js             # Configuración del plugin Vuetify 3 y tema personalizado
│   ├── styles/
│   │   └── main.css               # Estilos globales y efectos glassmorphism
│   ├── App.vue                    # Vista principal, estado reactivo y consumo REST API
│   └── main.js                    # Punto de entrada de la aplicación Vue 3
├── index.html                     # Plantilla HTML5 principal
├── package.json                   # Dependencias y scripts
├── vite.config.js                 # Configuración del bundler Vite
└── README.md                      # Documentación del proyecto
```

---

## 🖼️ Captura de Pantalla

> Espacio reservado para adjuntar la captura de pantalla de la aplicación en funcionamiento:

![Captura de pantalla de la Aplicación](https://via.placeholder.com/1200x675.png?text=Portafolio+Vue+3+%2B+Vuetify+3)

---

## 📝 Autor

- **Nombre:** Jesús Manuel Perez Guerra
- **Matrícula:** MAT-2026-WEB
- **Repositorio GitHub:** [meta_2.1_desarrollo_appweb](https://github.com/JesusM15/meta_2.1_desarrollo_appweb)
