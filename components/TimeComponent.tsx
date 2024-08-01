import { motion } from "framer-motion";
interface PropTypes {
  currentTime: string;
  abbreviation: string;
  isExpanded: boolean;
}
export default function TimeComponent({
  currentTime,
  abbreviation,
  isExpanded,
}: PropTypes) {
  return (
    <div
      className={` items-center 
        flex xl:col-start-3 
        ${
          isExpanded
            ? "row-start-11 row-span-3 md:row-start-8 md:row-span-6 xl:row-start-10 xl:row-span-8"
            : "row-start-16 row-span-2 md:row-start-15 md:row-span-3 xl:row-start-17 xl:row-span-4"
        }

         col-span-8
         col-start-2 
        justify-between xl:col-span-4 xl:justify-start`}
    >
      <motion.div initial={{x:-1000, opacity:0}} animate={{x:0, opacity:100}} transition={{duration:2}}
 className="text-[100px] md:text-[175px] font-bold tracking-[-2.5px] xl:text-[200px] xl:tracking-[-5px]  ">{currentTime}</motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:100}} transition={{duration:3}} className="text-[15px] md:text-[32px] font-light flex flex-col h-[100%] justify-end opacity-75">
        {abbreviation}
      </motion.div>
    </div>
  );
}
