import React from 'react'
import Nav from '@/components/nav'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Marquee from 'react-fast-marquee'

const sellhub = () => {
  return (
    <>
      <main>
        <Nav />
        <section className="py-12">
          <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col justify-center items-center antialiased">
            {/* Main Content */}
            <div className="text-white flex flex-col items-center justify-center p-4 space-y-6">
              {/* Title */}
              <h1 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
                Secure & Fast Commerce for
                <br />
                <span className="text-blue-400">Digital Businesses</span>
              </h1>

              {/* Description */}
              <p className="text-center text-sm md:text-base lg:text-lg text-gray-500 max-w-3xl">
                SellHub is a top platform for creators and businesses to sell
                goods, process payments, minimize fraud, and access quality data.
              </p>

              {/* Buttons */}
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <button className="py-2 px-4 md:px-6 bg-blue-500 text-white rounded-lg cursor-pointer">
                  Sign up for Free
                </button>
                <button className="py-2 px-4 md:px-6 border-2 border-blue-500 text-white rounded-lg cursor-pointer">
                  Demo Store
                </button>
              </div>

              {/* Marquee Section */}
              <div className="pt-12 w-full max-w-5xl">
                <Marquee gradient={false} speed={50}>
                  <div className="flex flex-row items-center gap-12 sm:gap-16">
                    <img
                      src="https://sellhub.cx/home/payments/Paypal.svg"
                      alt="Paypal"
                    />
                    <img
                      src="https://sellhub.cx/home/payments/Klarna.svg"
                      alt="Klarna"
                    />
                    <img
                      src="https://sellhub.cx/home/payments/Stripe.svg"
                      alt="Stripe"
                    />
                    <img
                      src="https://sellhub.cx/home/payments/Visa.svg"
                      alt="Visa"
                    />
                    <img
                      src="https://sellhub.cx/home/payments/Bitcoin.svg"
                      alt="Bitcoin"
                    />
                    <img
                      src="https://sellhub.cx/home/payments/Paypal.svg"
                      alt="Paypal"
                    />
                    <img
                      src="https://sellhub.cx/home/payments/Stripe.svg"
                      alt="Stripe"
                    />
                  </div>
                </Marquee>
              </div>
            </div>

            {/* Background Beams */}
            <BackgroundBeams />
          </div>
        </section>
      </main>
    </>
  )
}

export default sellhub
