# Proyecto 1

## _Reparación de Motocicletas_

![Group 1597](https://github.com/delavware/reparacion-motos/assets/126528899/37e8acd1-f5aa-4c2c-a94e-20a7c60f73a5)

### Enunciado

“Trabajamos en una empresa que se encarga de la reparación de motocicletas, donde el usuario puede agendar una cita para que pueda dejar su motocicleta. El personal, una vez arreglada la motocicleta, deberá actualizar el servicio como "completado" en la base de datos de la empresa.

La empresa nos contrató como desarrolladores de backend para crear una API que sea capaz de poder agendar citas para los usuarios, y que los empleados puedan actualizar el estado del servicio cuando los motocicletas ya estén listos para que los recojan.”

### Flujo de trabajo

![proyec1_flujo_trabajo](https://github.com/delavware/reparacion-motos/assets/126528899/1d6c5ec8-859e-45e8-a199-ff39a1b90d90)

### Pasos

- Instalar express y nodemon
- Crear un servidor de express, corriendo en el puerto de su gusto
- Conectarse a su base de datos en PostgreSQL
- Crear los siguientes modelos basados en el siguiente diagrama: 

![image 6](https://github.com/delavware/reparacion-motos/assets/126528899/7ec509df-0655-4993-b9f9-a7f75a450cac)

### Consideraciones

- Para el status del modelo _**user**_, asignar como valor default **available.**
- Para el status del modelo _**repairs**_, asignar como valor default **pending.**

### Endpoints

![Frame 9](https://github.com/delavware/reparacion-motos/assets/126528899/ef233214-d632-46dd-8788-7697ebbe20e2)



