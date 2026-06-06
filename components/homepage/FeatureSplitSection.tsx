import Image from "next/image";

type FeatureItem = {
  title: string;
  description: string;
  active?: boolean;
};

type Props = {
  accent: "accent" | "success";
  imageAlt: string;
  imageFirst?: boolean;
  imageHeight: number;
  imageSrc: string;
  imageWidth: number;
  items: FeatureItem[];
  title: string;
};

export function FeatureSplitSection({
  accent,
  imageAlt,
  imageFirst = false,
  imageHeight,
  imageSrc,
  imageWidth,
  items,
  title,
}: Props) {
  const activeBorder =
    accent === "accent" ? "border-l-accent" : "border-l-success";
  const imageOrder = imageFirst ? "lg:order-1" : "lg:order-2";
  const contentOrder = imageFirst ? "lg:order-2" : "lg:order-1";
  const imageMaxWidth = imageFirst ? "max-w-[650px]" : "max-w-[720px]";

  return (
    <section className="border-b border-border">
      <div className="grid lg:grid-cols-2">
        <div
          className={`bg-surface ${contentOrder} ${
            imageFirst ? "lg:border-l lg:border-border" : "lg:border-r"
          }`}
        >
          <div className="border-b border-border px-8 py-14 md:px-16 lg:py-16">
            <h2 className="max-w-[620px] text-[38px] font-bold leading-[1.12] text-text-slate md:text-[44px] lg:text-[52px]">
              {title}
            </h2>
          </div>
          <div className="divide-y divide-border">
            {items.map((item) => (
              <div
                key={item.title}
                className={`px-8 py-8 md:px-16 ${
                  item.active ? `border-l-2 ${activeBorder}` : ""
                }`}
              >
                <h3 className="text-xl font-bold leading-7 text-text-slate">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[680px] text-base font-normal leading-7 text-text-slate-medium md:text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`flex items-center justify-center bg-surface-muted px-8 py-14 md:px-14 lg:py-16 ${imageOrder}`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className={`w-full ${imageMaxWidth}`}
          />
        </div>
      </div>
    </section>
  );
}
