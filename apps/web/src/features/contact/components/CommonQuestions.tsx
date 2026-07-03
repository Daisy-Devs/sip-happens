import { ChevronDown } from 'lucide-react'
import React from 'react'

const CommonQuestions = () => {
  return (
    <section id="faq" className="max-w-4xl mx-auto px-5 md:px-30 mb-24 py-20">
      <h2 className="headline-lg text-center mb-12">
        Common Questions
      </h2>
      <div className="space-y-6">
        <details className="group bg-white/80 p-6 rounded-lg cursor-pointer transition-all hover:bg-surface text-primary shadow-[0_8px_9px_#e5bfaa] border border-outline-variant/30">
          <summary className="flex justify-between items-center body-md list-none active:outline-none focus:outline-none">
            <span>Do you offer dairy-free milk alternatives?</span>
            <ChevronDown className=" group-open:rotate-180 transition-transform"/>
          </summary>
          <p className="mt-5 label-md">
            Yes, we offer dairy-free milk alternatives like soy milk, almond milk and oat milk.
          </p>
        </details>
        <details className="group bg-white/80 p-6 rounded-lg cursor-pointer transition-all hover:bg-surface text-primary shadow-[0_8px_9px_#e5bfaa] border border-outline-variant/30">
          <summary className="flex justify-between items-center body-md list-none active:outline-none focus:outline-none">
            <span>Is there seating for work or remote study?</span>
            <ChevronDown className=" group-open:rotate-180 transition-transform"/>
          </summary>
          <p className="mt-5 label-md">
            Yes, we offer seating for work or remote study.
          </p>
        </details>
        <details className="group bg-white/80 p-6 rounded-lg cursor-pointer transition-all hover:bg-surface text-primary shadow-[0_8px_9px_#e5bfaa] border border-outline-variant/30">
          <summary className="flex justify-between items-center body-md list-none active:outline-none focus:outline-none">
            <span>Can I host a small event or workshop at the café?</span>
            <ChevronDown className=" group-open:rotate-180 transition-transform"/>
          </summary>
          <p className="mt-5 label-md">
            Yes, you can host a small event or workshop at the cafeteria.
          </p>
        </details>
      </div>
    </section>
  )
}

export default CommonQuestions