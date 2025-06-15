import { BarChart2, LineChart, Sparkles, Database, Users } from "lucide-react";

export default function Services() {
  return (
    <section className="container py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Services</h2>
        <h3 className="text-xl font-semibold text-primary">What I Offer</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        <div className="text-center p-6 border rounded-lg">
          <BarChart2 className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h4 className="font-bold mb-2">Business Intelligence</h4>
          <p className="text-muted-foreground">
            Transform your raw data into actionable insights with interactive dashboards and real-time reporting tailored to your business needs.
          </p>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <LineChart className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h4 className="font-bold mb-2">Data Analytics</h4>
          <p className="text-muted-foreground">
            Unlock trends and patterns in your data to drive strategic decisions and optimize business performance through advanced analytics.
          </p>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <Sparkles className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h4 className="font-bold mb-2">Generative AI</h4>
          <p className="text-muted-foreground">
            Leverage the power of AI to automate processes, generate insights, and create intelligent solutions for your organization.
          </p>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <Database className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h4 className="font-bold mb-2">Data Warehousing</h4>
          <p className="text-muted-foreground">
            Build scalable and secure data warehouses to centralize, store, and manage your business data efficiently.
          </p>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <Users className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h4 className="font-bold mb-2">Data Consulting</h4>
          <p className="text-muted-foreground">
            Get expert advice on data strategy, architecture, and best practices to maximize the value of your data assets.
          </p>
        </div>
      </div>
    </section>
  );
}
