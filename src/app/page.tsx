import Image from "next/image";
import Logo from "@/public/logo.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const fb = "https://www.facebook.com/heartoftheforestdramaticsociety";
  return (
    <div className="bg-background">
      <main className="relative flex min-h-screen flex-col items-center justify-center max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mt-4">Welcome to</h1>
        <Image
          src={Logo}
          alt="Heart of the Forest Dramatic Society logo"
          loading="eager"
          width={300}
          height={300}
          className="rounded-full"
        />
        <p className="text-xl text-foreground mt-2 text-wrap text-center font-semibold mx-4">
          This website for the Heart of the Forest Dramatic Society is coming
          soon! We are a community theatre group based in the heart of the
          forest, and we are dedicated to bringing high-quality theatre
          productions to our local community. Stay tuned for updates on our
          upcoming shows and events!
        </p>

        <Button
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 font-semibold shadow-md shadow-primary/50 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
        >
          <a href={fb} target="_blank" rel="noopener noreferrer">
            Visit Our Facebook Page
          </a>
        </Button>
      </main>
    </div>
  );
}
