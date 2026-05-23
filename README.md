# 🚀 PRE ICFES — Progressive Web App (PWA)

¡Bienvenido al repositorio oficial de **PRE ICFES**! Una aplicación web interactiva, moderna y completamente responsiva diseñada de forma autodidacta para preparar de manera óptima las pruebas de estado de acceso a la educación superior.

Este proyecto ha sido estructurado con un enfoque híbrido, ofreciendo una experiencia visual y functional única dependiendo del dispositivo desde el cual se acceda.

---

## 📅 Metodología de Estudio Integrada

La aplicación promueve un sistema de aprendizaje activo y organizado por semanas para abarcar de manera equilibrada todas las materias evaluadas (Matemáticas, Lectura Crítica, Ciencias Naturales, Sociales e Inglés):

1. **Planificación Semanal:** El estudiante debe seguir los temas secuencialmente. La regla de oro es abordar el **Tema 1 de cada materia durante la Semana 1**, el Tema 2 durante la Semana 2, y así sucesivamente.
2. **Tiempo de Enfoque:** Cada tema requiere una dedicación estimada de entre **1 y 3 horas de estudio profundo**, garantizando la asimilación correcta de los conceptos antes de avanzar.
3. **Validación de Conocimientos (Sábados de Simulacro):** Al finalizar la jornada de estudio semanal, los días **sábados**, el estudiante debe realizar el simulacro correspondiente (ej. *Finalizar Semana 1 ➔ Realizar Simulacro 1*). Esto sirve para medir el progreso en condiciones reales de examen.

---

## 🛠️ Arquitectura Técnica y Desarrollo

Como proyecto enfocado en ingeniería de software y desarrollo frontend, la aplicación implementa tecnologías web nativas y de vanguardia para lograr el rendimiento de una app móvil sin salir del navegador:

* **Despliegue y Multi-Interfaz:** Se creó una pantalla inteligente de bienvenida (*Splash Screen*) que permite al usuario seleccionar su entorno de trabajo.
* **Inyección Dinámica de Interfaz:** Para garantizar que el diseño de escritorio y el diseño de celular no interfirieran en las reglas de estilos CSS, la lógica de la app utiliza una técnica avanzada: las interfaces completas de PC y Celular están codificadas e inyectadas dinámicamente mediante **Base64** y cargadas a través de objetos **Blob URL** en un iframe controlado.
* **Características de PWA (Progressive Web App):**
  * **Service Worker (`service-worker.js`):** Implementación de una estrategia de caché para almacenar el shell de la aplicación y recursos críticos, permitiendo que la plataforma funcione de manera **totalmente offline (sin internet)** una vez instalada.
  * **Web App Manifest (`manifest.json`):** Configuración de marcas, colores corporativos (`#0984e3`) e iconos adaptativos en resoluciones `192x192` y `512x512` para habilitar la instalación nativa en sistemas operativos móviles y de escritorio.
  * **Persistencia de Estado:** Uso de `localStorage` para recordar la elección de interfaz del usuario. De este modo, tras la primera selección, la app se abre directamente en el modo elegido (PC o Celular) sin mostrar nuevamente la pantalla de bienvenida, emulando el comportamiento de una aplicación nativa instalada.

---

## 💻 Instalación en Dispositivos

Al ser una PWA instalable, no necesitas descargar ejecutables ni archivos pesados de tiendas externas:

### En Computadora (PC/Laptop):
1. Abre el enlace del despliegue en un navegador moderno basado en Chromium (Microsoft Edge, Google Chrome, Brave).
2. En la barra de direcciones de arriba (junto a la estrella de favoritos), haz clic en el icono de **Instalar Aplicación** (Monitor con flecha o el símbolo `+`).
3. Confirma la instalación y marca la casilla **"Crear acceso directo en el escritorio"**.

### En Dispositivos Móviles (Android/iOS):
1. Ingresa al enlace desde el navegador del celular.
2. Espera el aviso emergente en la parte inferior que dice **"Agregar PRE ICFES a la pantalla de inicio"** y selecciónalo.
3. (Alternativa) Entra al menú de opciones del navegador y presiona **"Instalar aplicación"** o **"Añadir a pantalla de inicio"**.

---

## 👤 Creador y Contacto

Este proyecto ha sido desarrollado con dedicación por **Johstin** con ayuda de **IA**, estudiante de software que busca optimizar los procesos de aprendizaje autónomo mediante tecnología abierta.

Si tienes comentarios, sugerencias o deseas reportar un error, puedes escribir a:
* 📧 **Correo Electrónico Profesional:** [johstinquinto12@gmail.com](mailto:johstinquinto12@gmail.com)

---
*Desarrollado con fines educativos y de código abierto.*
---
*version: 1.0*
