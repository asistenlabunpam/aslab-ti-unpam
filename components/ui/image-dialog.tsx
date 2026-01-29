"use client"

import { useState } from "react"
import { XIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "./button"

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out"

interface Props {
  animationStyle?: AnimationStyle
  imageSrc: string
  imageAlt?: string
  className?: string
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
}

export function ImageDialog({
  animationStyle = "from-center",
  imageSrc,
  imageAlt = "Image preview",
  className,
}: Readonly<Props>) {
  const [isOpen, setIsOpen] = useState(false)
  const selectedAnimation = animationVariants[animationStyle]

  return (
    <div className={cn("relative", className)}>
      <Button
        type="button"
        aria-label="Open image"
        className="group size-full relative aspect-video p-0 rounded-md overflow-hidden shadow-lg hover:brightness-90"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
        />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
            tabIndex={0}
            className="fixed inset-0 z-50 flex items-center justify-center bg-static-950/60 backdrop-blur-md"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative mx-4 max-h-[90dvh] w-full max-w-5xl"
            >
              <Button
                variant="secondary"
                size="icon-lg"
                onClick={() => setIsOpen(false)}
                className="absolute -top-20 right-0 z-50 rounded-full backdrop-blur lg:-top-1 lg:-right-20"
              >
                <XIcon className="size-5" />
              </Button>

              <div className="relative overflow-hidden aspect-video rounded-2xl border border-white">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
