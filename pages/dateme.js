const Faq = ({ q, children }) =>
  <div className="mb-10">
    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd">
        </path>
      </svg>
      {q}
    </h3>
    <div className="text-gray-500 dark:text-gray-400">{children}</div>
  </div>;

export default function DateMe() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">The guide to dating Ville!</h2>
        <p className='text-gray-500'>So you are considering swiping right on this weird <span className="text-red-500">polyamorous</span> guy named <span className="text-red-500">Ville</span>, literally or figuratively? Exciting! I&apos;m constantly explaining myself, so here are some frequently asked questions!</p>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2 sm:grid-cols-1">
          <div>
            <Faq q="What is polyamory?">In short, it&apos;s the belief that one can have more than one romantic/sexual relationship at a time. More love is better ❤️</Faq>
            <Faq q="So you want a bunch of one night stands or fuck buddies?">Nope! The idea is to have meaningful connections with a few people, maybe even for life! Sex would be one part of that connection.</Faq>
            <Faq q="Do I have to move in to some hippie commune where everybody screws everybody?">No :) The way I do it is that I have my &quot;primary partner&quot; who I live with, and we give each other permission to see other people. At least for now, we are keeping our dating lives separate from each other, so you would be dealing only with me!</Faq>
          </div>
          <div>
            <Faq q="So what can you offer me?">
              <>
              I can offer many things from the traditional relationship menu:
              <ul className='list-disc'>
                <li>Love and affection ❤️</li>
                <li>Going on dates</li>
                <li>Going on trips</li>
              </ul>
              </>
            </Faq>
            <Faq q="And what CAN'T you offer me?">
              <>
              That would be:
              <ul className='list-disc'>
                <li>Moving in together</li>
                <li>Seeing each other every day</li>
                <li>Kids</li>
              </ul>
              </>
            </Faq>
          </div>

        </div>
      </div>
    </section>
  )
}