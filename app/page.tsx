"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PeopleList from './components/PeopleList';

const Home = () => {
  const router = useRouter()
  return (
    <div>
       <section className="mb-">
        <div className='flex flex-col items-center gap-8 p-4'>
           <div className="flex justify-center items-center h-1/2">
              <div className="flex items-center">
                 <div className="flex items-center">
            <Image
              src="/ecomlogo.png"
              width={400}
              height={400}
              alt="Picture of the author"
                />
              <div className="border-l border-gray-500 h-60 w-4 mx-6"></div>
                </div>
          <div className='flex flex-col justify-center gap-4'>
                  <h1 className='text-6xl text-red-600'>MEETUP</h1>
                <div className='flex flex-col justify-center font-sans'>
                  <p >
                    Date: 8th August 2024
                  </p>
                  <p >
                    Time: 8.00 am - 4.00 pm
                  </p>
                  <p>
                    Venue: Sweet & Pilipili, Broadwalk Mall,Westlands - Nairobi.
                  </p>
                 </div>
          </div>
            
             </div>
             
         </div>
         <div className='flex justify-center'>
              <p className='text-2xl text-black font-semibold font-sans'>Theme: Transforming retail & e-commerce through omnichannel excellence</p>
          </div>
         <div className='flex p-4 justify-center space-x-64'>
         <p className='text-xl text-red-600 font-bold'>NETWORK</p>
         <p className='text-xl text-red-600 font-bold' >COLABORATE</p>
         <p className='text-xl text-red-600 font-bold'>LEARN</p>
         </div>
         <div>
                    <button
                className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                onClick={() => router.push('/pre-register')}
              >
                PRE-REGISTER
                  </button>
            </div>
    </div>
    <section >
      <h1 className='text-2xl text-black bottom-3 font-bold my-4 ml-8'>INTRODUCTION</h1>
      <div className='flex justify-center items-center ml-8'>
      <div>
        <p className='mb-4 mr-32 font-sans'>The digital era has revolutionized business landscapes, providing businesses with unprecedented opportunities through the integration of E-commerce strategies. This transformation encompasses various facets of e-commerce, including online platforms, electronic payments, and digital marketing, collectively serving as a game-changer for businesses of all sizes</p>
        <p className='mb-4 mr-32  font-sans'>The <b>E-commerce Africa Summit Meetup</b> is the ultimate gathering for e-commerce professionals, entrepreneurs, and enthusiasts set to inspire, educate, and foster connections. With a focus on cutting-edge trends, innovative strategies, and actionable insights, the event will offer a platform to gain valuable knowledge and forge meaningful relationships through participating in discussions led by industry experts and workshops covering the latest tools and techniques</p>
        <p className='mb-4 mr-32  font-sans'>Whether you're looking to stay ahead of industry shifts, explore new opportunities, or simply connect with like-minded individuals, the event promises an immersive experience tailored to the needs of today's e-commerce ecosystem. Don't miss your chance to be part of this transformative event and chart the course for success in e-commerce</p>
      </div>
      <div className='flex justify-center'>
      <div>
      <p className='text-9xl mb-96 text-red-600'>&ldquo;</p>
    </div>
        <div>
        <h2 className='text-red-600 text-5xl ml-8 mt-24'>Stay ahead of industry shifts, Explore new opportunities, Connect with like-minded people</h2>
        </div>
      </div>
      </div>
    </section>
        </section>
      <main className="p-8 items-center">
       
        <section className="mb-8">
          <div className='flex justify-start'>
            <h1 className='text-2xl text-black bottom-3 font-bold'>WHY ATTEND?</h1>
          </div>
        <div className='flex flex-col gap-4 p-16'>
  <div className='flex items-center justify-center w-full'>
    <Image src={"/handshake.jpg"} width={300} height={300} alt='together img'/>
    <div className='mx-24 mb-2'>
      <h1 className='text-2xl font-semibold mb-4'>Expert Insights</h1>
      <p>Gain access to valuable insights, strategies, and best practices shared by industry experts and thought leaders at the forefront of e-commerce innovation </p>
    </div> 
    <Image src={"/meeting.jpg"} width={300} height={300} alt='together img'/>
  </div>
  <div className='flex items-center justify-center w-full'>
  <div className='mx-24 items-start'>
  <h1 className='text-2xl font-semibold mb-4'>Networking</h1>
    <span className=''>So as to facilitate connections among industry professionals, including e-commerce business owners, marketers, suppliers, and tech providers.</span></div>
     <Image src={"/boardstuff.jpg"} width={300} height={300} alt='together img'/>
     <div className='mx-24 items-start'>
  <h1 className='text-2xl font-semibold mb-4'>Practical Workshops</h1>
  <p>Participate in hands-on workshops and training sessions designed to enhance your skills and knowledge in areas such as digital marketing, customer experience optimization, and data analytics</p></div>
  </div>
  <div className='flex items-center justify-center w-full'>
   <Image src={"/together.jpg"} width={300} height={300} alt='together img'/>
   <div className='mx-24 items-start'>
  <h1 className='text-2xl font-semibold mb-4'>Access to Solution Providers</h1>
  <p>Explore a curated selection of exhibitors & solution providers offering innovative products, services, & solutions tailored to the needs of e-commerce businesses.</p></div>
    <Image src={"/booth.jpg"} width={300} height={300} alt='together img'/>
  </div>
  <div className='flex items-center justify-center w-full'>
  <div className='mx-24'>
      <h1 className='text-2xl font-semibold mb-4'>Industry Collaboration</h1>
      <p>Industry Collaboration-so as to encourage partnerships and collaborations between different stakeholders in the e-commerce ecosystem</p></div>
     <Image src={"/boardstuff.jpg"} width={700} height={700} alt='together img'/>
     <div className='mx-24'>
      <h1 className='text-2xl font-semibold mb-4'>Expert Insights</h1><p>Offer workshops and training sessions to help attendees improve their skills in areas like digital marketing, SEO, user experience design, and data analytics.</p></div>
  </div>
</div>
        </section>
        <section className="mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Speakers</h2>
              <PeopleList/>
          </div>
        </section>
        <section className="mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Powered By</h2>
            <Image src="/zippylogo2.png"width={300} height={300} alt="Powered By Zippy" className=" mx-auto" />
          </div>
        </section>
        
      </main>
      <footer className='bg-white'>
      <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='relative text-white py-16 bg-transparent'>
      <div className='relative container mx-auto flex flex-col items-center'>
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='mb-2'>
          <Image src="/ecomlogo.png" width={100} height={100} alt="Logo" className='rounded-lg ' />
        </motion.div>
        <div className='w-full flex justify-between px-8'>
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className='flex flex-col items-start text-sm'>
              <h2 className='text-xl font-semibold mb-2 text-black'>To exhibit or partner</h2>
            <h3 className='text-black'>Brooke Wangari</h3>
            <p className='mb-1 text-black'>Head of partnership</p>
            <p className='text-black'>brooke.wangari@zippy.co.ke</p>
          </motion.div>
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className='flex flex-col items-start text-sm'>
              <h2 className='text-xl font-semibold mb-2 text-black'>For delegate/attendee queries</h2>
            <h3 className=' text-black'>Vivian Wairimu</h3>
            <p className='mb-1 text-black'>Head of delegate sales</p>
            <p className='text-black font-sans'>vivian.wairimu@zippy.co.ke</p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
        </footer>
    </div>
  );
};

export default Home;
