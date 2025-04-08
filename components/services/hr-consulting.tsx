"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ClipboardList, GraduationCap, LineChart } from "lucide-react";
import { useEffect, useState } from "react";
import { Carousel, CarouselSlideResponsive } from "@/components/ui/carousel";

const hrServices = [
  {
    title: "Talent Acquisition",
    description:
      "We find the right fit through strategic workforce planning, sourcing & recruitment, candidate screening & assessment, onboarding & integration.",
    icon: <Users className="h-10 w-10 text-primary" />,
  },
  {
    title: "Human Resource Management",
    description:
      "We streamline HR Processes through HR Policy Development & Implementation, Payroll & Performance Management and Employee Relations.",
    icon: <ClipboardList className="h-10 w-10 text-primary" />,
  },
  {
    title: "Training & Development",
    description:
      "We develop customized training programs through skills enhancement training, leadership development.",
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
  },
  {
    title: "HR Consulting",
    description:
      "We partner with organisations to develop long-term HR strategies that align with their business objectives through HR audits, change management and strategic HR planning.",
    icon: <LineChart className="h-10 w-10 text-primary" />,
  },
];

export default function HrConsulting() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const renderServiceCard = (
    service: (typeof hrServices)[0],
    index: number
  ) => (
    <Card className="h-full border-border/50 hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <div className="mb-4">{service.icon}</div>
        <CardTitle>{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  );

  return (
    <section id="consulting" className="py-16 md:py-24 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              HR Consulting
            </h2>
            <div className="space-y-4">
              <p>
                We offer these range of customizable HR solutions to support
                businesses at every stage, from startups to established
                enterprises.
              </p>
              <p>
                Our comprehensive consulting services goes to a holistic
                approach that addresses the core of organizations: their people.
                We understand that people are every organization's greatest
                asset, and our comprehensive HR services are designed to
                attract, develop, and retain top talent, enabling them grow
                their businesses.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="HR Consulting"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>

        <div className="mt-16">
          {isMobile ? (
            <Carousel className="mb-8">
              {hrServices.map((service, index) => (
                <CarouselSlideResponsive key={index} className="px-2">
                  {renderServiceCard(service, index)}
                </CarouselSlideResponsive>
              ))}
            </Carousel>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hrServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {renderServiceCard(service, index)}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
