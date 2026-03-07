import CollectionPageView from '@/components/CollectionPageView';
import { getDefaultProgressData } from '@/lib/data';

interface Props {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  const data = getDefaultProgressData();
  return data.collections.map((collection) => ({ id: collection.id }));
}

export default async function CollectionPage({ params }: Props) {
  const { id } = await params;
  return <CollectionPageView collectionId={id} />;
}
