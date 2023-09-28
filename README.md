# UXUserExperienceWeb
Repositorio UX User Experience Web

## Ejecutar el proyecto
Para ejecutar el proyecto Alarma GPS se debe instalar las dependencias necesarias del proyecto con el siguiente comando:
```
npm install
```

Si quiere activar el servicio de mapas, puede reemplazar la llave del API de Google (GOOGLE_API) en el archivo index.html en la sección body, scripts:
```
<body>
  <app-root></app-root>
  <script src="https://maps.googleapis.com/maps/api/js?key=GOOGLE_API"></script>
</body>
```

Finalmente puede correr la aplicación ejecutando el siguiente comando:
```
ng serve
```
La aplicación estará disponible en la dirección [http://localhost:4200/alarma/listar]
