import Image from "next/image";
interface PropTypes {
  isDayTime: boolean;
}
export default function BackgroundImageComponent({ isDayTime }: PropTypes) {
  if (isDayTime) {
    return (
      <Image
        src={"/assets/desktop/bg-image-daytime.jpg"}
        width={1440}
        height={800}
        alt=""
        style={{ objectFit: "cover", height: "full" }}
        className="absolute h-full w-full -z-10"
        priority
      />
    );
  } else {
    return (
      <Image
        src={"/assets/desktop/bg-image-nighttime.jpg"}
        width={1440}
        height={800}
        alt=""
        style={{ objectFit: "cover", height: "full" }}
        className="absolute h-full w-full -z-10"
        priority
      />
    );
  }
}
