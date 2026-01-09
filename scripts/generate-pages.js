const fs = require('fs');
const path = require('path');

const keywords = `oraciones de la noche | oraciones-de-la-noche
oracion para dormir en paz | oracion-para-dormir-en-paz
oracion antes de dormir | oracion-antes-de-dormir
oracion para terminar el dia con gratitud | oracion-para-terminar-el-dia-con-gratitud
oracion de la noche corta | oracion-de-la-noche-corta
oracion para descansar en dios | oracion-para-descansar-en-dios
oracion para entregar el dia a dios | oracion-para-entregar-el-dia-a-dios
oracion para pedir perdon antes de dormir | oracion-para-pedir-perdon-antes-de-dormir
examen de conciencia de la noche | examen-de-conciencia-de-la-noche
oracion para proteger mi hogar en la noche | oracion-para-proteger-mi-hogar-en-la-noche
oracion por mi familia antes de dormir | oracion-por-mi-familia-antes-de-dormir
oracion para dormir sin miedo | oracion-para-dormir-sin-miedo
oracion para la noche cuando estoy preocupado | oracion-para-la-noche-cuando-estoy-preocupado
oracion para dormir cuando no puedo conciliar el sueno | oracion-para-dormir-cuando-no-puedo-conciliar-el-sueno
oracion para confiar en dios al final del dia | oracion-para-confiar-en-dios-al-final-del-dia
oracion para dar gracias por las bendiciones | oracion-para-dar-gracias-por-las-bendiciones
oracion para pedir paz interior en la noche | oracion-para-pedir-paz-interior-en-la-noche
oracion para descansar despues de un dia dificil | oracion-para-descansar-despues-de-un-dia-dificil
oracion para soltar pensamientos antes de dormir | oracion-para-soltar-pensamientos-antes-de-dormir
oracion para dormir con fe | oracion-para-dormir-con-fe
oracion para ofrecer el cansancio a dios | oracion-para-ofrecer-el-cansancio-a-dios
oracion para empezar manana con esperanza | oracion-para-empezar-manana-con-esperanza
oracion por proteccion en la madrugada | oracion-por-proteccion-en-la-madrugada
oracion para calmar la mente en la noche | oracion-para-calmar-la-mente-en-la-noche
oracion para descansar sin angustia | oracion-para-descansar-sin-angustia`;

const pages = keywords.trim().split('\n').slice(0, 25);

const contentDir = path.join(__dirname, '..', 'content', 'pages');

pages.forEach((line, index) => {
  const [keyword, slug] = line.split(' | ').map(s => s.trim());

  const titleMap = {
    'oraciones-de-la-noche': 'Oraciones de la noche para cerrar el día en paz',
    'oracion-para-dormir-en-paz': 'Oración para dormir en paz y descansar en Dios',
    'oracion-antes-de-dormir': 'Oración antes de dormir para entregar el día a Dios',
    'oracion-para-terminar-el-dia-con-gratitud': 'Oración para terminar el día con gratitud',
    'oracion-de-la-noche-corta': 'Oración de la noche corta y poderosa',
    'oracion-para-descansar-en-dios': 'Oración para descansar en Dios con confianza',
    'oracion-para-entregar-el-dia-a-dios': 'Oración para entregar el día a Dios',
    'oracion-para-pedir-perdon-antes-de-dormir': 'Oración para pedir perdón antes de dormir',
    'examen-de-conciencia-de-la-noche': 'Examen de conciencia de la noche para cerrar el día',
    'oracion-para-proteger-mi-hogar-en-la-noche': 'Oración para proteger mi hogar en la noche',
    'oracion-por-mi-familia-antes-de-dormir': 'Oración por mi familia antes de dormir',
    'oracion-para-dormir-sin-miedo': 'Oración para dormir sin miedo y con confianza',
    'oracion-para-la-noche-cuando-estoy-preocupado': 'Oración para la noche cuando estoy preocupado',
    'oracion-para-dormir-cuando-no-puedo-conciliar-el-sueno': 'Oración para dormir cuando no puedo conciliar el sueño',
    'oracion-para-confiar-en-dios-al-final-del-dia': 'Oración para confiar en Dios al final del día',
    'oracion-para-dar-gracias-por-las-bendiciones': 'Oración para dar gracias por las bendiciones recibidas',
    'oracion-para-pedir-paz-interior-en-la-noche': 'Oración para pedir paz interior en la noche',
    'oracion-para-descansar-despues-de-un-dia-dificil': 'Oración para descansar después de un día difícil',
    'oracion-para-soltar-pensamientos-antes-de-dormir': 'Oración para soltar pensamientos antes de dormir',
    'oracion-para-dormir-con-fe': 'Oración para dormir con fe y esperanza',
    'oracion-para-ofrecer-el-cansancio-a-dios': 'Oración para ofrecer el cansancio a Dios',
    'oracion-para-empezar-manana-con-esperanza': 'Oración para empezar mañana con esperanza',
    'oracion-por-proteccion-en-la-madrugada': 'Oración por protección en la madrugada',
    'oracion-para-calmar-la-mente-en-la-noche': 'Oración para calmar la mente en la noche',
    'oracion-para-descansar-sin-angustia': 'Oración para descansar sin angustia esta noche'
  };

  const title = titleMap[slug] || keyword.charAt(0).toUpperCase() + keyword.slice(1);
  const metaTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;

  const content = `---
slug: "${slug}"
title: "${title}"
metaTitle: "${metaTitle}"
metaDescription: "Oración católica de la noche. ${title}. Encuentra paz, consuelo y esperanza al cerrar tu día con Dios."
keywords:
  - "${keyword}"
  - "${keyword.replace('oracion', 'rezar')}"
  - "oración nocturna"
  - "cerrar el día con dios"
publishedAt: "2026-01-08"
updatedAt: "2026-01-08"
category: "noche"
---

Al final del día, encontramos en la oración el espacio perfecto para presentarnos ante Dios con sinceridad. Esta oración te ayudará a cerrar tu jornada en paz, entregando tus cargas y recibiendo el consuelo que solo el Señor puede dar.

## Oración

Señor Jesús, al finalizar este día me presento ante ti con humildad y gratitud.

Gracias por el don de la vida, por las personas que me acompañaron, por tu presencia fiel en cada momento vivido. Gracias por las alegrías y también por las pruebas que me ayudan a crecer.

Te pido perdón por mis fallas de hoy: las palabras que no edifiqué, las obras de amor que dejé sin hacer, las veces que antepuse mi voluntad a la tuya. Acojo tu perdón con un corazón arrepentido.

Entrego en tus manos todo lo vivido: los momentos de alegría y los de dificultad, las decisiones tomadas y las pendientes. Confío en tu providencia amorosa.

${getSpecificPrayer(slug)}

Señor, concédeme un descanso reparador. Renueva mis fuerzas mientras duermo. Que mañana despierte con esperanza para seguir tu camino con fidelidad y amor.

En tus manos encomiendo mi espíritu. Amén.

## Reflexión

La tradición cristiana nos enseña que la noche es un tiempo privilegiado para el encuentro con Dios. Lejos del ruido del día, podemos abrir nuestro corazón con mayor sinceridad y escuchar la voz del Señor en el silencio.

Cerrar el día con oración no es simplemente un ritual, sino un acto de fe viva. Reconocemos que Dios ha estado presente en cada momento de nuestra jornada, incluso cuando no fuimos conscientes de ello. Esta toma de conciencia nos llena de gratitud y paz.

La oración nocturna nos ayuda también a soltar el peso del día. Muchas veces nos acostamos cargando preocupaciones, resentimientos o frustraciones. Al entregarlas a Dios en la oración, experimentamos una liberación interior que nos permite descansar verdaderamente.

El Salmo 4 nos recuerda: "En paz me acuesto y me duermo, porque solo tú, Señor, me haces vivir confiado". Esta confianza no surge de nuestras propias fuerzas, sino del encuentro orante con quien sostiene nuestra vida en todo momento.

Cultivar el hábito de la oración nocturna transforma gradualmente nuestra manera de vivir. Cuando sabemos que al final del día tendremos ese encuentro con el Señor, vivimos con mayor consciencia y gratitud cada momento.

## Pequeña acción

Antes de apagar la luz, toma unos minutos para repasar mentalmente tu día. Identifica tres momentos concretos por los que puedes dar gracias a Dios. Luego, entrega en sus manos todo lo que te preocupa y duerme en paz.

## Preguntas frecuentes

**¿Es necesario rezar todas las noches?**
No es una obligación, pero es una práctica profundamente recomendada. La oración nocturna nos ayuda a mantener viva nuestra relación con Dios y a descansar en su presencia. Es un regalo que nos hacemos a nosotros mismos.

**¿Qué hago si estoy muy cansado para rezar?**
La oración no requiere esfuerzo intelectual. Una simple frase como "Señor, en tus manos me entrego" es suficiente. Dios comprende perfectamente nuestro cansancio y valora cualquier movimiento sincero del corazón hacia Él.

**¿Puedo rezar por personas que no tienen fe?**
Por supuesto. Encomendar a nuestros seres queridos en la oración nocturna es un acto de amor y fe. Dios escucha nuestras intercesiones y obra en la vida de cada persona de maneras que superan nuestra comprensión.

**¿Qué hago si no siento nada al rezar?**
La oración no depende de sentimientos. Orar es un acto de la voluntad y de la fe, no de las emociones. Aunque no sientas nada especial, tu oración es escuchada y valorada por Dios, quien ve lo profundo de tu corazón.

**¿Es mejor rezar en voz alta o en silencio?**
Ambas formas son igualmente válidas. Si compartes habitación, el silencio es más apropiado. Lo importante es la sinceridad del corazón, no el volumen de la voz. Dios escucha los susurros más íntimos del alma.

**¿Puedo incluir mis preocupaciones cotidianas en esta oración?**
Absolutamente. Dios se interesa por todas las dimensiones de nuestra vida. Presentarle nuestras preocupaciones concretas sobre trabajo, salud, familia o economía es un acto de confianza que nos libera del peso de llevar todo solos.

---

*Descubre más oraciones y reflexiones para cerrar tu día en paz en [Jesús Contigo](https://www.jesuscontigo.org/), tu compañero espiritual cada noche.*
`;

  const filePath = path.join(contentDir, `${slug}.mdx`);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${slug}.mdx`);
});

function getSpecificPrayer(slug) {
  const specificPrayers = {
    'oracion-para-dormir-en-paz': 'Calma mi mente inquieta y aquieta mis pensamientos. Llena mi corazón con tu paz, esa paz que sobrepasa todo entendimiento. Que pueda descansar confiado en tu amor.',
    'oracion-para-terminar-el-dia-con-gratitud': 'Gracias, Señor, por cada bendición recibida hoy. Por el trabajo, por el alimento, por las pequeñas alegrías. Que la gratitud sea el último sentimiento de mi día.',
    'oracion-de-la-noche-corta': 'Señor, recibe mi día. Perdóname, protégeme, renuévame. En ti confío.',
    'oracion-para-descansar-en-dios': 'Señor, descanso en ti como un niño en brazos de su padre. No necesito comprender todo. Basta saber que tú cuidas de mí.',
    'oracion-para-entregar-el-dia-a-dios': 'Tomo todo lo vivido hoy y lo coloco en tus manos como una ofrenda: mis éxitos y fracasos, mis alegrías y tristezas. Tú sabes darle sentido a cada experiencia.',
    'oracion-para-pedir-perdon-antes-de-dormir': 'Señor misericordioso, reconozco mis faltas de hoy. Las pongo ante ti con humildad. Confío en tu perdón infinito y me duermo perdonado y en paz.',
    'examen-de-conciencia-de-la-noche': 'Señor, ayúdame a revisar mi día con honestidad. Muéstrame dónde estuve lejos de tu amor y dónde fui instrumento de tu gracia. Que este examen me ayude a crecer.',
    'oracion-para-proteger-mi-hogar-en-la-noche': 'Señor, cubre con tu manto protector este hogar mientras dormimos. Que tu presencia sea nuestra fortaleza. Guarda a cada miembro de mi familia.',
    'oracion-por-mi-familia-antes-de-dormir': 'Señor, te encomiendo a cada miembro de mi familia. Bendice su descanso, protege sus sueños, renueva sus fuerzas. Que tu amor nos mantenga unidos siempre.',
    'oracion-para-dormir-sin-miedo': 'Señor, aleja de mí todo temor. Tú eres más grande que mis miedos. Confío en tu protección. Duermo tranquilo sabiendo que tú velas por mí.',
    'oracion-para-la-noche-cuando-estoy-preocupado': 'Señor, conozco mis preocupaciones. Las pongo en tus manos porque sé que tú puedes cargar con ellas mejor que yo. Dame paz para descansar.',
    'oracion-para-dormir-cuando-no-puedo-conciliar-el-sueno': 'Señor, aunque el sueño no llegue, tu presencia me acompaña. Transforma esta vigilia en tiempo contigo. Aquieta mi mente y mi cuerpo cuando sea tu voluntad.',
    'oracion-para-confiar-en-dios-al-final-del-dia': 'Señor, al final de este día renuevo mi confianza en ti. No sé qué traerá el mañana, pero sé que tú estarás conmigo. En eso descanso.',
    'oracion-para-dar-gracias-por-las-bendiciones': 'Gracias, Señor, por las bendiciones visibles e invisibles de hoy. Por las que reconocí y por las que no vi. Tu bondad es infinita.',
    'oracion-para-pedir-paz-interior-en-la-noche': 'Señor, mi corazón está inquieto. Solo en ti encuentra descanso. Dame tu paz, esa que el mundo no puede dar ni quitar. Llénname de tu serenidad.',
    'oracion-para-descansar-despues-de-un-dia-dificil': 'Señor, hoy fue difícil. Estoy cansado, herido, desanimado. Acógeme en tus brazos esta noche. Sana mis heridas mientras duermo. Renuévame.',
    'oracion-para-soltar-pensamientos-antes-de-dormir': 'Señor, mi mente da vueltas sin cesar. Ayúdame a soltar cada pensamiento obsesivo. Llena mi mente con tu paz. Descansa mi cerebro agotado.',
    'oracion-para-dormir-con-fe': 'Señor, me acuesto con fe esta noche. Fe en tu bondad, en tu plan, en tu amor incondicional. Aunque no entienda todo, creo en ti.',
    'oracion-para-ofrecer-el-cansancio-a-dios': 'Señor, te ofrezco mi cansancio físico y emocional de hoy. Que este agotamiento sea mi ofrenda. Tómalo y conviértelo en bendición para otros.',
    'oracion-para-empezar-manana-con-esperanza': 'Señor, al dormir hoy, preparo mi corazón para mañana. Dame esperanza renovada. Que despierte con ganas de vivir y servir un día más.',
    'oracion-por-proteccion-en-la-madrugada': 'Señor, en las horas oscuras de la madrugada, sé mi guardián. Protege mi sueño, ahuyenta las pesadillas, guarda mi hogar. Tú no duermes ni reposas.',
    'oracion-para-calmar-la-mente-en-la-noche': 'Señor, mi mente está agitada con mil pensamientos. Calma este remolino interior. Entra en mi cabeza y trae tu silencio sanador. Dame quietud mental.',
    'oracion-para-descansar-sin-angustia': 'Señor, la angustia oprime mi pecho. No puedo descansar con este peso. Tómalo tú. Lleva mi carga. Déjame descansar liviano en tu amor.',
    'oraciones-de-la-noche': 'Te encomiendo a todas las personas que amo. Bendice su descanso. Protege a los que sufren esta noche. Consuela a los que lloran. Que tu paz reine en los corazones.'
  };

  return specificPrayers[slug] || 'Bendice mi descanso y protégeme durante la noche. Que mañana despierte renovado para servirte mejor.';
}

console.log('\\nAll 25 pages generated successfully!');
