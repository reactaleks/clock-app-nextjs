import Image from "next/image"
interface PropTypes {
    currentTime:string
}
export default function BackgroundImageComponent({currentTime}:PropTypes) {
    const timeofDay = parseInt(currentTime.split(':')[0])
    if(timeofDay >= 5 && timeofDay < 21) {
        return (
            <Image src={'/assets/desktop/bg-image-daytime.jpg'} width={1440} height={800} alt="" style={{objectFit: 'cover'}} className="absolute h-screen -z-10"/>
        )
    } else {
        return (
            <Image src={'/assets/desktop/bg-image-nighttime.jpg'} width={1440} height={800} alt="" style={{objectFit: 'cover'}} className="absolute h-screen -z-10"/>
        )
    }
}