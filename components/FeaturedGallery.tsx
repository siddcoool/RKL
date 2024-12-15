"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gallery } from '@/types';

export default function FeaturedGallery() {
  const [images, setImages] = useState<Gallery[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/api/gallery?limit=6');
      const data = await response.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <Card key={image._id} className="overflow-hidden">
          <CardContent className="p-0">
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-64 object-cover transition-transform hover:scale-105"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}