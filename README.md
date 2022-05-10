 # ⭐️ Alura Challenge - Oracle ONE Encriptador de Texto 

Bien explorer, vamos ahora a realizar un proyecto nuevo empezando desde los requerimientos:

# Twitter

```markdown

Después de evaluar tiempo y esfuerzos, el equipo de Launch X ha decidido crear la aplicación `Twitter`. Para ello han definido la primera etapa del sprint con los siguientes requerimientos a desarrollar:

SPRINT 1: Creación de un modelo
 
 Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
Solución: Crear una clase User y un constructor que guarde estos parámetros. 
 
 Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
 Solución: Modifica el constructor de la clase creada y asigna un valor por defecto a estos atributos usando `new Date()`.
 
 Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
 Solución: Agrega los getters regresando la propiedad indicada, no olvides usar `this`.
 
 Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.
 Solución: Agrega los setters usando la palabra `set` y modificando el atributo indicado.
```

# Solución paso a paso

## Creación del proyecto

1. Crea un folder llamado `twitter`.
![folder](/assets/folder.gif)
2. Dentro de él ejecuta `npm init`.
![npminit](/assets/npminit.gif)
3. Agrega jest como dependencia.
![jest](/assets/jest.gif)
4. Agrega los folders `app` y `test`.
![folders](/assets/folders.gif)
5. No olvides actualizar tu `package.json` para ejecutar `npm test`. Revisa los ejercicios anteriores.
![test](/assets/test.gif)

**IMPORTANTE: Puedes realizar dentro de tu playbook en `week2/playbook`**

## Estructura de carpetas

Como vamos a realizar un nuevo proyecto, necesitamos tener una buena organización en nuestros directorios:
- Crea dentro de la carpeta app, una carpeta `models` y dentro un archivo llamado `User.js`.
- Dentro de la carpeta `test` crea una carpeta llamada `models` y un archivo llamado `User.test.js`.

![estructura](/assets/estructura.gif)

Nota: Para cada requerimiento nuevo de código por agregar es recomendable siempre agregar el archivo y el archivo de prueba, RECUERDA LAS PRUEBAS NO SON NEGOCIABLES, SON PARTE ESENCIAL DEL DESARROLLO DE SOFTWARE.

## Requerimiento 1 

```
Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
```

Vamos a desarrollar el primer requerimiento. Para ello usaremos el enfoque de TDD porque es una gran guía para diseñar nuestro código.

1. Se tiene que crear una clase `User`, escribe una prueba de unidad con jest en la que instancies un objeto de esta clase indicando las propiedades necesarias, no olvides importar la clase `user` como se indica:

![image](https://user-images.githubusercontent.com/17634377/163697527-7908366a-57d5-40a8-933a-e3fac11b286f.png)

![image](/assets/clase.gif)

2. Ejecuta la prueba `npm test test/models/user.test.js` y verifica que falle. Hasta este punto el archivo `user.js` debería estar vacío.

![image](https://user-images.githubusercontent.com/17634377/163697562-2881e71a-c188-4108-9c04-5c9cd3d6ed46.png)

![image](/assets/testfail.gif)

3. Agrega en el archivo `user.js` la clase User, agrega el constructor para recibir los parámetros necesarios y agregar los atributos. Esto ya lo hemos realizado en los ejercicios anteriores. No olvides exportar tu clase. Se vale correr la misma prueba varias veces.

![image](https://user-images.githubusercontent.com/17634377/163697614-f062b387-c354-4373-b1e1-5917d6b3f01d.png)

4. Corre la prueba de nuevo y verifica que pase. 

![image](https://user-images.githubusercontent.com/17634377/163697627-acd13fcf-4e8b-4a9c-8dfd-67d79458be35.png)

![image](/assets/testpassed.gif)

5. ¡Felicidades! Has creado tu primer requerimiento usando TDD.  

## Requerimiento 2

```markdown
 Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
```

Este requerimiento trata de modificar nuestra clase creada. 

1. Modifica la prueba de unidad creada anteriormente. Para ello modifica el código, ya no envíes los valores de `dateCreated` y `lastUpdated` al instancias la clase, y verifica en la prueba que a pesar de ya no enviarlos, no recibas un valor `undefined`.

![image](https://user-images.githubusercontent.com/17634377/163697824-f2fdd67f-f6a6-4ba0-adb4-edb752fe7576.png)


Recuerda revisar la documentación de Jest para ver que puedes verificar en tus pruebas de unidad.


2. Ejecuta tu prueba y verifica que falle.

![image](/assets/testfail2.gif)

3. Ahora si, ve a tu clase `User` y realiza las modificaciones necesarias para cumplir con la prueba.

![image](https://user-images.githubusercontent.com/17634377/163697843-077d5580-4870-485e-a137-10af5643e650.png)

4. Ejecuta la prueba y verifica que pase.

![image](/assets/testpassed.gif)

5. Felicidades ya realizaste tu segundo requerimiento usando TDD.

Si notas aquí, escribir las pruebas de unidad nos permite definir nuestro requerimiento, por eso son tan importantes y útiles. 

## Requerimiento 3

```markdown
 Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
 Solución: Agrega los getters regresando la propiedad indicada, no olvides usar `this`.
```

1. Agrega una nueva prueba en tu archivo `User.test.js`, adicional a la que ya creamos y modificamos anteriormente en esta práctica.
2. Vamos a probar los getters requeridos en el requerimiento, así que en esta prueba escribe esos casos a probar:

![image](https://user-images.githubusercontent.com/17634377/163697947-e06e8c03-1aa0-49b0-8014-556fca8d2901.png)

3. Corre tu prueba y verifica que falle. 

![image](/assets/getters.gif)

4. Agrega el código que haga pasar tu prueba.

![image](https://user-images.githubusercontent.com/17634377/163697966-3d838e94-75bb-4358-919b-a46822cd375e.png)

5. Corre de nuevo tu prueba y verifica que pase. 

![image](/assets/testpassed%202.gif)

¿Cómo saber si tu código funciona? Por que estás validando su comportamiento mediante pruebas. Usa esta técnica para escribir software de calidad.

## Requerimiento 4

```markdown
 Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.
 Solución: Agrega los setters usando la palabra `set` y modificando el atributo indicado.
 ```
 
1. Agrega otro caso de prueba para probar el uso de los setters que se piden:
 ![image](https://user-images.githubusercontent.com/17634377/163698022-bd77bda3-7787-4f39-aa83-e43374d38390.png)

2. Corre tu prueba y verifica que falle.

![image](/assets/settersTest.gif)

3. Agrega el código para hacer pasar dicha prueba.
![image](https://user-images.githubusercontent.com/17634377/163698036-6c0dafef-579c-4df1-aeeb-e13839d1ee4e.png)
4. Corre tu prueba y verifica que pase. 

![image](/assets/biotest.gif)

<center>

![image](/assets/exito.webp)

</center>

# ⭐️ 4. Sprint 2: Agregar servicios

Si llegaste a este punto ya sabes:

- Crear nuevos proyectos de js con npm.
- Agregar dependencias.
- Agregar Jest como dependencia para pruebas de unidad.
- Hacer pruebas de unidad con Jest.
- Si no has revisado la documentación de Jest, ve al sitio oficial a leer más del tema.
- Conoces cómo funciona TDD y sabes quienes son Ken Beck y Martin Fowler.
- Versionar paso a paso tus cambios en el proyecto.

# Requerimientos del Sprint 2: Interacción con el modelo

```
Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
Criterios de aceptación:
1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
2. El valor de `bio` deberá ser por default para todos los `user` creados.

Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.

Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 

Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos. 
```

# Requerimiento 1: Solución paso a paso

```
Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
Criterios de aceptación:
1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
2. El valor de `bio` deberá ser por default para todos los `user` creados.
```

1. Crea los siguientes archivos: `app/services/UserService.js` y `test/services/UserService.test.js`.

![image](/assets/carpetas.gif)

2. En el archivo `UserService.test.js` agrega una prueba que cubra el requerimiento 1. No olvides importar la clase UserService.

![image](https://user-images.githubusercontent.com/17634377/163698426-2db0c245-9bbd-4446-8acd-9a0863be7be1.png)

3. Corre la prueba y verifica que falle.

![image](/assets/testfailreq1.gif)

4. Agrega el código en `UserService.js` para hacer pasar la prueba. 

![image](https://user-images.githubusercontent.com/17634377/163698446-f2824804-e3b2-457f-8cf3-e4bbea1421c1.png)

5. Corre tu prueba y verifica que esta vez pase. 

![image](/assets/testpassedreq1.gif)

# Requerimiento 2: Prueba de unidad

Bien, ya viste el flujo:
1. Escribe primero tu prueba con el caso a probar.
2. Verifica que tu prueba falle.

![image](/assets/req2fail.gif)

3. Escribe el código necesario.
4. Haz que la prueba pase.

![image](/assets/req2pass.gif)

Te ayudo con la prueba de unidad que deberás hacer pasar para este requerimiento:

![image](https://user-images.githubusercontent.com/17634377/163698477-21aa6acc-cd50-43e9-baf8-587ac7a75165.png)

# Requerimiento 3

Agrega la siguiente prueba y hazla pasar:

![image](https://user-images.githubusercontent.com/17634377/163698486-330ae4e3-61d2-4830-b6d5-f1a17fc6e61d.png)

![image](/assets/req34fail.gif)

# Requerimiento 4

Agrega la siguiente prueba y hazla pasar:

![image](https://user-images.githubusercontent.com/17634377/163698492-807af040-78f9-4103-81ce-db53af3c1a5b.png)

![image](/assets/req34pass.gif)

<center>

![image](/assets/exito.webp)

</center>


# ⭐️ 5. Sprint 3: Agregar vistas
Requerimientos

```markdown

Crea una clase llamada `UserView` que servirá para interactuar con el modelo `User` a través de `userService`. Crea un método en esta clase llamado `create User` que sirva para crear un nuevo objeto user a partir de un `payload`, quiero decir un objeto que contenga información para crearlo.

Requerimientos:
1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
2. Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
3. Valida que un `payload` con algunas de las propiedades necesarias regrese un objeto con la llave `error` indicando `necesitan tener un valor válido`.
4. Verifica que se pueda crear un objeto `User`, al enviar un payload con las siguientes propiedades: `username`, `id` y `name`.
```

#  Requerimiento 1

![image](https://user-images.githubusercontent.com/17634377/163698823-1389d99e-6d63-47fb-8967-1067ac0ca660.png)

# Requerimiento 2

![image](https://user-images.githubusercontent.com/17634377/163698844-37afaced-6726-4aac-a3dc-48e365982d81.png)

# Requerimiento 3

![image](https://user-images.githubusercontent.com/17634377/163698847-3bf06b75-58e3-4a48-8d95-380a91de72d4.png)

# Requerimiento 4

![image](https://user-images.githubusercontent.com/17634377/163698852-df039327-e818-4d37-8e31-3205b9be611c.png)

![image](/assets/sprint5.gif)

<center>

![image](/assets/exito.webp)

</center>
 
 
 
 https://gumodi35.github.io/Challenge-Oracle-One_Gualberto/