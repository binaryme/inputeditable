Input editable forma de uso: 
+EditableInput(name="planta" value=planta) 
es un input editable, se le pasan 2 parámetros 
el parametro name es el name del input
el parametro value es el valor guardado en name

los parametros no pueden empezar con números ej: 
{{> inputeditable name="1v" value=1v}} MAL
{{> inputeditable name="unov" value=unov}} funciona

cómo se usa:

{{#if reportes}}
	{{> inputeditable name="nombre" value=nombre placeholder="Nombre completo"}}
{{/if}}

iteramos sobre los valores de un helper, nuestro inputeditable heredará el id a editar 
y tomará los parámetros de name y value para crear un objeto en la base de datos y poblarlo
ahora sólo debes escribir, el inputeditable tiene autosave.

Parametros 
name="nombre"       el valor a pasar es un string, y es el nombre que tendrá el input 
					y el nombre con el que se guardará en la base de datos

value=nombre		este valor es un helper, toma el valor del campo asignado en name
					cuando ya está creado

placeholder="5.0"   puede ser un ejemplo de lo que debe de llenar la persona en el input
					si lo dejamos vacío, tomará por defecto el nombre marcado en el
					parámetro name