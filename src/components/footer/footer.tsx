import { Card } from "../ui/card";

export default function Footer() {
    return (
        <footer className="h-[65px] w-screen mt-[65px]">
            <Card className="h-full w-full flex items-center justify-start p-4">
                <p className="text-sm text-gray03">© 2024 Thiago Elias</p>
            </Card>
        </footer>
    )
}
