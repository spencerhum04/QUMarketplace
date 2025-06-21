import reacti from "../assets/react.svg"

export default function PostCard() {
    return (
        <>
            <div className="bg-slate-800 flex flex-col p-4">
                <img src={reacti} />
                <div>desc</div>
                <div>like</div>
                <div>bookmark</div>
            </div>
        </>
    )
}