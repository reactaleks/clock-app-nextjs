import Image from "next/image";

interface PropTypes {
  isDayTime: boolean;
  isLoading: boolean;
}

export default function BackgroundImageComponent({
  isDayTime,
  isLoading,
}: PropTypes) {
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
  } else if (!isDayTime) {
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
    )
  }
}
