import Cards from "./Cards"
import {reasons} from "../data"

export default function MoreReasons() {
    return (
        <section className="bg-black text-white py-16">
            <h2 className="text-3xl font-semibold mb-8">
                More reasons to join
            </h2>
            <div className="w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {reasons.map((reason) => (
                        <Cards key={reason.title} {...reason} />
                    ))}
                </div>
            </div>
        </section>
    )
}