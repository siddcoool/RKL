"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Magazine } from '@/types';

export default function LatestEditions() {
  const [magazines, setMagazines] = useState<Magazine[]>([]);

  useEffect(() => {
    const fetchMagazines = async () => {
      const response = await fetch('/api/magazines?limit=3');
      const data = await response.json();
      setMagazines(data);
    };

    fetchMagazines();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {magazines.map((magazine) => (
        <Card key={magazine._id}>
          <CardHeader>
            <CardTitle>{magazine.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={magazine.coverImage}
              alt={magazine.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="mt-4">{magazine.description}</p>
          </CardContent>
          <CardFooter>
            <Link href={`/magazines/${magazine._id}`} className="w-full">
              <Button className="w-full">Read Now</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}