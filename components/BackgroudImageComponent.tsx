import Image from "next/image";
interface PropTypes {
  isDayTime: boolean;
}
export default function BackgroundImageComponent({ isDayTime }: PropTypes) {
  if(isDayTime) {
    return <Image
      src={"/assets/desktop/bg-image-daytime.jpg"}
      width={1440}
      height={800}
      alt=""
      style={{ objectFit: "cover" }}
      className="absolute h-screen w-screen -z-10"
    />
  } else {
    return <Image
    src={"/assets/desktop/bg-image-nighttime.jpg"}
    width={1440}
    height={800}
    alt=""
    style={{ objectFit: "cover" }}
    className="absolute h-screen w-screen -z-10"
  />
  }
}
