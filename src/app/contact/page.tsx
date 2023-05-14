import ContactForm from '@/components/ContactForm';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const LINKS = [
  { icon: <AiFillGithub />, url: '' },
  { icon: <AiFillLinkedin />, url: '' },
  { icon: <AiFillYoutube />, url: '' },
];

export default function ContactPage() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
      <p>info@dream-coding.com</p>
      <ul className='flex gap-4 my-2'>
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target='_blank' // 새 창(새 탭) 표시. 클릭 시 새 탭을 띄워서 해당 페이지로 이동
            rel='noreferrer' // href 속성으로 설정한 페이지가 어떤 관계인지를 선언
            className='text-5xl hover:text-yellow-400'
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className='text-3xl font-bold my-8'>Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
