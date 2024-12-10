import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => (
  <div className="w-full py-12 lg:pb-40" data-aos="fade-left">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        {/* FAQ Header */}
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="outline">FAQ</Badge>
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Your questions, answered
            </h4>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              We’re here to help you get the most out of our platform. Explore
              answers to common questions about automating LinkedIn posts,
              scheduling, and analytics.
            </p>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {/* Question 1 */}
            <AccordionItem value="q1">
              <AccordionTrigger>
                How does the scheduling feature work?
              </AccordionTrigger>
              <AccordionContent>
                Our scheduling tool allows you to plan and queue your LinkedIn
                posts in advance. Simply set the date and time, and we’ll handle
                the rest, ensuring your content reaches your audience at the
                perfect moment.
              </AccordionContent>
            </AccordionItem>

            {/* Question 2 */}
            <AccordionItem value="q2">
              <AccordionTrigger>
                Can I customize my posts for LinkedIn?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! You can edit your posts to include images, hashtags,
                and even tailor your tone with AI-powered suggestions to make
                each post resonate with your audience.
              </AccordionContent>
            </AccordionItem>

            {/* Question 3 */}
            <AccordionItem value="q3">
              <AccordionTrigger>
                Do you provide analytics for posts?
              </AccordionTrigger>
              <AccordionContent>
                Yes, our platform offers comprehensive analytics for every post
                you publish. Track views, clicks, and engagement rates to
                optimize your content strategy.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
