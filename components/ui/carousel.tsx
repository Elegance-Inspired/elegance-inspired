"use client";

import React, { useState, useCallback, useEffect, ReactNode } from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: ReactNode;
  className?: string;
  options?: EmblaOptionsType;
  showDots?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
}

export function Carousel({
  children,
  className,
  options = {
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps",
  } as const,
  showDots = true,
  autoplay = false,
  autoplayInterval = 4000,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options as any);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setSlideCount(emblaApi.slideNodes().length);
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi || !autoplay) return;

    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [emblaApi, autoplay, autoplayInterval]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>

      {showDots && slideCount > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                selectedIndex === index
                  ? "bg-secondary w-4"
                  : "bg-gray-300 dark:bg-gray-600"
              )}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function CarouselSlide({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-w-0 flex-[0_0_100%]", className)}>{children}</div>
  );
}

export function CarouselSlideResponsive({
  children,
  className,
  slidesPerView = { default: 1, sm: 2, md: 3, lg: 4 },
}: {
  children: ReactNode;
  className?: string;
  slidesPerView?: { default: number; sm?: number; md?: number; lg?: number };
}) {
  const getFlexBasis = () => {
    const { default: defaultView, sm, md, lg } = slidesPerView;

    return cn(
      `flex-[0_0_${100 / defaultView}%]`,
      sm && `sm:flex-[0_0_${100 / sm}%]`,
      md && `md:flex-[0_0_${100 / md}%]`,
      lg && `lg:flex-[0_0_${100 / lg}%]`
    );
  };

  return (
    <div className={cn("min-w-0", getFlexBasis(), className)}>{children}</div>
  );
}
