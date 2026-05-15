# 🎬 Backend - API Movie

API REST para gestión de películas, series y reviews, desarrollada con Node.js, TypeScript, Express y MongoDB.

## 👨‍💻 Desarrollador

Jhonatan Castañeda

---

# 🚀 Tecnologías utilizadas

* **Node.js** — Entorno de ejecución
* **TypeScript** — Tipado estático
* **Express** — Framework backend
* **MongoDB Atlas** — Base de datos en la nube
* **JWT** — Autenticación con tokens
* **Bcrypt** — Encriptación de contraseñas
* **Zod** — Validación de datos
* **Swagger UI** — Documentación de la API

---

# 📁 Estructura del proyecto

```bash
src/
├── api/
│   └── v1/
│       └── index.ts
├── config/
│   ├── database.ts
│   └── env.ts
├── libs/
│   ├── bcrypt.ts
│   └── jwt.ts
├── middlewares/
│   ├── auth.middleware.ts
│   └── validate.middleware.ts
├── modules/
│   ├── auth/
│   ├── users/
│   ├── movie/
│   ├── review/
│   └── series/
└── server.ts
```

---

# 📦 Módulos

Cada módulo implementa el patrón Repository y contiene:

* `model.ts` → Modelo de datos
* `schema.ts` → Validaciones con Zod
* `repository.ts` → Acceso a MongoDB
* `service.ts` → Lógica de negocio
* `controller.ts` → Manejo de peticiones
* `routes.ts` → Endpoints

---

# 🔗 Endpoints

## 🔐 Auth

| Método | Ruta                    | Descripción       |
| ------ | ----------------------- | ----------------- |
| POST   | `/api/v1/auth/register` | Registrar usuario |
| POST   | `/api/v1/auth/login`    | Iniciar sesión    |

---

## 👤 Users

| Método | Ruta                     | Descripción       |
| ------ | ------------------------ | ----------------- |
| POST   | `/api/v1/users/register` | Registrar usuario |
| GET    | `/api/v1/users`          | Obtener usuarios  |

---

## 🎬 Movies

| Método | Ruta                 | Descripción         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/v1/movies`     | Crear película      |
| GET    | `/api/v1/movies`     | Obtener películas   |
| PUT    | `/api/v1/movies/:id` | Actualizar película |
| DELETE | `/api/v1/movies/:id` | Eliminar película   |

---

## 📝 Reviews

| Método | Ruta                     | Descripción                  |
| ------ | ------------------------ | ---------------------------- |
| POST   | `/api/v1/reviews`        | Crear review                 |
| GET    | `/api/v1/reviews/:movie` | Obtener reviews por película |
| PUT    | `/api/v1/reviews/:id`    | Actualizar review            |
| DELETE | `/api/v1/reviews/:id`    | Eliminar review              |

---

## 📺 Series

| Método | Ruta                 | Descripción      |
| ------ | -------------------- | ---------------- |
| POST   | `/api/v1/series`     | Crear serie      |
| GET    | `/api/v1/series`     | Obtener series   |
| PUT    | `/api/v1/series/:id` | Actualizar serie |
| DELETE | `/api/v1/series/:id` | Eliminar serie   |

---

# 🔒 Autenticación

Las rutas protegidas requieren JWT:

```bash
Authorization: Bearer tu_token
```

---

# ⚙ Variables de entorno

Crear archivo `.env`

```env
PORT=3000
MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/
MONGO_DB_NAME=movie
JWT_SECRET=tu_clave_secreta
JWT_EXPIRATION=10h
```

---

# 💻 Instalación local

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/backend-movie.git

# Entrar a la carpeta
cd backend-movie

# Instalar dependencias
npm install

# Ejecutar proyecto
npm run start
```

---

# 📄 Documentación Swagger

Swagger UI disponible en:

```bash
http://localhost:3000/api/v1/docs
```

---

# ☁ Despliegue

API desplegada en Render:

```bash
https://tu-api.onrender.com
```
