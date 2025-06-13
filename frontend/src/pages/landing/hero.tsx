export default function Hero() {
    return (
        <div className="w-full h-full bg-slate-600">
            <div className="h-full flex flex-col items-center justify-center">
                <div className="absolute w-full flex flex-col items-center gap-y-8">
                    <div className="text-5xl font-black">QUMarketplace</div>
                    <input className="bg-white rounded-full w-3/4 text-black px-6 py-4" placeholder="Browse the catalogue" />
                </div>
            </div>
        </div>
    )
}