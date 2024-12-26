import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type CardItemProps = {
  image: string;
  title: string;
  category: string;
  description: string;
  roundedClasses: string;
};

const CardItem: React.FC<CardItemProps> = ({
  image,
  title,
  category,
  description,
  roundedClasses,
}) => {
  return (
    <Card className={`flex flex-col h-full overflow-hidden ${roundedClasses}`}>
      <div className="w-full overflow-hidden">
        <img
          className="w-full h-80 object-cover"
          src={image}
          alt={title}
        />
      </div>
      <CardHeader>
        <CardDescription>{category}</CardDescription>
        <CardTitle>{title}</CardTitle>  
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground max-w-lg">{description}</p>
      </CardContent>
    </Card>
  );
};

export function BentoGrids() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-muted-foreground">
          Deploy faster
        </h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Everything you need to deploy your app
        </p>

        <div className="mt-10 grid gap-4 sm:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
            <div className="col-span-1 lg:col-span-2">
              <CardItem
                image="https://tailwindui.com/plus/img/component-images/bento-02-releases.png"
                category="Releases"
                title="Mobile friendly"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus egestas sem pellentesque."
                roundedClasses="lg:rounded-l-3xl rounded-t-3xl"
              />
            </div>

            <CardItem
              image="https://tailwindui.com/plus/img/component-images/bento-02-integrations.png"
              category="Integrations"
              title="Performance"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit."
              roundedClasses="lg:rounded-r-3xl" 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
            <CardItem
              image="https://tailwindui.com/plus/img/component-images/bento-02-security.png"
              category="Security"
              title="Security"
              description="Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi."
              roundedClasses="lg:rounded-l-3xl"
            />

            <div className="col-span-1 lg:col-span-2">
              <CardItem
                image="https://tailwindui.com/plus/img/component-images/bento-02-performance.png"
                category="Performance"
                title="Powerful APIs"
                description="Sed congue eros non finibus molestie. Vestibulum euismod augue vel commodo vulputate. Maecenas at augue sed elit dictum vulputate."
                roundedClasses="lg:rounded-r-3xl rounded-b-3xl" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BentoGrids;