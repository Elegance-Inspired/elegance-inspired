"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Twitter, X } from "lucide-react";
import Link from "next/link";
import { team } from "@/data";
import { Button } from "@/components/ui/button";

export default function CreativeTeam() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Find the selected member data
  const selectedMemberData = selectedMember
    ? team.find((member) => member.id === selectedMember)
    : null;

  const handleCardClick = (memberId: string) => {
    setSelectedMember(memberId);
    // Scroll to the detailed view
    setTimeout(() => {
      const detailElement = document.getElementById("member-detail");
      if (detailElement) {
        detailElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const renderTeamCard = (member: (typeof team)[0], index: number) => (
    <div onClick={() => handleCardClick(member.id)} className="cursor-pointer">
      <Card className="overflow-hidden bg-card border-border/50 h-full hover:shadow-lg transition-all duration-300">
        <div className="relative overflow-hidden group">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            width={400}
            height={400}
            className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
            <div className="flex space-x-3">
              <a
                href={member.social.instagram}
                className="bg-white/20 p-2 rounded-full hover:bg-[#FF6600] transition-colors"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a
                href={member.social.facebook}
                className="bg-white/20 p-2 rounded-full hover:bg-[#FF6600] transition-colors"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a
                href={member.social.twitter}
                className="bg-white/20 p-2 rounded-full hover:bg-[#FF6600] transition-colors"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-4 w-4 text-white" />
              </a>
              <a
                href={member.social.linkedin}
                className="bg-white/20 p-2 rounded-full hover:bg-[#FF6600] transition-colors"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-muted-foreground mb-3">{member.position}</p>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {member.shortBio}
          </p>
          <div className="mt-3 text-primary hover:text-primary/80 text-sm font-medium">
            Read more →
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <section
      id="creative-team"
      className="py-16 md:py-24 bg-background scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Creative Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Our team is dedicated to helping businesses enhance their brand
            identity, reach their target audience, and achieve remarkable
            success in the marketplace.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              {renderTeamCard(member, index)}
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Member View */}
        {selectedMemberData && (
          <div
            id="member-detail"
            className="mt-20 pt-10 border-t border-border/50 scroll-mt-32 animate-fadeIn"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="relative">
                <Image
                  src={selectedMemberData.image || "/placeholder.svg"}
                  alt={selectedMemberData.name}
                  width={600}
                  height={600}
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">
                    Connect With {selectedMemberData.name.split(" ")[0]}
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href={selectedMemberData.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href={selectedMemberData.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href={selectedMemberData.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      {selectedMemberData.social.twitter.includes("x.com") ? (
                        <X className="h-5 w-5 text-primary" />
                      ) : (
                        <Twitter className="h-5 w-5 text-primary" />
                      )}
                    </a>
                    <a
                      href={selectedMemberData.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {selectedMemberData.name}
                </h2>
                <p className="text-xl text-primary font-medium mb-6">
                  {selectedMemberData.position}
                </p>

                <div className="space-y-6">
                  {selectedMemberData.bio.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8">
                  <Button
                    onClick={() => setSelectedMember(null)}
                    variant="outline"
                    className="rounded-full"
                  >
                    Back to Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
