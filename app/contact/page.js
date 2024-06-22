import ContactCard from '@/components/ContactCard'
import ContactForm from '@/components/ContactForm'
import React from 'react'
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md"


const Contact = () => {
  return (
    <>
      <h1 className='flex justify-center items-center text-4xl font-bold mt-6' >Contact Us</h1>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-14 mx-auto w-[90%] p-8'>
        <ContactCard iconn={<MdEmail />} h2={"Email"} p1={"Monday to Friday Excepted"} p2={"response time: 72 hours"} lin={"Send Mail"} />
        <ContactCard iconn={<MdVoiceChat />} h2={"Live Chat"} p1={"Weekdays: 9AM to 6PM ET"} p2={"Weekends: 9AM to 3PM ET"} lin={"Chat Now"} />
        <ContactCard iconn={<MdForum />} h2={"Community Forum"} p1={"Monday to Friday Excepted"} p2={"response time: 72 hours"} lin={"Ask the Community"} />
      </div>
      <div>
        <h1 className='flex flex-col sm:flex-row sm:justify-center sm:items-center text-4xl font-bold my-8 text-center'>
          {"We'd love to hear"}&nbsp;<span className='text-blue-500'>from you</span>
        </h1>

        <ContactForm />
      </div>
      <div className='mt-5 w-full mb-10'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29768.55573706565!2d72.81092081217187!3d21.14963357923498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051d9bc6b9563%3A0xf0b8f0ee0459d502!2zQXZpcmJoYXYgU29jaWV0eS0yIC0g4KqF4Kq14Kq_4Kqw4KuN4Kqt4Kq-4Kq1IOCquOCri-CquOCqvuCqr-Cqn-CrgCAtIDI!5e0!3m2!1sen!2sin!4v1718332348688!5m2!1sen!2sin" width="100%" height={450} style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}

export default Contact
