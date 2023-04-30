# proyecto-final-backend ecommerce

Comercio electrónico que permite a los navegantes convertirse en usuarios, clientes registrados que comprarán productos en stock disponibles. Se le adicionan algunos detalles como un chat donde se puede interactuar.
Se preserva información en la base de datos Mongoose Atlas de los usuarios, los productos, mensajes y las compras junto con datos útiles para el delivery.

Variables de entorno modificables en archivo .env:

- PORT: puerto de escucha del servidor.
- MONGO_CONNECT: base de datos con usuario registrado en MongoDB.
- USER & PASS : correo electronico y token (permisos especificos) donde se guarda el registro de los nuevos usuarios en plataforma y confirmacion de compra .
- ACCOUNTSID, AUTHTOKEN & FROM: datos necesarios para confirmar la compra via whatsApp.

API que utiliza motor de plantilla pug, en donde se divide en dos carpetas: withoutUser y userLogged. Fuera de estas carpetas se encuentra un archivo intermediario entre ambos estados. Genera facilidad y orden al visualizar el codigo pasando del back end al front end.
