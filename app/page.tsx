import HomeClient from '../components/HomeClient';
import { getSpiritualPages } from '../lib/content';
import JsonLd from '../components/JsonLd';
import { getHomePageSchemas } from '../lib/seo';

export default function HomePage() {
  const allPages = getSpiritualPages();

  return (
    <>
      <JsonLd data={getHomePageSchemas()} />
      <HomeClient allPages={allPages} />
    </>
  );
}
