export default function Loading() {
    return (
        <>
            <div className="rounded-t-xl flex flex-col self-center bg-white shadow-xl pt-4 px-4 mx-4 w-[300px] md:w-[480px]" >
                <div className="flex flex-row mb-6 gap-2">
                    <div className="bg-slate-200 h-6 w-full grow animate-pulse"></div>
                    <div className="bg-slate-200 h-6 w-[94px] animate-pulse"></div>
                </div>
            </div>
            <div className="flex flex-col self-center bg-white shadow-xl px-4 mx-4 pb-4 rounded-b-xl w-[300px] md:w-[480px]" >
                <div className="flex flex-col gap-2">
                    <div className="bg-slate-200 h-6 mr-8 animate-pulse"></div>
                    <div className="bg-slate-200 h-10 mr-8 animate-pulse"></div>
                    <div className="bg-slate-200 h-10 mr-8 animate-pulse"></div>
                    <div className="bg-slate-200 h-10 mr-8 animate-pulse"></div>
                    <div className="bg-slate-200 h-10 mr-8 animate-pulse"></div>
                    <div className="bg-slate-200 h-10 mr-8 animate-pulse"></div>
                </div>
            </div>
        </>
    )
}