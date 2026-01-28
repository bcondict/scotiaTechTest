# Scotia Tech Test

## Descripción

Esta es una aplicación web reactiva construida con Spring Boot, Spring WebFlux y H2 Database que implementa un sistema CRUD (Create, Read, Update, Delete) para la gestión de productos. La aplicación sigue una arquitectura MVC y utiliza programación reactiva para manejar solicitudes de manera no bloqueante.

## Características Principales

- Spring WebFlux: Framework reactivo para aplicaciones web
- Base de datos H2: Base de datos en memoria para desarrollo y pruebas
- API REST: Endpoints RESTful para operaciones CRUD
- Programación Reactiva: Manejo asíncrono y no bloqueante de peticiones

## Modelo de Datos

La aplicación gestiona productos con la siguiente estructura:

| Campo               | Tipo                               | Descripción                      |
| ------------------- | ---------------------------------- | -------------------------------- |
| product_id          | Integer                            | Identificador único del producto |
| product_code        | varchar(10)                        | Código del producto (requerido)  |
| product_name        | varchar(100)                       | Nombre del producto (requerido)  |
| product_description | varchar(200)                       | Descripción del producto         |
| reg_date            | timestamp                          | Fecha de registro (requerido)    |
| mod_date            | timestamp                          | Fecha de última modificación     |
| state Boolean       | Estado activo/inactivo (requerido) |

## Prerrequisitos

- Java 17
- IDE de tu preferencia (IntelliJ IDEA, Eclipse, VS Code)

## Descarga y Configuración

```sh
git clone git@github.com:bcondict/scotiaTechTest.git
cd scotiaTechTest
```

## Instalación y Ejecución

### Paso 1: Compilar el proyecto

```bash
gradle compileJava
```

### Paso 2: Ejecutar la aplicación

- Opción A: Usando Gradle Wrapper

  ```bash
  ./gradlew bootRun
  ```

  En Windows:

  ```bash
  gradlew.bat bootRun
  ```

- Opción B: Construir y ejecutar el JAR

  ```bash
  ./gradlew clean build
  java -jar build/libs/nombre-del-proyecto-*.jar
  ```

### Paso 3: Verificar que la aplicación esté funcionando

La aplicación se iniciará en el puerto 8080 por defecto. Puedes verificar accediendo a:

- Aplicación: http://localhost:8080
- Consola H2: http://localhost:8080/h2-console

Credenciales H2 Console:

- URL: jdbc:h2:mem:productdb
- Usuario: sa
- Contraseña: (dejar en blanco)

## Correr test

```bash
./gradlew test
```

## Uso de la API

### Endpoints disponibles

1. Crear un producto

```bash
POST /api/products
Content-Type: application/json

{
  "code": "PROD001",
  "name": "Producto Ejemplo",
  "description": "Descripción del producto",
  "state": true
}
```

2. Obtener producto por ID

```
GET /api/products/{id}
```

3. Listar todos los productos

```
GET /api/products
```

4. Actualizar producto

```
PUT /api/products/{id}
Content-Type: application/json

{
  "code": "PROD001",
  "name": "Producto Actualizado",
  "description": "Descripción actualizada",
  "state": false
}
```

5. Eliminar producto

```
DELETE /api/products/{id}
```

### Ejemplos de uso con cURL

1. Crear producto:

```bash
curl -X POST http://localhost:8080/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "code": "TEST001",
    "name": "Producto de prueba",
    "description": "Este es un producto de prueba",
    "state": true
  }'
```

2. Obtener todos los productos:

```bash
curl -X GET http://localhost:8080/api/products
```

3. Obtener producto por ID:

```bash
curl -X GET http://localhost:8080/api/products/{id}
```

4. Actualizar producto:

```bash
curl -X PUT http://localhost:8080/api/products/{id} \
  -H "Content-Type: application/json" \
  -d '{
    "code": "TEST001",
    "name": "Producto actualizado",
    "description": "Descripción actualizada",
    "state": false
  }'
```

5. Eliminar producto:

```bash
curl -X DELETE http://localhost:8080/api/products/1
```

## Estructura del Proyecto

```
src/main/java/
├── com.example.demo/
│   ├── controller/    # Controladores REST
│   ├── entities/      # Entidades
│   ├── dto/           # DTOs
│   ├── repository/    # Repositorios reactivos
│   ├── service/       # Lógica de negocio
│   └── Application.java # Clase principal

build.gradle           # Configuración de Gradle
settings.gradle        # Configuración del proyecto
gradlew                # Gradle wrapper para Unix/Linux
gradlew.bat           # Gradle wrapper para Windows
```
