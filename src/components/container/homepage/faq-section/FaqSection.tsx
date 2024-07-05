import Typography from "@/components/typography/Typography";
import FaqItem from "./FaqItems";
import { faqData } from "./data";


export default function FaqSection() {
    return (
        <section className="py-24 max-w-[1200px] m-auto">
            <div>
                <Typography
                    variant="h1"
                    weight="bold"
                >
                    Frequently Asked Questions
                </Typography>
            </div>

            <div className="mt-12 md:mt-24 space-y-3 md:space-y-5">
                {faqData.map((data, i) =>
                    <FaqItem
                        key={i} 
                        summary={data.summary}
                        details={data.details}
                    />
                )}
            </div>

        </section>
    )
}
