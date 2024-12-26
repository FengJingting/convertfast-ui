import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type FeatureItemProps = {
  title: string;
  description: string;
  svgPath: string;
};

function FeatureItem({ title, description, svgPath }: FeatureItemProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="rounded-md bg-black/5 p-1 ring-1 ring-black/10">
        <svg
          className="icon w-6 h-6"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={svgPath} fill="#8a8a8a" />
        </svg>
      </div>
      <dt className="mt-4 text-base font-semibold">{title}</dt>
      <dd className="mt-2 text-base text-muted-foreground">{description}</dd>
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
            <p className="mt-4 text-lg text-primary">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
            <SubscribeForm />
          </Card>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <FeatureItem
              title="Weekly articles"
              description="Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet."
              svgPath="M725.333333 170.666667h74.709334C864.853333 170.666667 917.333333 223.189333 917.333333 288.096V799.893333C917.333333 864.757333 864.832 917.333333 800.042667 917.333333H223.957333C159.146667 917.333333 106.666667 864.810667 106.666667 799.904V288.106667C106.666667 223.242667 159.168 170.666667 223.957333 170.666667H298.666667v-32a32 32 0 0 1 64 0v32h298.666666v-32a32 32 0 0 1 64 0v32z m0 64v32a32 32 0 0 1-64 0v-32H362.666667v32a32 32 0 0 1-64 0v-32h-74.709334A53.354667 53.354667 0 0 0 170.666667 288.096V799.893333A53.301333 53.301333 0 0 0 223.957333 853.333333h576.085334A53.354667 53.354667 0 0 0 853.333333 799.904V288.106667A53.301333 53.301333 0 0 0 800.042667 234.666667H725.333333z"
            />
            <FeatureItem
              title="No spam"
              description="Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim."
              svgPath="M870.4 204.8c-18.6368 0-36.1472 5.0176-51.2 13.7728V153.6a102.5024 102.5024 0 0 0-159.3856-85.0432C645.7856 28.672 607.7952 0 563.2 0S480.5632 28.672 466.5856 68.5568A102.5024 102.5024 0 0 0 307.2 153.6v377.4976L238.2848 411.648a99.6864 99.6864 0 0 0-61.3888-48.7936 95.5392 95.5392 0 0 0-74.8544 10.3424c-46.4384 27.8528-64.1536 90.8288-39.424 140.3904 1.536 3.1232 34.2016 70.0416 136.192 273.92 48.0256 96 100.7104 164.6592 156.6208 203.9808 43.8784 30.8736 74.1888 32.4608 79.8208 32.4608h256c43.5712 0 84.0704-14.1824 120.4224-42.0864 34.1504-26.2656 63.7952-64.256 88.064-112.8448 47.8208-95.6416 73.1136-227.9424 73.1136-382.6688v-179.2c0-56.4736-45.9264-102.4-102.4-102.4z m51.2 281.6c0 146.7904-23.3984 271.1552-67.6864 359.7312C825.0368 903.8848 773.3248 972.8 691.2 972.8H435.712c-1.9968-0.1536-23.552-2.56-56.064-26.88-32.4096-24.2688-82.176-75.3664-135.0656-181.248-103.7824-207.5648-135.68-272.9472-135.9872-273.5616l-0.1024-0.2048c-12.8512-25.7536-3.7376-59.4944 19.9168-73.6768a44.8512 44.8512 0 0 1 35.072-4.864 48.9472 48.9472 0 0 1 30.0544 24.1664l0.3072 0.512 79.9232 138.496c16.3328 29.8496 34.7136 42.3936 54.6304 37.3248 19.968-5.0688 30.0544-25.0368 30.0544-59.2384V153.6c0-28.2112 22.9888-51.2 51.2-51.2s51.2 22.9888 51.2 51.2v332.8a25.6 25.6 0 0 0 51.2 0V102.4c0-28.2112 22.9888-51.2 51.2-51.2s51.2 22.9888 51.2 51.2v384a25.6 25.6 0 0 0 51.2 0V153.6c0-28.2112 22.9888-51.2 51.2-51.2s51.2 22.9888 51.2 51.2v384a25.6 25.6 0 0 0 51.2 0V307.2c0-28.2112 22.9888-51.2 51.2-51.2s51.2 22.9888 51.2 51.2v179.2z"
            />
          </dl>
        </div>
      </div>
    </div>
  );
}