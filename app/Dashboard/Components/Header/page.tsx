import Link from "next/link";

export default function Header() {
    const parentUrl = "/Dashboard";
    const menu = [
        {name: "Home", url: `${parentUrl}`},
        {name: "Collect Waste", url: `${parentUrl}/CollectWaste`},
        {name: "Report Waste", url: `${parentUrl}/ReportWaste`},
        {name: "Leaderboard", url: `${parentUrl}/Leaderboard`},
        {name: "Settings", url: `${parentUrl}/Settings`},
    ]

    return (
        <div className="w-full flex items-center justify-between px-10 py-4">
            <h1 className="text-4xl font-bold">Header</h1>
            <div className="flex items-center justify-center gap-8 text-base">
                {menu.map((item, index) => (
                    <Link key={index} href={item.url}>{item.name}</Link>
                ))}
            </div>
        </div>
    )
}
