import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
}

export default function FrontImage(props: ImageProps) {
  return <Image src={props.src} alt={props.alt} width={300} height={400} />;
}
