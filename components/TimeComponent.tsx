
interface PropTypes {
    currentTime: string;
}
export default function TimeComponent({currentTime}: PropTypes) {
    return (
        <div className="text-[100px] font-bold leading-[100px] tracking-[-2.5px] 
        flex items-center
        row-span-2 col-span-10 row-start-8 col-start-2">
            <>{currentTime}</>
        </div>
    )
}