import type { LocalizedEdition } from "./localized-pages";

// Neutral Spanish editorial copy for searches about chat de personajes con IA.
export const esEdition: LocalizedEdition = {
  ui: {
    language: "Idioma", home: "Inicio", start: "Por dónde empezar", controls: "Modelos y memoria", compare: "Comparar", blog: "Comparativas",
    about: "Quiénes somos", contact: "Contacto", editorial: "Criterios editoriales", privacy: "Privacidad", terms: "Condiciones",
    official: "Ir a SpicyChat", read: "Leer la comparativa", sources: "Fuentes originales", verdict: "Conclusión", allArticles: "Todas las comparativas", more: "Seguir leyendo",
    independent: "Publicación independiente; no es el servicio oficial de SpicyChat", adults: "Información para personas adultas",
    analyticsSettings: "Preferencias de análisis", analyticsTitle: "Análisis opcional",
    analyticsBody: "¿Nos permites usar Google Analytics para saber qué artículos resultan útiles? No activamos seguimiento publicitario.",
    analyticsDecline: "No, gracias", analyticsAccept: "Permitir análisis", analyticsPrivacy: "Detalles de privacidad",
    analyticsStatusPrivacy: "Respetamos la señal de privacidad del navegador. El análisis está desactivado.",
    analyticsStatusOn: "El análisis está activo. Puedes retirar el permiso con «No, gracias».",
    analyticsStatusOff: "El análisis está desactivado. Tu elección solo afecta a este sitio.",
    skip: "Ir al contenido", navigation: "Navegación principal", menu: "Abrir menú", closeMenu: "Cerrar menú",
  },
  home: {
    description: "Spicy Chat AI en español: guía independiente de personajes de IA, rol, modelos, contexto, memoria, normas vigentes y cinco comparativas con alternativas.",
    hero: {
      kicker: "Investigación independiente · solo adultos",
      tagline: "Un personaje llamativo no basta para sostener una historia.",
      body: "Examina cómo influyen la ficha del personaje, el modelo, el contexto y la memoria en un chat de rol con IA. Compara planes y reglas antes de invertir tiempo o dinero.",
      primary: "Ver el método de prueba", secondary: "Explorar cinco comparativas",
    },
    intro: {
      kicker: "01 / Lo esencial", heading: "Qué mirar en Spicy Chat AI",
      lead: "SpicyChat permite descubrir o crear personajes ficticios y conversar con ellos. Esta página es una publicación de análisis: no ofrece chat, cuentas ni generación de imágenes.",
      body: "Para elegir un chat de personajes con IA conviene separar la imagen de portada de lo que pasa después de veinte mensajes. Importan el objetivo del personaje, la escena inicial, el modelo elegido, la parte del historial que cabe en el contexto y las funciones de memoria. La etiqueta «para adultos» tampoco elimina las normas del servicio.",
    },
    journey: {
      kicker: "02 / Tres decisiones", heading: "Descubre, crea y ajusta",
      description: "Una prueba breve con una escena ficticia revela más que una lista de personajes populares.",
      cards: [
        { label: "Descubrir", heading: "Lee la primera escena", body: "Comprueba si la ficha plantea una situación y un motivo para actuar, además de una imagen atractiva." },
        { label: "Crear", heading: "Dale objetivos al personaje", body: "Un deseo, un límite y una forma de hablar ayudan más que una cadena de adjetivos. Evita basarlo en personas reales." },
        { label: "Ajustar", heading: "Cambia una cosa cada vez", body: "Mantén la misma escena al probar otro modelo, persona o longitud de contexto para identificar qué modifica la respuesta." },
      ],
    },
    controls: {
      kicker: "03 / Controles del relato", heading: "Cinco capas que no son lo mismo",
      description: "La tabla oficial separa el contexto, Memory Manager y Semantic Memory 2.0. Cada capa merece una prueba y una comprobación del plan actual.",
      cards: [
        { label: "Personaje", heading: "Ficha y apertura", body: "Una situación concreta permite ver si el personaje actúa según sus motivos o solo repite frases." },
        { label: "Modelo", heading: "Estilo de respuesta", body: "La disponibilidad varía entre planes; compara narración, coherencia y ritmo sin cambiar la escena." },
        { label: "Contexto", heading: "Lo que puede consultar ahora", body: "Que el historial siga visible no significa que todas sus frases entren en la siguiente respuesta." },
        { label: "Memoria", heading: "Datos guardados", body: "Memory Manager y Semantic Memory 2.0 se ofrecen en niveles distintos; revisa qué puede editarse o borrarse." },
        { label: "Plan", heading: "Funciones y coste", body: "Modelos, imágenes, voz y opciones de generación pueden requerir niveles diferentes. Consulta la tabla vigente." },
      ],
    },
    test: {
      kicker: "04 / Prueba repetible", heading: "Mide la continuidad sin usar datos reales",
      description: "Este procedimiento está pensado para que el lector lo reproduzca; no representa un ensayo de rendimiento que hayamos ejecutado en todos los modelos.",
      steps: [
        { heading: "Plantea dos detalles ficticios", body: "Una cita en una estación inventada y una tarea para la siguiente escena bastan. Anota cómo responde al principio." },
        { heading: "Introduce un cambio de tema", body: "Continúa con una conversación cotidiana y un pequeño desacuerdo. Observa si cambian la voz y las motivaciones." },
        { heading: "Retoma el hilo", body: "Sin repetir la pista, comprueba si la respuesta incorpora los detalles. Registra modelo, plan, turnos y memoria activada." },
      ],
    },
    comparison: {
      kicker: "05 / Cinco alternativas", heading: "Compara según lo que quieres hacer",
      description: "Las plataformas de chat con personajes no se distinguen solo por el número de bots: cambian las reglas, los modelos, el descubrimiento y el uso de voz o imágenes.",
      columns: ["Servicio", "Puede encajar si buscas", "Conviene verificar"],
      baseline: ["SpicyChat", "Diseñar rol ficticio para adultos con ajustes de modelo", "Diferencias de contexto y memoria entre planes"],
      options: {
        "spicychat-vs-character-ai": ["Character.AI", "Historias con personajes bajo reglas más restrictivas", "Política sexual y cambios para menores"],
        "spicychat-vs-janitor-ai": ["Janitor AI", "Explorar fichas de la comunidad y ajustes actuales", "Dominio real, modelo y posibles conexiones externas"],
        "spicy-chat-ai-vs-crushon-ai": ["CrushOn AI", "Elegir personajes y conversar desde un modelo gratuito", "Créditos para modelos avanzados"],
        "spicy-chat-ai-vs-polybuzz": ["PolyBuzz", "Descubrir muchos personajes preparados", "Reglas de contenido público y tratamiento de datos"],
        "spicy-chat-ai-vs-girlfriendgpt": ["GirlfriendGPT", "Combinar compañía, voz e imágenes", "Operador compartido y coste del contenido multimedia"],
      },
    },
    privacy: {
      kicker: "06 / Privacidad práctica", heading: "La memoria del personaje no necesita tus secretos",
      body: "Usa nombres y lugares inventados. Antes de escribir una historia larga, distingue entre borrar un chat, editar recuerdos guardados, cerrar una cuenta y cancelar un pago externo. Según la ayuda de SpicyChat, eliminar la cuenta no cancela por sí solo ciertas suscripciones contratadas fuera del sitio.",
      checks: [
        "No uses nombres reales, direcciones, datos de salud ni conversaciones privadas para probar la memoria.",
        "Comprueba qué ocurre con los recuerdos guardados cuando editas un personaje o borras un chat.",
        "Lee el precio de renovación y la gestión de la suscripción en el canal por el que pagaste.",
        "No subas como avatar fotos de personas reales ni imágenes fotorrealistas que parezcan personas reales.",
        "Limita las escenas a adultos ficticios y relaciones consentidas dentro de las normas del producto.",
      ],
    },
    research: {
      kicker: "07 / Antes de decidir", heading: "Tres preguntas mejores que «¿cuántos personajes hay?»",
      description: "Los términos de búsqueda orientan, pero una decisión útil empieza por tu forma real de escribir y conversar.",
      blocks: [
        { heading: "¿Prefieres descubrir personajes o construir uno propio?", paragraphs: [
          "Un catálogo amplio facilita encontrar una premisa, pero la calidad de cada ficha depende de su autor. Lee qué desea el personaje, qué obstáculo tiene y si el primer mensaje permite hacer avanzar la escena. Un retrato vistoso sin contexto puede dar una primera impresión mejor que una conversación larga.",
          "Si quieres crear, empieza con un objetivo y un conflicto sencillos. Prueba una charla tranquila y luego una escena con decisiones. Así distinguirás si los problemas vienen de la definición del personaje, del modelo o de tus instrucciones. No hace falta introducir la biografía ni la foto de alguien real.",
        ] },
        { heading: "¿Te falta contexto o necesitas memoria guardada?", paragraphs: [
          "El contexto es la información que el modelo puede considerar para su próxima respuesta. Una memoria guardada pretende conservar hechos seleccionados fuera de esa ventana inmediata. SpicyChat publica un nivel gratuito y tres niveles de pago, pero Memory Manager y Semantic Memory 2.0 no corresponden al mismo escalón.",
          "No compres por un número aislado de tokens. Mantén fija la misma escena, cambia una opción por vez y anota cuándo reaparece correctamente un hecho ficticio. Contrasta después el plan, el modelo y los límites en la página oficial actual; este sitio no presume de haber medido todos los modelos.",
        ] },
        { heading: "¿Has leído las reglas de avatares y de datos?", paragraphs: [
          "El rol para adultos no admite cualquier escenario. La política oficial prohíbe, entre otras cosas, menores, situaciones no consentidas y representaciones sexuales de personas reales identificables. También restringe fotos reales y retratos fotorrealistas como avatares. Las fotografías editoriales de este artículo no son material para cargar como personaje.",
          "Revisa la eliminación de chats y recuerdos, el cierre de la cuenta y la cancelación de cobros externos. Cuando compares otra plataforma, lee su propia política: una promesa comercial de privacidad no sustituye a las condiciones sobre datos, conservación y permisos.",
        ] },
      ],
    },
    blog: { kicker: "08 / Comparativas", heading: "Cinco maneras de elegir", cta: "Ver todas las comparativas" },
    faq: {
      kicker: "09 / Preguntas frecuentes", heading: "Dudas útiles sobre Spicy Chat AI",
      items: [
        { question: "¿Por dónde empiezo a comparar Spicy Chat AI?", answer: "Elige una escena ficticia para adultos y comprueba por separado personaje, modelo, contexto y memoria. El tamaño del catálogo no mide por sí solo la calidad de la conversación." },
        { question: "¿«Sin filtros» significa que todo está permitido?", answer: "No. SpicyChat publica prohibiciones sobre menores, falta de consentimiento, sexualización de personas reales identificables y otros contenidos. Revisa las reglas vigentes." },
        { question: "¿La versión gratuita incluye todas las memorias?", answer: "La tabla oficial separa el plan gratuito, Memory Manager y Semantic Memory 2.0 por nivel. Consulta el plan que aparece en tu cuenta antes de pagar." },
        { question: "¿Puedo usar mi foto como avatar?", answer: "La política vigente no permite fotos de personas reales ni imágenes tan fotorrealistas que puedan confundirse con ellas. Usa arte ficticio no realista que cumpla las normas." },
        { question: "¿Qué alternativa miro primero?", answer: "Character.AI sirve para contrastar reglas; PolyBuzz, descubrimiento; CrushOn AI, modelos gratuitos frente a créditos; y GirlfriendGPT, conversación con voz e imágenes." },
      ],
    },
    final: { kicker: "Antes de iniciar una historia larga", heading: "Elige con una prueba pequeña y reglas claras", body: "Repite la misma escena, revisa lo que recuerdan el modelo y el plan, y confirma las condiciones actuales en la fuente oficial.", cta: "Abrir SpicyChat" },
  },
  blog: {
    title: "Comparativas de Spicy Chat AI",
    description: "Cinco comparativas en español de Spicy Chat AI frente a Character.AI, Janitor AI, CrushOn AI, PolyBuzz y GirlfriendGPT, con fuentes y criterios distintos.",
    intro: "No son cinco versiones de una misma lista. Cada artículo ayuda a tomar una decisión: reglas del contenido, complejidad de la configuración, límites del modelo gratuito, búsqueda de personajes o gasto en voz e imágenes. Las afirmaciones cambiantes remiten a las páginas oficiales; no presentamos pruebas que no hemos realizado.",
    kicker: "Comparar antes de pagar", listHeading: "Cinco preguntas, cinco artículos",
  },
  info: {
    about: {
      title: "Sobre Spicy Chat AI", description: "Conoce el alcance de Spicy Chat AI, su independencia respecto a SpicyChat y el método usado para comparar chats de personajes con IA.",
      kicker: "Sobre esta publicación", intro: "Ayudamos a evaluar servicios de personajes ficticios para adultos con información verificable y preguntas de prueba, sin hacernos pasar por el producto.",
      sections: [
        { heading: "Qué publicamos", paragraphs: ["Explicamos fichas de personajes, modelos, contexto, memoria, reglas de contenido, planes y alternativas. Este sitio estático no ofrece chats, generación de imágenes, cuentas, cobros ni asistencia del servicio SpicyChat."] },
        { heading: "Independencia", paragraphs: ["No afirmamos estar autorizados o recomendados por SpicyChat ni por sus competidores. Los enlaces a proveedores llevan a páginas externas donde se aplican sus propias condiciones. Comprueba allí los detalles antes de registrarte."] },
        { heading: "Cómo comparamos", paragraphs: ["Cada VS responde a una necesidad distinta. Diferenciamos lo que confirma una fuente primaria de nuestra interpretación editorial; las propuestas de prueba se presentan como instrucciones para lectores, no como resultados propios. Evitamos precios fijos y límites que puedan caducar."] },
      ],
    },
    contact: {
      title: "Contacto", description: "Indica una corrección, una fuente o una cuestión de derechos relacionada con Spicy Chat AI y consulta el estado actual del correo de contacto.",
      kicker: "Correcciones y derechos", intro: "Para revisar una posible errata necesitamos la URL, la frase concreta y, si existe, una fuente primaria que permita verificarla.",
      sections: [
        { heading: "Correo previsto", paragraphs: ["El contacto previsto es support@spicychatai.fun, pero todavía no está configurado para recibir mensajes. Un correo enviado ahora podría no llegar. Actualizaremos esta página cuando el buzón funcione; no fingimos haber recibido solicitudes."] },
        { heading: "No envíes información sensible", paragraphs: ["No necesitamos contraseñas, códigos, transcripciones privadas, documentos de identidad, direcciones ni imágenes íntimas para corregir un artículo. Reduce al mínimo los datos de terceros cuando informes sobre derechos."] },
      ],
    },
    "editorial-policy": {
      title: "Criterios editoriales", description: "Cómo comprueba Spicy Chat AI las fuentes, separa hechos de opiniones, escribe comparativas originales y corrige cambios de producto.",
      kicker: "Cómo trabajamos", intro: "Nuestro criterio no es repetir una palabra clave hasta ocupar la página: buscamos resolver decisiones reales sobre historias, seguridad, privacidad y coste.",
      sections: [
        { heading: "Fuentes antes que promesas", paragraphs: ["Para planes, funciones y prohibiciones damos prioridad a documentación del proveedor. Una frase publicitaria como «ilimitado» no se convierte automáticamente en acceso ilimitado a todos los modelos. Si no hemos ejecutado un ensayo comparativo, no inventamos puntuaciones ni latencias."] },
        { heading: "Un enfoque distinto por artículo", paragraphs: ["Character.AI se compara por reglas; Janitor AI, por dominio y configuración actual; CrushOn AI, por modelos gratuitos y créditos; PolyBuzz, por descubrimiento y datos; GirlfriendGPT, por experiencia multimedia y vínculos de operación. Un cambio de nombre no basta para hacer una comparativa nueva."] },
        { heading: "Adultos ficticios y derechos", paragraphs: ["No fomentamos contenido con menores, ausencia de consentimiento, sexualización de personas reales o uso indebido de su imagen. La política de avatares de SpicyChat también excluye fotografías reales y representaciones fotorrealistas que puedan confundirse con una persona."] },
        { heading: "Actualizaciones y errores", paragraphs: ["Cuando cambia una fuente corregimos el pasaje afectado y sus metadatos cuando corresponde. Para una revisión necesitamos la URL y evidencia comprobable; el estado aún no operativo del correo figura en Contacto."] },
      ],
    },
    privacy: {
      title: "Privacidad", description: "Google Analytics automático, cookies, filtros de robots y preferencias del navegador.",
      kicker: "Privacidad", intro: "No somos una plataforma de chat. No mantenemos una base de cuentas, personajes, conversaciones, archivos subidos, grabaciones ni pagos de visitantes.",
      sections: [{"heading":"Datos necesarios para servir la página","paragraphs":["El proveedor de alojamiento y seguridad puede procesar información habitual de la solicitud, como dirección IP, navegador, URL, hora e indicadores de seguridad, para entregar y proteger el sitio. Nosotros no recibimos conversaciones, recuerdos o credenciales de SpicyChat."]},{"heading":"Medición automática con Google Analytics","paragraphs":["Google Analytics 4 se inicia automáticamente al abrir una página en un navegador normal. Mide visitas, desplazamientos, clics en enlaces externos, dispositivo y procedencia del tráfico. Las cookies analíticas caducan a los 180 días y pueden renovarse al usarse. Google puede tratar datos fuera de tu país. No activamos Google signals, personalización publicitaria ni almacenamiento publicitario."]},{"heading":"Cookies, privacidad y tráfico automatizado","paragraphs":["GA4 excluye automáticamente los robots conocidos. También omitimos la medición para rastreadores identificables y navegadores que se declaran automatizados; no podemos detectar todos los robots que imitan a personas. Respetamos Global Privacy Control, Do Not Track y la inhabilitación de Google Analytics del navegador. No enviamos parámetros de búsqueda ni fragmentos en la URL configurada; reducimos las referencias al origen. No enviamos conversaciones, prompts, archivos ni contenidos de formularios. Borrar cookies no elimina datos ya tratados por Google."]},{"heading":"Sitios ajenos","paragraphs":["Al abrir un proveedor oficial o una alternativa, sus normas y políticas se aplican a cualquier registro, chat, imagen, voz o compra. Revisa esas condiciones y evita compartir información real que no sea necesaria."]}],
    },
    terms: {
      title: "Condiciones de uso", description: "Condiciones de Spicy Chat AI sobre información editorial, uso responsable por adultos, cambios en terceros y derechos del contenido.",
      kicker: "Condiciones", intro: "Este sitio publica análisis y comparativas; no vende ni gestiona los servicios de chat descritos.",
      sections: [
        { heading: "Alcance de la información", paragraphs: ["Los artículos no constituyen asesoramiento jurídico, médico, financiero, psicológico ni sobre relaciones. Tampoco garantizan que un proveedor sea seguro o apropiado para ti. Verifica sus condiciones actuales antes de decidir."] },
        { heading: "Uso responsable", paragraphs: ["No uses esta publicación para acosar, coaccionar, suplantar identidades, difundir imágenes íntimas sin permiso, crear contenido sexual ilegal o vulnerar derechos de imagen. Las escenas adultas comentadas son ficticias y consentidas."] },
        { heading: "Cambios y obras", paragraphs: ["Personajes, modelos, contexto, memoria, precios y normas pueden cambiar sin aviso. No reproduzcas masivamente nuestros textos, estructura comparativa, diseño o imágenes ni los presentes como creación de otra persona sin autorización."] },
      ],
    },
  },
};
