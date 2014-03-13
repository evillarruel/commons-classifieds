Commons Classifieds
===================

Template base de todos los sites de clasificados
#### ML clasificados
#### TuCarro CO-VE
#### TuInmueble CO-VE
#### TuMoto CO-VE
#### TuLancha CO-VE
#### TuAvion CO-VE
#### AutoPlaza MX


### Versión completa
Uso general en todas las aplicaciones
#### Contiene
* Logo
* Search
* Opciones de menu
* Iconos de contacto y ayuda
* Footer extendido

### Versión light
De uso en aplicaciones con funcionalidad bien definida, ej: formularios.
#### Contiene
* Logo
* Icomo de ayuda
* Footer con solo datos legales

### Responsive Mobile
Cada una de las versiones de los templates base se adapta si el usuario ingresa de un dispositivo móvil.

Solo se carga la hoja de estilos correspondiente a mobile si el usuario ingresa de un dispositivo móvil.

````html
<!-- Load only for mobile -->
<link rel="stylesheet" type="text/css" href="css/mobile.css" media="only screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)">
<link rel="stylesheet" type="text/css" href="css/mobile.css" media="only screen and (-webkit-min-device-pixel-ratio: 1.5)"/>
<link rel="stylesheet" type="text/css" href="css/mobile.css" media="only screen and (-webkit-min-device-pixel-ratio: 2)"/>
````

#### Carga de JS solo para mobile
Si el script detecta que es un dispositivo mobile se realiza la llamada.
````html
if (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPad') != -1 || navigator.userAgent.indexOf('Blackberry') != -1 || navigator.userAgent.indexOf('Android') != -1) {
		require.js(["js/mobile.js"]);
}
````

Con esto evitamos sobrecargar la hoja de estilos general "commons-classifieds.css" con la incorporación media queries y tampoco cargamos ningún script especifico para mobile.

##Cambio de site
La base estructural del HTML es la misma para todos los sites, solo tenemos que cambiar una clase en el wrapper para realizar el salto de un site a otro.
Por defecto están los estilos de ML.

````html
<!-- Replace the site. Default ml -->
<div class="ml-common-wrapper">
<!-- <div class="ml-common-wrapper tc"> -->
<!-- <div class="ml-common-wrapper ti"> -->
<!-- <div class="ml-common-wrapper tm"> -->
<!-- <div class="ml-common-wrapper tl"> -->
<!-- <div class="ml-common-wrapper ta"> -->
````
