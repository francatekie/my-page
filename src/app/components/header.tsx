/** @format */

"use client";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRightCircle,
  ArrowUpToLine,
  ChartBar,
  Check,
  Cog,
  MinusSquareIcon,
  PlusSquareIcon,
  ShoppingBag,
  StoreIcon,
  UserPlus2Icon,
  Facebook,
  Instagram,
  Twitter,
  MenuIcon,
  Hamburger,
  X,
  ChevronDown,
  ChevronRight,
  ChevronUp

} from "lucide-react";

import { ArrowDownIcon } from "lucide-react";
import { useState } from "react";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};
const Accordion = ({ items }: { items: AccordionItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="border-b border-slate-300 py-2.5">
          <button
            className="w-full group text-left  py-3 font-medium flex justify-between items-center cursor-pointer "
            onClick={() => toggle(index)}>
            <span className="group-hover:underline">{item.title}</span>
            <span className={"transform transition-transform duration-500"}>
              {openIndex === index ? (
                <MinusSquareIcon className=" text-gray-400 size-5" />
              ) : (
                <PlusSquareIcon className="size-5 text-gray-400" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}>
            <div className=" bg-white">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);
  const [showsolution, setSolution] = useState(false);
  
  return (
    <div>
      {/* navabar */}
      <nav className="bg-white/80 backdrop-blur-md items-center w-full flex p-4 justify-between z-50 ">
        <div className="flex space-x-1 ">
          
          <h1 className="font-bold text-2xl uppercase">BigCom</h1>
        </div>

        <ul className="  hidden md:flex font-bold space-x-10  text-gray-800 hover:text-gray-600 text-sm ml-20   ">
          <li className="">
            <a href="#">Get Started</a>
          </li>
          <button
            onClick={() => setShowBusiness(!showBusiness)}
            className=" cursor-pointer items-center justify-between md:px-3 flex    rounded-md ">
            {" "}
            Business type
            <ChevronDown></ChevronDown>
          </button>
          {showBusiness && (
            <ul className=" absolute py-2 rounded-md left-190 text-gray-950 top-full bg-gray-100 w-40 items-center  space-y-3 z-50">
              <li>
                <a href="#" className="block px-4">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block px-4">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="block px-4">
                  Earnings
                </a>
              </li>
              <li>
                <a href="#" className="block px-4">
                  Sign out
                </a>
              </li>
            </ul>
          )}

          <li className="">
            {" "}
            <button
              onClick={() => setSolution(!showsolution)}
              className="flex md:px-3 cursor-pointer   rounded-md">
              Solutions <ChevronDown></ChevronDown>
            </button>
          </li>
          {showsolution && (
            <ul className=" absolute py-2 rounded-md left-235 text-gray-950 top-full bg-gray-100 w-40 items-center  space-y-3 z-50">
              <li>
                <a href="#" className="block px-4">
                  Review
                </a>
              </li>
              <li>
                <a href="#" className="block px-4">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="block px-4">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="block px-4">
                  Sign out
                </a>
              </li>
            </ul>
          )}
          <li>
            <a href="">Partner with Bigcom</a>
          </li>
          <li>
            <a href="#faq-section"> FAQ's</a>{" "}
          </li>
        </ul>
        {/*mobile navbar*/}
        <button
          onClick={() => {setIsOpen(!isOpen)}}
          className="md:hidden p-2 rounded-md text-gray-700">
          {isOpen ? <X size={28} className=" " /> : <MenuIcon size={28} />}
        </button>

       
      </nav> 
      {/* mobile nav */}
      {
        isOpen &&(
          <ul className=" absolute z-50 bg-white   md:hidden font-bold space-y-10  text-gray-800 hover:text-gray-600 text-sm h-screen px-5 ">
            <li  className="mt-5" onClick={() => setIsOpen(false)}>Get Started</li>
          <button
              onClick={() => setShowBusiness(!showBusiness)}
               
              className="flex md:px-3 cursor-pointer   rounded-md bg-gray-100 w-35 p-1">
                Business Type
              {showBusiness ? <ChevronUp className=" " /> : <ChevronDown />}
               
              
            </button> 
            {showBusiness && (
            <ul className="  rounded-md left-190 text-gray-950   w-40 items-center  space-y-3 z-50">
              <li>
                <a href="#" className="block px-4" onClick={() => setIsOpen(false)}>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block px-4" onClick={() => setIsOpen(false)}>
                  Settings
                </a>
              </li>
             
            </ul>
          )}
          <button
              onClick={() =>setSolution(!showsolution)}
              className="flex md:px-3 cursor-pointer   rounded-md bg-gray-100 w-35 p-1">
                Solutions
             {showsolution ? <ChevronUp className=" " /> : <ChevronDown />}
            </button>
            {showsolution &&(
              <ul className="  rounded-md left-235 text-gray-950  w-40 items-center  space-y-3 z-50">
              <li>
                <a href="#" className="px-4" onClick={() => setIsOpen(false)}>
                  Review
                </a>
              </li>
              <li>
                <a href="#" className=" px-4" onClick={() => setIsOpen(false)}>
                  Register
                </a>
              </li>
             
             
            </ul>
            )}
             
          <li  onClick={() => setIsOpen(false)}>Partner with Bigcom</li>
          <li  onClick={() => setIsOpen(false)}><a href="#faq-section">FAQ's</a></li>
            
          </ul>
        )
        
      }
      <div className="h-[600px] overflow-hidden  relative">
        <img
          src="hero.jpg"
          alt="My Burger"
          width={1500}
          height={200}
          className="object-cover scale-105 absolute inset-0 -z-20 h-full w-full"
        />

        {/* Content */}
        <div className=" bg-black/50 absolute inset-0 flex flex-col items-center text-center justify-center md:-z-20 -z-20">
          <div className=" max-md:items-start flex flex-col items-center justify-center p-10 ">
            <h2 className=" flex   md:text-6xl text-4xl font-bold text-white  ">
              Big,Grow Bigger with BIGCOM
            </h2>
            <p className=" font-bold md:text-xl text-lg py-1 text-white">
              Expand your customer, sales and marketing research
            </p>
          </div>
          <button className="h-10 w-60 bg-amber-400 font-bold mt-2 rounded-md">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center py-7">
        <h2 className="text-2xl  inset-0 text-center my-15">
          Get to know the services we offer for businesses
        </h2>
        <div className="grid  p-5 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap:7 mr:20 md:mr-0 lg:gap-10 lg:px-20 md:px-10 px-3 content-center items-center">
          <div className="  max-sm:mt-">
            <Image
              src="/smiling-young-customer-holding-bottle-oil.jpg"
              alt="My burger"
              width={300}
              height={100}
              className="rounded-md w-full object-cover"
            />
            <h3 className="font-bold mt-3">Grocery</h3>
            <p className="mt-0 text-sm">
              We will connect you with the right customers
            </p>
            <button className="py-2 px-5 bg-orange-400 hover:bg-orange-500 rounded-md font-bold text-sm text-white mt-2">
              Find out how
            </button>
          </div>

          <div className=" max-sm:mt-10">
            <Image
              src="/restaurant.jpg"
              alt="My burger"
              width={300}
              height={100}
              className="rounded-md w-full object-cover"
            />
            <h3 className="font-bold mt-3">Restaurant</h3>
            <p className="text-sm">
              We will connect you with the right customers
            </p>
            <button className="py-2 px-5 bg-orange-400 hover:bg-orange-500 rounded-md font-bold text-sm text-white mt-2">
              Find out how
            </button>
          </div>

          <div className="max-sm:mt-10  ">
            <Image
              src="/smiling-young-customer-holding-bottle-oil.jpg"
              alt="My burger"
              width={300}
              height={100}
              className="rounded-md w-full object-cover"
            />
            <h3 className="font-bold mt-3">Retail</h3>
            <p className="text-sm">
              We will connect you with the right customers
            </p>
            <button className="py-2 px-5 bg-orange-400 hover:bg-orange-500 rounded-md font-bold text-white text-sm mt-2">
              Find out how
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 ">
          <p className=" flex items-center  font-bold gap-3">
            Explore more <ArrowRightCircle className="text-black h-7 w-8" />
          </p>
        </div>
      </div>
      <div className="h-full flex flex-col  justify-center md:space-y-24 space-y-12 px-4 md:px-12 lg:px-24">
        <div className="flex flex-col-reverse   md:flex-row md:items-center md:justify-between gap-8 md:gap-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h4 className="font-bold text-2xl md:text-2xl text-slate-800 mb-5 my-15">
              Grow with Bigcom
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Access our active customer base by offering pickup and delivery on
              the BigCom app. Access our active customer base by offering
              pickup and delivery on the BigBabs app.
            </p>
          </div>

          <div className="flex justify-center items-center md:w-1/2">
            <ChartBar className="size-25 text-violet-600  " />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16">
          <div className="flex justify-center items-center md:w-1/2">
            <ArrowUpToLine className="size-25 text-violet-600 " />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h4 className="font-bold text-2xl md:text-2xl  text-slate-800 mb-5">
              Deliver to more customers
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Access our active customer base by offering pickup and delivery on
              the BigCom app. Access our active customer base by offering
              pickup and delivery on the BigBabs app.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 md:gap-16">
          <div className="md:w-1/2">
            <h4 className="font-bold text-2xl text-center  md:text-left md:text-2xl  text-slate-800 mb-5 ">
              What you get when you work with us
            </h4>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <Check className="h-6 w-6 text-violet-600" />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-6 w-6 text-violet-600" />
                Nesciunt recusandae in eos maxime obcaecati.
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-6 w-6 text-violet-600" />
                Assumenda incidunt inventore adipisci delectus mollitia.
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-6 w-6 text-violet-600" />
                Repudiandae tenetur iure odio quidem.
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center md:w-1/2">
            <StoreIcon className="size-25 text-violet-600  " />
          </div>
        </div>
      </div>
      <div className="md:py-24 md:px-8 px-4 py-10 my-7 w-full bg-sky-100 rounded-2xl ">
        <h5 className="font-bold text-2xl text-center text-slate-800 py-3 ">
          Strategies we offer to maximize your business growth
        </h5>
        <p className=" text-center text-slate-800 mb-5">
          Products and services we offer for the growth and success of your
          business
        </p>

        {/* <div className="grid grid-cols-2 gap-6 items-center justify-center">
          {[
            { label: "Delivery", img: "/images/paws.png" },
            { label: "PickUp", img: "/images/paws.png" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-bold text-slate-800 mb-2">{item.label}</p>
              <Image
                src={item.img}
                alt={item.label}
                width={300}
                height={100}
                className="rounded-md mx-auto"
              />
            </div>
          ))}
        </div> */}

         < div className="grid grid-cols-2   md:px-15 gap-2 place-items-center lg:px-55">
          <div className="flex flex-col items-center">
            <p className="font-bold text-slate-800">Delivery</p>
            <Image
              src="/restaurant.jpg"
              alt="Delivery"
              height={100}
              width={300}
              className="rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col items-center ">
            <p className="font-bold text-slate-800">PickUp</p>
            <Image
              src="/restaurant.jpg"
              alt="Pickup"
              height={100}
              width={300}
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
      <div className="py-10 md:px-8 px-4">
        <h3 className="flex text-center justify-center pb-7 font-bold">
          How it works?
        </h3>

        <div className="flex md:gap-5 gap-2 justify-center items-center">
          {/* Step 1 */}
          <div className="flex flex-col justify-center text-center max-w-60 items-center space-y-3">
            <div className="h-15 w-15 bg-violet-100 flex flex-col items-center justify-center rounded-md">
              <UserPlus2Icon  className="h-6 w-6 text-violet-500" />
            </div>
            <h4 className="font-bold">Register</h4>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>

          <hr className="md:w-20 border-t-3 border-dotted text-gray-400 md:block hidden -mt-20" />

          {/* Step 2 */}
          <div className="flex flex-col justify-center text-center max-w-60 items-center space-y-3">
            <div className="h-15 w-15 bg-pink-100 flex flex-col items-center justify-center rounded-md">
              <Cog className="h-6 w-6 text-pink-500" />
            </div>
            <h4 className="font-bold">Set Up</h4>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>

          <hr className="md:w-20 border-t-3 border-dotted text-gray-400 md:block hidden -mt-20" />

          {/* Step 3 */}
          <div className="flex flex-col justify-center text-center max-w-60 items-center space-y-3">
            <div className="h-15 w-15 bg-blue-100 flex flex-col items-center justify-center rounded-md">
              < ShoppingBag className="h-6 w-6 text-blue-500" />
            </div>
            <h4 className="font-bold">Start Selling</h4>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      
      <section
        id="faq-section"
        className=" flex flex-col justify-center items-center md:gap-20 px-4 md:px-12 lg:px-20 py-16 ">
        <a href=""></a>
        <h2 className="font-bold text-3xl text-slate-800">
          Frequently asked questions
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 ">
          <div>
            <form className="flex flex-col space-y-10">
              <h4 className="font-semibold text-xl text-slate-700 mb-6">
                Still have questions?
              </h4>
              <textarea
                placeholder="ask anything..."
                className=" h-28 border-b border-slate-400 focus:outline "></textarea>
              <button className=" w-full py-3 bg-violet-600 hover:bg-violet-400 font-medium rounded-lg transition-colors duration-300">
                Send email
              </button>
            </form>
          </div>

          <Accordion
            items={[
              {
                title: " How does this work?",
                content: (
                  <p className="text-sm ">
                    You can track your order by going to the "Orders" section in
                    your account. There, you'll find all your current and past
                    orders with their status. For active orders, you can see
                    real-time updates on the delivery progress.
                  </p>
                ),
              },
              {
                title: "Can i modify or cancel my order?",
                content: (
                  <p className="text-sm ">
                    You can modify or cancel your order within the first 5
                    minutes after placing it. After that, the order goes into
                    preparation and cannot be changed. To modify or cancel, go
                    to your active orders and select the order you wish to
                    change.
                  </p>
                ),
              },
              {
                title: "What if my order is late?",
                content: (
                  <p className="text-sm ">
                    If your order is taking longer than the estimated delivery
                    time, you can check the status in the app for any updates.
                    If there's a significant delay, you can contact our support
                    team through the app or website, and we'll assist you
                    immediately.
                  </p>
                ),
              },
              {
                title: "What if items are missing from my order?",
                content: (
                  <p className="text-sm ">
                    If items are missing from your order, please report it
                    within 24 hours by going to your order history, selecting
                    the order, and clicking "Report an Issue." Our team will
                    review your report and process a refund for the missing
                    items.
                  </p>
                ),
              },
              {
                title: "How do i get a receipt for my orders?",
                content: (
                  <p className="text-sm ">
                    You can find receipts for all your orders in the "Orders"
                    section of your account. Select the order you need a receipt
                    for and click "View Receipt." From there, you can download
                    or print the receipt for your records.
                  </p>
                ),
              },
            ]}
          />
        </div>
              
      </section>
      {/* footer */}
      <footer className="h-90 bg-neutral-950 py-10 px-10">
        <div className="flex  justify-between space-x-20">
          <div>
            <h5 className="text-2xl text-white flex p-3 max-md:grid-cols-2 ">
              BIGCOM
            </h5>
            <div className="flex   mt-5">
              <Facebook className="h-7 w-7 text-white p-1 " />
              <Instagram className="h-7 w-7 text-white p-1" />
              <Twitter className="h-7 w-7 text-white p-1" />
            </div>
          </div>

          <div className="text-white space-y-1">
            <h5 className="bold text-xl py-2">Navlinks</h5>
            <p className="2">Get Started</p>
            <p className="">Business Type</p>
            <p className="">Solutions</p>
            <p className="">Partner with BigBabs</p>
            <p className="">FAQ's</p>
          </div>
          <div className="text-white space-y-1">
            <h5 className="bold text-xl py-2">Navlinks</h5>
            <p className="2">Get Started</p>
            <p className="">Business Type</p>
            <p className="">Solutions</p>
            <p className="">Partner with BigBabs</p>
            <p className="">FAQ's</p>
          </div>
        </div>
      </footer>
         
    </div>
    
  );
}
