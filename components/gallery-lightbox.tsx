"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

type GalleryItem = {
  src: string;
  title: string;
  alt: string;
};

export function GalleryLightbox({ items }: { items: readonly GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const currentIndex = activeIndex ?? 0;
  const current = items[currentIndex];

  const showPrevious = () => {
    setActiveIndex((currentIndex - 1 + items.length) % items.length);
  };

  const showNext = () => {
    setActiveIndex((currentIndex + 1) % items.length);
  };

  return (
    <Dialog.Root
      open={activeIndex !== null}
      onOpenChange={(open) => !open && setActiveIndex(null)}
    >
      <div className="gallery-grid" aria-label="CFIW wellness photographs">
        {items.map((item, index) => (
          <Dialog.Trigger asChild key={item.src}>
            <button
              className="gallery-thumbnail"
              type="button"
              aria-label={`Open photograph ${index + 1} of ${items.length}`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
              <span className="gallery-thumbnail-hint" aria-hidden="true">
                View full image
              </span>
            </button>
          </Dialog.Trigger>
        ))}
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="gallery-lightbox-overlay" />
        <Dialog.Content
          className="gallery-lightbox"
          aria-describedby={undefined}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") showPrevious();
            if (event.key === "ArrowRight") showNext();
          }}
        >
          <Dialog.Title className="sr-only">{current.title}</Dialog.Title>
          <div className="gallery-lightbox-image">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              priority
              sizes="94vw"
            />
          </div>
          <p className="gallery-lightbox-count" aria-live="polite">
            {currentIndex + 1} / {items.length}
          </p>
          <button
            className="gallery-lightbox-control gallery-lightbox-previous"
            type="button"
            aria-label="View previous photograph"
            onClick={showPrevious}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            className="gallery-lightbox-control gallery-lightbox-next"
            type="button"
            aria-label="View next photograph"
            onClick={showNext}
          >
            <ChevronRight aria-hidden="true" />
          </button>
          <Dialog.Close asChild>
            <button
              className="gallery-lightbox-control gallery-lightbox-close"
              type="button"
              aria-label="Close full photograph"
            >
              <X aria-hidden="true" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
