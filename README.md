# AutomaCo - Gestión de Facturas 📄✨

**AutomaCo** es una plataforma web robusta diseñada para la organización y descarga inteligente de facturas, orientada al mercado de El Salvador. Desde una landing page optimizada hasta un flujo completo de suscripción y gestión.

## 🚀 Tecnologías Utilizadas

- **Frontend:** React 18 + Vite + TypeScript (TSX)
- **Estilos:** Tailwind CSS v4 (Configuración CSS-first)
- **Enrutamiento:** React Router DOM (Arquitectura modular)
- **Iconografía:** Lucide React
- **Estado/API:** Fetch API con Service Pattern

## 🛠️ Estándares y Nomenclaturas

Para mantener la consistencia en el proyecto, seguimos estas reglas:

### 📂 Archivos y Carpetas
- **Componentes:** `PascalCase.tsx` (Ej: `PricingCard.tsx`)
- **Páginas:** `camelCase` dentro de carpetas (Ej: `pages/auth/register.tsx`)
- **Servicios/Hooks:** `camelCase.ts` (Ej: `apiService.ts`)

### ⌨️ Código y Métodos
- **Componentes Funcionales:** Definidos como `export const Nombre = () => { ... }`.
- **Interfaces (TS):** Localizadas en el mismo archivo del componente o en `src/types`.
- **Peticiones API:** Uso del wrapper genérico `apiRequest<T>` para tipado estricto de respuestas.

## 📂 Estructura del Proyecto

```text
src/
├── assets/         # Ilustraciones y recursos visuales.
├── components/     # Componentes reutilizables de UI.
│   ├── common/     # Layouts compartidos (Navbar, Footer).
│   └── home/       # Componentes específicos de la Landing.
├── pages/          # Vistas de la aplicación (Home, Auth, About).
├── routes/         # Configuración centralizada de rutas (AppRoutes.tsx).
├── services/       # Lógica de comunicación con el backend (Laravel).
└── styles/         # Variables de Tailwind v4 y CSS global.
```

### Convención de mensajes de commit

Se utilizará el siguiente formato:

```
<emoji> <tipo>(<alcance>): <verbo en infinitivo> <descripción breve>
```

Donde:

- **emoji**: representa visualmente el tipo de cambio.
- **tipo**: indica la naturaleza del commit (`feat`, `fix`, `docs`, `refactor`, `chore`).
- **alcance** (opcional): módulo o funcionalidad afectada.
- **verbo en infinitivo**: describe la acción realizada (agregar, corregir, actualizar, mejorar, etc.).


## ⚙️ Instalación

1. Clonar: `git clone https://github.com/tu-usuario/automaco.git`
2. Instalar: `npm install`
3. Correr: `npm run dev`

```
