import Image from "next/image";
import { motion } from "framer-motion";
interface PropTypes {
  isDayTime: boolean | null;
  isLoading: boolean | null;
}

export default function BackgroundImageComponent({
  isDayTime,
  isLoading,
}: PropTypes) {
  if(isDayTime == null) {
    return (
      <motion.div initial={{opacity:0, zIndex:-10}} transition={{duration:1}} className="h-screen w-screen absolute bg-black">

      </motion.div>
    )
  } else {
  if (isDayTime) {
    return (
      <motion.div
        className=""
        initial={{opacity: 0, zIndex: -10 }}
        animate={{opacity: 100}}
        exit={{opacity:0}}
        transition={{ duration: 1 }}
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
        animate={{ opacity: 100 }}
        exit={{opacity:0}}
        transition={{ duration: 1 }}
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
 
}
