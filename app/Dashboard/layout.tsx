import Header from "./Components/Header/page"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="min-h-screen text-4xl flex flex-col items-center justify-center">
            <Header/>
            {children}
        </div>
    )
}