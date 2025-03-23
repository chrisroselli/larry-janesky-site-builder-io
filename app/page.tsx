import ThinkDaily from "./components/ThinkDaily";
import VideoGallery from "./components/VideoGallery";
import Hero from "@/app/components/Hero";
import Teacher from "@/app/components/Teacher";
import Speaker from "@/app/components/Speaker";
import Leader from "@/app/components/Leader";
import Author from "@/app/components/Author";
import AboutLarry from "@/app/components/AboutLarry";

export default function Home() {
  return (
    <>
      <Hero />
      <Teacher />
      <ThinkDaily />
      <Leader />
      <Speaker />
      <Author />
      <VideoGallery />
      <AboutLarry />
    </>
  );
}
