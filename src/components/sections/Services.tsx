import { Laptop, Code, Smartphone, Apple, Search, Edit } from "lucide-react";

export default function Services() {
  return (
    <section className="container py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Service</h2>
        <h3 className="text-xl font-semibold text-primary">My Services</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        <div className="text-center p-6 border rounded-lg">
          <Laptop className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h4 className="font-bold mb-2">Web Design</h4>
          <p className="text-muted-foreground">
            Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
            Amet lorem lorem lorem est amet labore eirmod erat clita
          </p>
          <a href="#" className="text-primary">
            Read More
          </a>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <Code className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h4 className="font-bold mb-2">Web Development</h4>
          <p className="text-muted-foreground">
            Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
            Amet lorem lorem lorem est amet labore eirmod erat clita
          </p>
          <a href="#" className="text-primary">
            Read More
          </a>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <Smartphone className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h4 className="font-bold mb-2">Apps Design</h4>
          <p className="text-muted-foreground">
            Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
            Amet lorem lorem lorem est amet labore eirmod erat clita
          </p>
          <a href="#" className="text-primary">
            Read More
          </a>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <Apple className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h4 className="font-bold mb-2">Apps Development</h4>
          <p className="text-muted-foreground">
            Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
            Amet lorem lorem lorem est amet labore eirmod erat clita
          </p>
          <a href="#" className="text-primary">
            Read More
          </a>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <Search className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h4 className="font-bold mb-2">SEO</h4>
          <p className="text-muted-foreground">
            Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
            Amet lorem lorem lorem est amet labore eirmod erat clita
          </p>
          <a href="#" className="text-primary">
            Read More
          </a>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <Edit className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h4 className="font-bold mb-2">Content Creating</h4>
          <p className="text-muted-foreground">
            Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
            Amet lorem lorem lorem est amet labore eirmod erat clita
          </p>
          <a href="#" className="text-primary">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
