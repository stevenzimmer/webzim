import { Metadata } from "next";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export const metadata: Metadata = {
  alternates: {
    canonical: "/search",
  },
  robots: {
    index: false,
    follow: true,
  },
};
export default function Page({ searchParams }: PageProps) {
  const { q } = searchParams;
  if (Array.isArray(q) || !q) {
    return null;
  }
  return <div>{q}</div>;
}
