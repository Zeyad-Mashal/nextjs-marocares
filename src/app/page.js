import Navbar from "./Navbar/Navbar";
import BootstrapCarousel from "./carsoul/carsoul";
import CardList from "./image card/imageList";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <BootstrapCarousel />
      <CardList />
    </main>
  );
}
