import type { WorkGroup } from "./work";

/** The gallery's filter chips in Spanish, same ids as workGroups in work.ts (the group itself is set there). */
export const workGroupsEs: Record<WorkGroup, string> = {
  food: "Comida y bebidas",
  beauty: "Belleza y estética",
  home: "Casa y jardín",
  auto: "Carros",
  kids: "Niños y familia",
  shops: "Tiendas y servicios",
};

/**
 * Spanish copy for the work cards on the /es version of the portfolio.
 *
 * src/data/work.ts stays the source of truth: ids, client names, URLs, status, group and order all come from
 * there. This file only holds the translated category, short line, summary and deliverables, keyed by the
 * same id, in the same order, with each deliverables array the same length as the English one.
 * When a card is added or edited in work.ts, add or update its entry here too.
 */
export const workEs: Record<string, { category: string; short: string; summary: string; deliverables: string[] }> = {
  "chaiwala-shop": {
    category: "Café y restaurante",
    short: "Tienda de chai en Concord, hecha con su menú, sus reseñas y sus fotos reales.",
    summary:
      "Un sitio web premium y completo para un chaiwala (tienda de chai) de Concord, CA, hecho con su menú real, sus reseñas reales de 5 estrellas y las fotos de su propia marca.",
    deliverables: ["Diseño y desarrollo web a la medida", "Menú completo", "Sección de reseñas", "Hecho para el celular, ya en línea"],
  },
  "the-dive": {
    category: "Bar y lounge",
    short: "Bar estilo speakeasy en Walnut Creek. Neón, su logo y todo su menú de bebidas.",
    summary:
      "Un sitio web oscuro y con luces de neón para un bar estilo speakeasy de Walnut Creek, hecho con su logo real, sus reseñas de 5 estrellas en Google y su menú completo de bebidas.",
    deliverables: ["Diseño y desarrollo web a la medida", "Menú completo de cervezas y cócteles", "Sección de reseñas", "Hecho para el celular, ya en línea"],
  },
  "little-red-bistro": {
    category: "Café y bistró",
    short: "Bistró en Pleasant Hill. Cambié su página vieja por una con todo su menú de crepas.",
    summary:
      "Un rediseño completo para un bistró de Pleasant Hill que cambia un sitio anticuado por uno moderno, hecho con su menú real de crepas y paninis, sus reseñas reales de Yelp y su lista completa de amenidades.",
    deliverables: ["Diseño y desarrollo web a la medida", "Menú completo (más de 40 opciones)", "Sección de reseñas", "Hecho para el celular, ya en línea"],
  },
  "pittsburg-tires": {
    category: "Taller y llantera",
    short: "Llantera en Pittsburg que no tenía página. Negro asfalto y amarillo de seguridad.",
    summary:
      "Un diseño industrial y llamativo para una llantera de Pittsburg que no tenía sitio web: colores de asfalto oscuro y amarillo de seguridad, estadísticas en forma de medidor y los servicios acomodados en bloques tipo bento, con sus reseñas reales de 4.7 estrellas al centro.",
    deliverables: ["Diseño y desarrollo web a la medida", "Servicios y contacto listo para citas", "Sección de reseñas", "Hecho para el celular, ya en línea"],
  },
  "luxe-lounge": {
    category: "Salón de belleza",
    short: "Salón de belleza en Concord. Colores del salón real y la historia de la dueña.",
    summary:
      "Un diseño totalmente distinto para un salón de belleza de Concord: menú lateral fijo, colores suaves estilo boho-glam sacados del interior del salón real, y una presentación personal, “Conoce a tu estilista”, con la historia real de la dueña.",
    deliverables: ["Diseño y desarrollo web a la medida", "Servicios y reserva de citas", "Sección de reseñas", "Hecho para el celular, ya en línea"],
  },
  "trl-boyz": {
    category: "Streetwear y tienda en línea",
    short: "Tienda de streetwear con un visor 360 que giras arrastrando.",
    summary:
      "Una tienda de streetwear en blanco y negro puro, hecha a partir de las referencias de la marca: un visor de producto 360 que giras arrastrando, para ver el frente y la espalda antes de comprar, y una dirección de arte horror-grunge hecha a la medida, con cursor propio e interfaz tipo terminal.",
    deliverables: ["Diseño y desarrollo web a la medida", "Visor 360 de producto (arrastra para girar)", "Carrito y registro a la medida", "Hecho para el celular, ya en línea"],
  },
  "iron-therapy-gym": {
    category: "Gimnasio de fuerza",
    short: "Gimnasio 24/7 en Concord. Portada de día y de noche, y sus reseñas reales de Yelp.",
    summary:
      "Un sitio lleno de energía, con temática de forja, para un gimnasio 24/7 de Concord: portada dividida entre día y noche, contadores que van subiendo, chispas de brasa que suben y un muro de reseñas reales de Yelp con 5.0 estrellas, con la historia del propio dueño al centro.",
    deliverables: ["Diseño y desarrollo web a la medida", "Programas, galería y preguntas frecuentes", "Sección de reseñas", "Hecho para el celular, ya en línea"],
  },
  "feels-good-barbershop": {
    category: "Barbería",
    short: "Barbería familiar en Pittsburg. Un poste de barbería que gira y una tabla de precios de las de antes.",
    summary:
      "Un diseño americano vintage para una barbería familiar de Pittsburg que no tenía sitio web: un poste de barbería rojo, crema y azul marino que gira, hecho con un patrón SVG de verdad, un tablero de precios vintage y un muro de reseñas reales de 4.6 estrellas sacadas de su página de Booksy.",
    deliverables: ["Diseño y desarrollo web a la medida", "Enlace para agendar en tiempo real", "Sección de reseñas", "Hecho para el celular, ya en línea"],
  },
  "oasis-cafe": {
    category: "Café halal",
    short: "Café halal en Lafayette. El menú va bajando por capas, como un oasis.",
    summary:
      "Un café halal de Lafayette convertido en el informe de campo del oasis que le da su nombre: el menú va acomodado en estratos cada vez más hondos, hasta llegar a un acuífero que brilla. Con un muro de reseñas reales de Yelp de 4.3 estrellas y fotos reales del lugar.",
    deliverables: ["Diseño y desarrollo web a la medida", "Menú completo", "Sección de reseñas y fotos", "Hecho para el celular, ya en línea"],
  },
  "gm-landscape": {
    category: "Jardinería y hardscape",
    short: "Jardinería en Pittsburg, negocio familiar de hace 30 años. Con fotos de sus propios trabajos.",
    summary:
      "Un sitio de vidrio líquido, con mucho movimiento, para una cuadrilla de jardinería de Pittsburg, negocio familiar desde hace 30 años: una interfaz de vidrio esmerilado con un brillo que sigue al cursor y tarjetas que se inclinan en 3D, flotando sobre sus propias fotos de proyectos reales, y su reseña real de 5 estrellas en Yelp.",
    deliverables: ["Diseño y desarrollo web a la medida", "Galería de servicios y proyectos", "Sección de reseñas", "Hecho para el celular, ya en línea"],
  },
  "mari-eli-cleaning": {
    category: "Limpieza de casas",
    short: "Limpieza de casas en Concord. Sin fotos, con azulejos dibujados a mano que se mueven.",
    summary:
      "Un sitio totalmente gráfico, sin fotos, para una compañía de limpieza de Concord fundada en 2007 por dos profesionales de la limpieza que nacieron en Brasil: un patrón original de azulejos dibujado a mano que se dispersa y luego se acomoda de golpe en una cuadrícula exacta conforme bajas por la página, con su muro de reseñas reales de Yelp al centro: 4.8 estrellas en 122 reseñas.",
    deliverables: ["Diseño y desarrollo web a la medida", "Animación original con patrón de azulejos", "Sección de reseñas", "Hecho para el celular, ya en línea"],
  },
  "aa-auto-repair": {
    category: "Taller mecánico",
    short: "Taller mecánico en Concord. Una puerta de garaje que se abre conforme bajas.",
    summary:
      "Un sitio con mucho movimiento para un taller mecánico de Concord, negocio familiar desde hace 24 años, inspirado en el reel de una agencia digital de primer nivel: una puerta de garaje enrollable que se abre conforme bajas por la página, sobre fotos reales del taller, un menú circular tipo tablero de instrumentos y un muro de reseñas reales de Yelp con 4.9 estrellas y 208 reseñas.",
    deliverables: ["Diseño y desarrollo web a la medida", "Portada con puerta de garaje que se abre al bajar", "Menú circular tipo tablero de instrumentos", "Hecho para el celular, ya en línea"],
  },
  "porsche-walnut-creek": {
    category: "Agencia Porsche · Concepto 3D",
    short: "Escoge una pintura real de Porsche y mira en 3D hasta dónde llega el film de protección.",
    summary:
      "Un sitio conceptual para una agencia Porsche de Walnut Creek, construido en torno a un estudio de protección en 3D en vivo: escoges una pintura real de Porsche, ves exactamente dónde termina el film de protección de pintura (PPF), pruebas cómo queda con polarizado y cerámico, y luego mandas tu configuración a financiamiento. Escenas fotográficas en 8k, una portada con las luces traseras y una línea del tiempo con su historia.",
    deliverables: ["Configurador 3D en tiempo real (WebGL)", "Pase a financiamiento en el showroom", "Portada cinematográfica con scroll", "Hecho para el celular, ya en línea"],
  },
  "castagna-pasticceria": {
    category: "Pastelería y heladería",
    short: "Pastelería en Lafayette con un menú QR para las mesas que editan desde Google Sheets.",
    summary:
      "Un sitio conceptual para una pastelería de Lafayette: un video en 4K de espresso cayendo sobre su gelato, su vitrina real de pasteles con los precios escritos a mano, y un menú QR para las mesas, que ellos mismos editan desde Google Sheets. Las mismas tarjetas de mesa llevan a los clientes a las reseñas de Google del local.",
    deliverables: ["Diseño y desarrollo web a la medida", "Menú QR para mesas y tarjetas para imprimir", "Menú que ellos mismos editan (Google Sheets)", "Hecho para el celular, ya en línea"],
  },
  "esparzas-resin": {
    category: "Pisos epóxicos · Concepto",
    short: "Pisos epóxicos en Watsonville. Haz remolinos en un piso metálico con el dedo.",
    summary:
      "Un sitio conceptual bilingüe para un instalador de pisos epóxicos de Watsonville. La primera pantalla es un piso epóxico metálico en vivo: lo mueves con el dedo para hacer remolinos, le cambias el color o mezclas los tuyos. Un diseñador de flake echa hojuelas sobre el piso de un garaje, y el formulario de cotización gratis le manda tus pies cuadrados y tu diseño directo a su celular o a su Instagram.",
    deliverables: ["Piso metálico interactivo (WebGL)", "Diseñador de pisos con flake", "Inglés / español", "Cotización por texto o DM de Instagram"],
  },
  alumifred: {
    category: "Canceles y barandales · Concepto",
    short: "Canceles de baño y barandales en San José. Dibujas tu regadera y le llega a Fred por texto.",
    summary:
      "Un sitio conceptual para un equipo de San José que instala canceles de baño de vidrio sin marco y barandales de vidrio. Dibujas tu regadera (la forma, los herrajes y la medida aproximada) o mides el tramo del barandal, ves cómo cambia el dibujo mientras escoges, y todo se convierte en un mensaje de texto para Fred. Hecho con sus propias fotos y video de trabajos.",
    deliverables: ["Herramienta para dibujar tu regadera", "Herramienta para medir barandales", "Cotización por texto", "Sus trabajos reales y su reel"],
  },
  "fit-fuel-meals": {
    category: "Meal prep · Concepto",
    short: "Meal prep en Hayward. Arma tu caja de 10 y manda el pedido por DM.",
    summary:
      "Un sitio conceptual bilingüe para un chef de meal prep (comidas preparadas) de Hayward, hecho con sus propios reels de la cocina y fotos de sus comidas. Bajas por la página recorriendo su cocina, armas una caja de 10 con el menú de este domingo, y el pedido queda escrito para que lo pegues en su DM de Instagram. Abre en español y tiene un botón de verdad para cambiar a inglés.",
    deliverables: ["Diseño oscuro y cinematográfico con sus propios reels", "Arma tu caja con el menú de la semana", "Español / inglés", "Pedidos por DM de Instagram"],
  },
  "premium-ppf": {
    category: "Wraps, PPF y polarizado · Concepto",
    short: "Wraps y PPF en Richmond. Toca una muestra y cambia el color de una Range Rover real.",
    summary:
      "Un sitio conceptual para un taller de wraps, film de protección de pintura (PPF) y polarizado en Richmond. Un abanico de muestras de film le cambia el color al techo de una Range Rover real de sus trabajos, un diagrama enseña lo que cubre cada paquete de PPF, y un cotizador te escribe el mensaje de texto.",
    deliverables: ["Vista previa de color con abanico de muestras", "Diagrama de lo que cubre el PPF", "Trabajos reales de antes / después", "Cotización gratis por texto"],
  },
  "nails-by-june": {
    category: "Estudio de uñas · Concepto",
    short: "Estudio de uñas en Pleasant Hill, dibujado como su mesa de manicure vista desde arriba.",
    summary:
      "Un sitio conceptual para un estudio de uñas acogedor en Pleasant Hill, dibujado como su mesa de manicure vista desde arriba, con una lámpara que sigue tu cursor, sus frascos de esmalte y sus fotos reales de uñas.",
    deliverables: ["Escena ilustrada de la mesa de manicure", "Servicios y fotos del estudio", "Citas por llamada o texto", "Hecho para el celular, ya en línea"],
  },
  "taqueria-los-mexicanos": {
    category: "Taquería · Concepto",
    short: "Taquería en Antioch con estilo de cartel de baile. En español y en inglés.",
    summary:
      "Un sitio conceptual bilingüe para una taquería de Antioch, inspirado en los carteles fosforescentes de bailes que se ven en las calles de México. Trae su menú completo, fotos reales de la comida y paquetes para fiestas.",
    deliverables: ["Dirección de arte de cartel de baile", "Menú completo", "Español / inglés", "Pedidos por teléfono o WhatsApp"],
  },
  "simsers-handy-service": {
    category: "Handyman · Concepto",
    short: "Handyman en Pittsburg. Prende un breaker y ve los trabajos que hace en cada cuarto.",
    summary:
      "Un sitio conceptual para un handyman de Pittsburg, hecho como una caja de breakers: cada switch es un cuarto de la casa, así que prendes el de la cocina o el del garaje para ver los trabajos que hace ahí. Fotos reales de sus trabajos y cotizaciones por texto.",
    deliverables: ["Selector de cuartos tipo caja de breakers", "Fotos reales de trabajos", "Cotización por texto", "Hecho para el celular, ya en línea"],
  },
  "portal-artesanal": {
    category: "Artesanías mexicanas · Concepto",
    short: "Tienda de artesanías de México en Walnut Creek, bajo papel picado.",
    summary:
      "Un sitio conceptual bilingüe para una tienda de Walnut Creek de artesanías hechas a mano en México, bajo tiras de papel picado, con sus productos reales, sus talleres y sus piezas de Día de Muertos.",
    deliverables: ["Dirección de arte con papel picado", "Productos y talleres", "Español / inglés", "Hecho para el celular, ya en línea"],
  },
  "tax-services-inc": {
    category: "Oficina de impuestos · Concepto",
    short: "Oficina familiar de impuestos en Walnut Creek, abierta desde 1998, como papel de seguridad.",
    summary:
      "Un sitio conceptual para una oficina familiar de impuestos de Walnut Creek, abierta desde 1998. El sitio se ve como papel de seguridad, con una roseta guilloché, y está escrito con la voz de la familia que la atiende.",
    deliverables: ["Dirección de arte de papel de seguridad", "Servicios y cómo funciona", "Llama para hacer tu cita", "Hecho para el celular, ya en línea"],
  },
  "angelica-martinez-real-estate": {
    category: "Corredora de bienes raíces · Concepto",
    short: "Corredora de bienes raíces en Martinez, dibujada como un mapa viejo del centro.",
    summary:
      "Un sitio conceptual para una corredora de bienes raíces de Martinez, dibujado como un mapa de seguros contra incendios, coloreado a mano, del centro de Martinez, con fotos de la ciudad y de su oficina en Ferry St., con crédito a sus autores.",
    deliverables: ["Dirección de arte de mapa coloreado a mano", "Fotos de la ciudad con crédito", "Llama o mira cómo llegar", "Hecho para el celular, ya en línea"],
  },
  "four-paws-grooming": {
    category: "Estética canina · Concepto",
    short: "Estética canina en Walnut Creek. Tú mismo le cortas el pelo al perro en el diagrama.",
    summary:
      "Un sitio conceptual para una estética canina de Walnut Creek que seca a mano y termina con tijera a cada perro: un diagrama de corte que vas recortando con tu cursor, y sus fotos reales de antes y después.",
    deliverables: ["Diagrama de corte interactivo", "Fotos reales de antes / después", "Llama para hacer tu cita", "Hecho para el celular, ya en línea"],
  },
  guadaclean: {
    category: "Limpieza de exteriores · Concepto",
    short: "Canaletas, techos, paneles solares y entradas en Antioch. Limpia el techo con el dedo y llama.",
    summary:
      "Un sitio conceptual para un equipo de limpieza de exteriores en Antioch (canaletas, techos, paneles solares, ventanas y entradas). La página baja por una casa del techo a la entrada, te deja limpiar la mugre de una foto con el dedo y arma tu lista antes de llamar.",
    deliverables: ["Herramienta para limpiar la foto", "Lista para la llamada", "Reseñas reales de Google y Yelp", "Hecho para el celular, ya en línea"],
  },
  "ww-mobile-mechanic": {
    category: "Mecánico a domicilio · Concepto",
    short: "Mecánico a domicilio en El Sobrante. Toca lo que hace tu carro y te escribe el mensaje.",
    summary:
      "Un sitio conceptual para un mecánico que va a tu casa en el oeste de Contra Costa. Tocas lo que hace el carro, pones año, marca y modelo, y el sitio le escribe el mensaje a Will.",
    deliverables: ["Selector de síntomas", "Mensaje listo para el mecánico", "Reseñas reales de Yelp", "Hecho para el celular, ya en línea"],
  },
  "lashed-out": {
    category: "Estudio de pestañas · Concepto",
    short: "Estudio de pestañas en Concord. Tres toques te dan tu set con el precio real, y reservas.",
    summary:
      "Un sitio conceptual para una artista de pestañas en Concord especializada en lifting coreano. Con tres toques llegas a su servicio y precio reales, el menú completo está en la página y la reserva va directo a su Acuity.",
    deliverables: ["Selector de set", "Menú completo con precios", "Reserva en Acuity", "Hecho para el celular, ya en línea"],
  },
  "her-creative-events": {
    category: "Globos y decoración · Concepto",
    short: "Guirnaldas de globos y decoración en Antioch. Escoge tus colores y ve tu guirnalda.",
    summary:
      "Un sitio conceptual para una decoradora de eventos en Antioch (guirnaldas de globos, fondos, mesas y bodas). Escoges los colores de los globos, ves cómo cambia la guirnalda y mandas tu selección a su formulario.",
    deliverables: ["Vista previa de colores", "Manda tu selección", "Reseñas reales de Thumbtack", "Hecho para el celular, ya en línea"],
  },
  "lima-jumpers": {
    category: "Rentas para fiestas · Concepto",
    short: "Brincolines en Concord. Revisa qué cabe en tu patio y reserva por texto.",
    summary:
      "Un sitio conceptual para un negocio de renta de brincolines y resbaladillas de agua en Concord, con una herramienta que revisa qué inflable cabe en tu patio antes de que mandes un texto para reservar.",
    deliverables: ["Herramienta: ¿cabe en tu patio?", "Inflables con medidas reales", "Reserva por texto", "Hecho para el celular, ya en línea"],
  },
  "astro-kids-daycare": {
    category: "Guardería en casa · Concepto",
    short: "Guardería en casa en Walnut Creek. Gira la rueda de estrellas y ve cómo es su día.",
    summary:
      "Un sitio conceptual para una guardería en casa de Walnut Creek, con licencia e inspirada en Montessori, dibujado como un planisferio celeste. Gira el disco y el horario real de entre semana pasa bajo la ventana como constelaciones; luego vienen el registro del estado, la proporción 1 : 3, las reseñas y la colegiatura según los días a la semana.",
    deliverables: ["Horario en una rueda que puedes girar", "Registro del estado y reseñas", "Colegiatura por días a la semana", "Llama para agendar una visita"],
  },
  "mayrik-childcare": {
    category: "Preescolar en casa · Concepto",
    short: "Preescolar en casa en Concord. Bloques de hule espuma que caen con física real.",
    summary:
      "Un sitio conceptual para un preescolar en casa con licencia en Concord, hecho como el área de juego de hule espuma que tiene en su garaje adaptado. Las piezas de hule espuma caen en la portada con física real, y cada una que tocas se agrega a un mensaje para pedir una visita. Después vienen el registro del estado, la semana, la comida y los mensajes que reciben los papás cada día.",
    deliverables: ["Portada con piezas de hule espuma y física real", "Mensaje de visita que armas tocando", "Registro del estado y reseñas de Yelp", "Hecho para el celular, ya en línea"],
  },
  "miles-of-smiles": {
    category: "Guardería y preescolar · Concepto",
    short: "Guardería en casa en Concord, como un tablero de fieltro. Desliza a la edad de tu niño.",
    summary:
      "Un sitio conceptual para una guardería y preescolar en casa, en Concord, contado como el tablero de fieltro de la hora del círculo. Desliza la sonrisa hasta la edad de tu niño y el tablero se vuelve a armar con su día; el horario, la comida y el tiempo al aire libre van en un tablero de bolsillos que te dice si está abierto ahorita.",
    deliverables: ["Ilustración en tablero de fieltro, sin fotos", "Tablero del día según la edad", "Tablero de abierto / cerrado en vivo", "Llama con un toque"],
  },
  "sugar-rush": {
    category: "Tienda de postres · Concepto",
    short: "Una dulcería inventada, con una piñata que puedes romper.",
    summary:
      "Una dulcería inventada, con una piñata que puedes romper en la primera pantalla. El menú viene de dos lugares de postres reales del Área de la Bahía, usado con permiso: pasteles para fiesta, croffles, snowflake bingsu y boba, acomodados como los pasillos de una tienda de fiestas.",
    deliverables: ["Portada con piñata que se rompe", "Siete pasillos de menú", "Arma tu caja para fiesta", "Hecho para el celular, ya en línea"],
  },
  "kold-krate": {
    category: "Tinas frías de secuoya · Concepto",
    short: "Tinas frías de secuoya en Santa Cruz, con las propias palabras del dueño.",
    summary:
      "Un sitio conceptual para un artesano de Santa Cruz que construye a mano tinas de agua fría y caliente (cold plunges y hot plunges) con secuoya de California. Escrito con su propia voz, con sus razones para comprarle una a él: se ven mejor, tienen más espacio por dentro y él mismo hace cada una. Grises de piedra tranquilos, sus fotos reales, y lo caliente y lo frío lado a lado.",
    deliverables: ["Diseño y desarrollo web a la medida", "Textos con la propia voz del dueño", "Selector caliente / frío y cotización", "Hecho para el celular, ya en línea"],
  },
};
