import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonial() {
  return (
    <section className="container py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Testimonial</h2>
        <h3 className="text-xl font-semibold text-primary">Our Clients Say</h3>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto mt-10"
      >
        <CarouselContent>
          <CarouselItem>
            <div className="text-center p-10 bg-muted rounded-lg">
              <Image
                src="/img/testimonial-1.jpg"
                alt="Client 1"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <h4 className="font-bold mt-4">Client Name</h4>
              <p className="text-sm text-muted-foreground">Profession</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="text-center p-10 bg-muted rounded-lg">
              <Image
                src="/img/testimonial-1.jpg"
                alt="Client 2"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <p>
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat."
              </p>
              <h4 className="font-bold mt-4">Client Name</h4>
              <p className="text-sm text-muted-foreground">Profession</p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
} 