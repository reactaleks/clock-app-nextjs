
interface PropTypes {
    currentTime: string;
}
export default function TimeComponent({currentTime}: PropTypes) {
    return (
        <div>
            <>{currentTime}</>
        </div>
    )
}