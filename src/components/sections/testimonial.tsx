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
                alt="Amina Adewale"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <p>
                "Working with Paul was a game-changer for our business. His data analytics expertise helped us uncover new market opportunities and optimize our operations."
              </p>
              <h4 className="font-bold mt-4">Amina Adewale</h4>
              <p className="text-sm text-muted-foreground">Business Analyst, Nigeria</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="text-center p-10 bg-muted rounded-lg">
              <Image
                src="/img/testimonial-2.jpg"
                alt="Sophie Müller"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <p>
                "Paul's BI dashboards brought clarity to our complex data. His professionalism and attention to detail made the project seamless from start to finish."
              </p>
              <h4 className="font-bold mt-4">Sophie Müller</h4>
              <p className="text-sm text-muted-foreground">Head of Analytics, Germany</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="text-center p-10 bg-muted rounded-lg">
              <Image
                src="/img/testimonial-3.jpg"
                alt="James Smith"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <p>
                "The generative AI solutions Paul implemented have transformed our customer experience. His insights and support were invaluable."
              </p>
              <h4 className="font-bold mt-4">James Smith</h4>
              <p className="text-sm text-muted-foreground">CTO, United States</p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
} 