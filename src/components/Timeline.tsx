export default function Timeline() {
    const events = [
        {
            date: "2020-2023",
            title: "I was a student at Rayongwittayakom School in computer science program. A beginner in programming. I learned about programming languages like C# and use Unity to make a game.",
            highlight: "National Software Contest 2024",
        },
        {
            date: "2024-Present",
            title: "I'm a student at King Mongkut's Institute of Technology Ladkrabang (KMITL) in computer science program. I'm interested in web development. And started to learn about web development.",
            highlight: ""
        }
    ]
    return (
        <div className="flex flex-col w-full gap-8">
            {events.map((event, index) => (
                <div key={index} className="flex min-h-[120px] hover:bg-white/30 border-red-500 text-white p-8 gap-8 rounded-xl duration-300 max-md:flex-col max-md:gap-4 max-md:p-4">
                    <div className="flex flex-col w-fit justify-center">
                        <h1 className="text-2xl font-bold text-nowrap">{event.date}</h1>
                    </div>
                    <div className="flex flex-col w-full justify-center">
                        <div>
                            {event.title}
                            {event.highlight && (
                                <>
                                    {" And I participated in the "}
                                    <span className="underline">{event.highlight}</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}