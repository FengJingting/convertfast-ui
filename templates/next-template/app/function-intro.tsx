import React from "react";
import { Button } from "@/components/ui/button";

export const LectureSlideComponent = () => {
  return (
    <section className="max-w-7xl mx-auto flex justify-center items-center ">
      <div className="w-full mx-auto my-16 p-24 flex justify-center items-center bg-stone-100 dark:bg-stone-900 rounded-3xl ">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Turn Lecture Slides into Study-Ready Notes
          </h2>

          <p className="text-muted-foreground mb-6">
            Capture classroom content instantly and transform it into structured text.
          </p>

          <Button size="lg" className="w-full my-3 sm:w-auto" asChild>
            <a href="#start">
            Get started free
            </a>
          </Button>
        </div>
      </div>
      
    </section>
  );
};