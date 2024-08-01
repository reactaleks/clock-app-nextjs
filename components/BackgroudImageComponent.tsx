import Image from "next/image";
import { motion } from "framer-motion";
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
      <motion.div
        className=""
        initial={{opacity: 0, zIndex: -10 }}
        animate={isLoading ? {opacity:0} : { opacity: 100 }}
        transition={{ duration: 5 }}
      >
        <Image
          src={"/assets/desktop/bg-image-daytime.jpg"}
          width={1440}
          height={800}
          alt=""
          style={{ objectFit: "cover", height: "full" }}
          className="absolute h-full w-full -z-10"
          priority
        />
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className=""
        initial={{ opacity: 0, zIndex: -10 }}
        animate={isLoading ? {opacity:0} : { opacity: 100 }}
        transition={{ duration: 5 }}
      >
        <Image
          src={"/assets/desktop/bg-image-nighttime.jpg"}
          width={1440}
          height={800}
          alt=""
          style={{ objectFit: "cover", height: "full" }}
          className="absolute h-full w-full -z-10"
          priority
        />
      </motion.div>
    );
  } 
}
