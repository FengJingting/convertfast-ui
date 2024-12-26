import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type FeatureItemProps = {
    title: string;
    description: string;
  };
  
  function FeatureItem({ title, description }: FeatureItemProps) {
    return (
      <div className="flex flex-col items-start">
        <div className="rounded-md bg-black/5 p-2 ring-1 ring-black/10"></div>
        <dt className="mt-4 text-base font-semibold">{title}</dt>
        <dd className="mt-2 text-sm text-muted-foreground">{description}</dd>
      </div>
    );
  }

function SubscribeForm() {
  return (
    <div className="mt-6 flex max-w-md gap-x-4">
      <Input
        id="email-address"
        name="email"
        type="email"
        required
        placeholder="Enter your email"
        className="flex-auto"
      />
      <Button type="submit" className="flex-none">
        Subscribe
      </Button>
    </div>
  );
}

export default function NewsLetter() {
  return (
    <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32 bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950 to-blac">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <Card className="max-w-xl p-6 lg:max-w-lg bg-transparent">
            <h2 className="text-4xl font-semibold tracking-tight">
              Subscribe to our newsletter
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
            <SubscribeForm />
          </Card>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <FeatureItem
              title="Weekly articles"
              description="Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet."
            />
            <FeatureItem
              title="No spam"
              description="Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim."
            />
          </dl>
        </div>
      </div>
      
    </div>
  );
}