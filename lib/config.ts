// Curated content configuration for homepage sections

export const START_HERE_SLUGS = [
  'oraciones-de-la-noche',
  'oracion-antes-de-dormir',
  'oracion-para-dormir-en-paz',
  'oracion-para-terminar-el-dia-con-gratitud',
  'oracion-para-descansar-en-dios',
  'oracion-para-entregar-el-dia-a-dios',
];

export const FEATURED_SLUGS = [
  'oracion-para-pedir-perdon-antes-de-dormir',
  'examen-de-conciencia-de-la-noche',
  'oracion-para-proteger-mi-hogar-en-la-noche',
  'oracion-por-mi-familia-antes-de-dormir',
  'oracion-para-dormir-sin-miedo',
  'oracion-para-la-noche-cuando-estoy-preocupado',
];

// Primary prayer for main CTA
export const PRIMARY_PRAYER_SLUG = 'oraciones-de-la-noche';

// Quick action categories with icons and slugs
export interface QuickAction {
  id: string;
  label: string;
  icon: 'anxiety' | 'gratitude' | 'protection' | 'family' | 'trust';
  slug: string;
}

export const QUICK_ACTIONS: QuickAction[] = [
  { id: 'paz', label: 'Paz', icon: 'anxiety', slug: 'oracion-para-dormir-en-paz' },
  { id: 'gratitud', label: 'Gratitud', icon: 'gratitude', slug: 'oracion-para-terminar-el-dia-con-gratitud' },
  { id: 'proteccion', label: 'Protección', icon: 'protection', slug: 'oracion-para-proteger-mi-hogar-en-la-noche' },
  { id: 'familia', label: 'Familia', icon: 'family', slug: 'oracion-por-mi-familia-antes-de-dormir' },
  { id: 'confianza', label: 'Confianza', icon: 'trust', slug: 'oracion-para-confiar-en-dios-al-final-del-dia' },
];

// Daily verse for "Santo del día" equivalent
export const DAILY_VERSES = [
  { text: 'En paz me acuesto y me duermo, porque solo tú, Señor, me haces vivir confiado.', reference: 'Salmo 4:8' },
  { text: 'Confía en el Señor de todo corazón y no te apoyes en tu propia inteligencia.', reference: 'Proverbios 3:5' },
  { text: 'Vengan a mí todos los que están cansados y agobiados, y yo les daré descanso.', reference: 'Mateo 11:28' },
  { text: 'No se inquieten por nada; más bien, en toda ocasión, con oración y ruego, presenten sus peticiones a Dios.', reference: 'Filipenses 4:6' },
  { text: 'El Señor es mi pastor, nada me falta; en verdes praderas me hace descansar.', reference: 'Salmo 23:1-2' },
];

export function getDailyVerse() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  return DAILY_VERSES[dayOfYear % DAILY_VERSES.length];
}
