import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Image as ImageIcon, Users } from 'lucide-react';
import LatestEditions from '@/components/LatestEditions';
import FeaturedGallery from '@/components/FeaturedGallery';

export default async function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Welcome to Digital Magazine</h1>
          <p className="text-xl mb-8">Discover our latest editions and exclusive content</p>
          <div className="flex gap-4 justify-center">
            <Link href="/subscribe">
              <Button size="lg" variant="default">Start Free Trial</Button>
            </Link>
            <Link href="/magazines">
              <Button size="lg" variant="outline">Browse Magazines</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  Digital Library
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Access our complete collection of magazines anytime, anywhere.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-6 w-6" />
                  Photo Gallery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore our curated collection of stunning photography.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Join our growing community of readers and enthusiasts.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Editions */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Editions</h2>
          <LatestEditions />
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Gallery</h2>
          <FeaturedGallery />
        </div>
      </section>
    </main>
  );
}