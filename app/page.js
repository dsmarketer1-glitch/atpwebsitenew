import HomePageClient from '@/components/HomePageClient';
import { sanityFetch } from '@/sanity/lib/fetch';
import { homePageQuery } from '@/sanity/lib/queries';

export default async function HomePage() {
  const data = await sanityFetch({ query: homePageQuery });
  
  return <HomePageClient initialData={data} />;
}
