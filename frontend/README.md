# Scotia Tech

## Descripción

Aplicación React desarrollada con Vite como herramienta de construcción. Esta es una SPA creada basada en la base de datos [Products.json](./Products.json)

Características Principales
⚡ Vite - Herramienta de construcción rápida

⚛️ React 18 - Biblioteca principal de UI

🎨 CSS moderno - Estilos con capacidades CSS nativo o preprocesadores

🔧 Configuración mínima - Sin configuración compleja inicial

📦 Optimización de producción - Build optimizado automáticamente

🛠️ TypeScript - Tipado estático para mayor robustez

## Previsualización

<img src="Images/Captura de pantalla 2026-01-29 051847.png" alt="Web Page Preview" />


## Estructura de Carpetas

```text
my-react-app/
├── public/              # Archivos estáticos
│   └── icons/           # iconos usados en la aplicación
├── src/                 # Código fuente de la aplicación
│   ├── api/             # encargado de hacer la petición al archivo de base de datos
│   │   └── products.Api.ts
│   ├── components/      # Componentes React reutilizables
│   ├── hooks/           # Custom Hooks personalizados
│   ├── image/           # Carpeta de requerimientos
│   │   └── icons/
│   ├── types/           # carpeta de typos usados durante la aplicación
│   ├── App.jsx          # Componente principal de la aplicación
│   ├── App.css          # Estilos del componente App
│   ├── main.tsx         # Punto de entrada principal
│   └── index.css        # Estilos base/reset
```

## Prerrequisitos

- Node.js 14.18+ o 16+
- npm 6+ o yarn 1.22+ o pnpm 6+

## Descarga e Instalación

Clonar repositorio existente

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd nombre-del-proyecto

# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
```

### Para Usar

```bash
npm run dev
```

El servidor de desarrollo se iniciará en `http://localhost:5173` por defecto.

### Construcción

```bash
# Construir para producción
npm run build
# o
yarn build
# o
pnpm build
Los archivos de producción se generarán en la carpeta dist/.
```
