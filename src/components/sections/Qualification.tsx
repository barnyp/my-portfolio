import React from 'react';

const QualificationItem = ({ title, institution, years, description }: { title: string, institution: string, years: string, description: string }) => (
  <div className="relative mb-6 pl-6"> {/* Increased mb and pl for better spacing, adjusted for icon */}
    {/* Font Awesome icon placeholder - will not render yet */}
    <i className="far fa-dot-circle text-blue-600 absolute left-[-2px] top-1 text-lg"></i> {/* Adjusted icon position and size */}
    <h5 className="font-semibold text-lg mb-1">{title}</h5> {/* Tailwind: font-semibold, text-lg */}
    <p className="mb-2"><strong className="font-medium">{institution}</strong> | <small className="text-sm text-gray-600">{years}</small></p> {/* Tailwind: font-medium, text-sm, text-gray-600 */}
    <p className="text-gray-700 text-sm">{description}</p> {/* Tailwind: text-gray-700, text-sm */}
  </div>
);

export default function Qualification() {
  return (
    <section className="container py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Qualification</h2>
        <h3 className="text-xl font-semibold text-primary">
          Education & Expericence
        </h3>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-10">
        <div>
          <h4 className="text-2xl font-bold mb-4">My Education</h4>
          <div className="border-l-2 border-primary pl-4">
            <div className="mb-8">
              <h5 className="font-bold">Bachelor of Engineering (B.Eng.), Electrical Engineering</h5>
              <p className="text-muted-foreground">
                <strong>University of Ilorin, Nigeria</strong> | <small>2006 - 2011</small>
              </p>
              <p className="text-muted-foreground">
                Activities and societies: Member, Institute of Electrical and Electronics Engineers (IEEE); Member, National Society of Black Engineers (NSBE); Graduate Member, National Society of Engineers (NSE)
              </p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-4">My Expericence</h4>
          <div className="border-l-2 border-primary pl-4">
            <div className="mb-8">
              <h5 className="font-bold">Head, Data Management & Business Intelligence ► SAP Master Data Management | Analytics</h5>
              <p className="text-muted-foreground">
                <strong>Seven Up Bottling Company</strong> | <small>Dec 2021 - Present · 3 yrs 7 mos | Lagos State, Nigeria · Hybrid</small>
              </p>
              <p className="text-muted-foreground">
                Leading the Business Intelligence team to develop and implement data strategies that drive organizational performance. Delivered a high-quality data strategy supporting strategic decisions, resulting in increased revenue and reduced operational costs. Fostered trust among BI Developers, Data Analysts, ETL Developers, Database Administrators, Data Scientists, and business users, reducing project delivery time by 20%. Identified and implemented new data sources, providing insights into customer behavior and P&L, leading to a 30% increase in sales revenue.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="font-bold">Business Intelligence Manager ► SAP Analytics | BI Team Leadership | Big Data</h5>
              <p className="text-muted-foreground">
                <strong>Seven Up Bottling Company</strong> | <small>Apr 2020 - Nov 2021 · 1 yr 8 mos | Lagos State, Nigeria · On-site</small>
              </p>
              <p className="text-muted-foreground">
                Led the BI team in Data Visualization, Data Modeling, and Business Intelligence. Automated KPI delivery, increasing sales revenue by 20%. Implemented SQL Server Analysis Services for real-time business metrics, resulting in an 80% increase in insight-driven decision-making. Created dynamic visualizations with Power BI, Excel, and SAP Analytics Cloud, increasing data accessibility by 15% and reducing data processing time by 10%.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="font-bold">Business Intelligence Developer ► Data Visualization & Modeling | Business Analysis & Planning</h5>
              <p className="text-muted-foreground">
                <strong>Seven Up Bottling Company</strong> | <small>Nov 2018 - Mar 2020 · 1 yr 5 mos | Lagos · Hybrid</small>
              </p>
              <p className="text-muted-foreground">
                Authored the Power BI Adoption Framework documentation. Pioneered Power BI development, building standard reports and dashboards. Utilized T-SQL, M, and DAX for high-quality data models. Increased user adoption by 50% through new report templates. Supervised Power BI Embedded deployment for 400+ users, saving $25,000 in project costs.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="font-bold">Manager / Business Intelligence Analyst ► Power BI Reporting | Data Migration | Change Management</h5>
              <p className="text-muted-foreground">
                <strong>Bancor Outsourcing</strong> | <small>Jan 2018 - Nov 2018 · 11 mos | Lagos, Nigeria · On-site</small>
              </p>
              <p className="text-muted-foreground">
                Deployed and managed Power BI as tenant Administrator. Built reports and dashboards for business growth, driving a 5% increase. Trained staff on collaboration tools, boosting productivity by 50%. Improved data accuracy by 15% and stakeholder trust through meaningful analysis.
              </p>
            </div>
            <div className="mb-8">
              <h5 className="font-bold">IT Technical Support ► Infrastructure | Front-end Development | Data Analysis</h5>
              <p className="text-muted-foreground">
                <strong>Enterprise Transport and Logistics Limited (Entralog Group)</strong> | <small>Sep 2014 - May 2018 · 3 yrs 9 mos | Lagos · On-site</small>
              </p>
              <p className="text-muted-foreground">
                Deployed NAS solutions for backups and disaster recovery. Installed, supported, and maintained systems, servers, and network infrastructure. Monitored network to prevent breaches and supported business growth through technology strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
