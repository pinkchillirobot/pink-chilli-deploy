import "./globals.css";
import { Metadata } from "next";
import { MenuButton } from "@/components/MenuButton";

export const metadata: Metadata = {
  title:
    "Pink Chilli in a Bowl: A unique exploration of Singapore’s Culture, Food, and Architecture",
  description:
    "Discover a personal archive of forgotten places and time-honoured buildings in Singapore. Uncover hidden links between local establishments, architectural landmarks, and eateries.",
  keywords:
    "Singapore exploration, archive, forgotten places, iconic buildings, urban planning, design, cityscapes, food, eateries, architecture, landmarks, cultural diversity, street culture, Pink Chilli in a Bowl, Singapore eateries, hawkers, diversity, urbanism, travel, photography, cultural heritage, Swiss design, typology, Manuel Der Hagopian, Isabelle Der Hagopian, Mindy Tan, Don Wong, Stephanie Peh, Sarah Mineko Ichioka, Ming Tan, Adib Jalal, Ariel Lee, Practice Theory.",

  icons: `${
    process.env.VERCEL_URL
      ? `https:${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  }/favicon.png`,
  openGraph: {
    title:
      "Pink Chilli in a Bowl: A unique exploration of Singapore’s Culture, Food, and Architecture",
    description:
      "Discover a personal archive of forgotten places and time-honoured buildings in Singapore. Uncover hidden links between local establishments, architectural landmarks, and eateries.",
    images: `${
      process.env.VERCEL_URL
        ? `https:${process.env.VERCEL_URL}`
        : "http://localhost:3000"
    }/opengraph.png`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative">
          <div
            id="sticky-nav"
            className="mx-4 mb-0 sticky top-0 bg-[transparent] md:bg-white z-10 pt-4"
          >
            <div className="border-x border-chilli-grey flex justify-end md:justify-between items-center px-4 pb-4">
              <h1 className="font-mono text-xs uppercase hidden md:block">
                Pink Chilli In A Bowl
              </h1>
              <MenuButton />
            </div>
          </div>

          <div className="mx-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
