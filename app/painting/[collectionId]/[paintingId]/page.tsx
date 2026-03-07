import PaintingPageView from '@/components/PaintingPageView';
import { getDefaultProgressData } from '@/lib/data';

interface Props {
  params: Promise<{ collectionId: string; paintingId: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  const data = getDefaultProgressData();
  return data.collections.flatMap((collection) =>
    collection.paintings.map((painting) => ({
      collectionId: collection.id,
      paintingId: painting.id,
    }))
  );
}

export default async function PaintingPage({ params }: Props) {
  const { collectionId, paintingId } = await params;
  return <PaintingPageView collectionId={collectionId} paintingId={paintingId} />;
}
