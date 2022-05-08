import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Home() {

  return (
    <>
      <div className='flex justify-center text-4xl pt-[85px] xl:pt-[100px] 2xl:text-6xl'>
          Contact
      </div>
      <div className='flex flex-col mx-8 my-6 text-xl sm:mx-24 lg:flex-row'>
        <div className="flex flex-col mx-auto lg:w-[700px]">
          <div className='my-5 flex lg:mx-0 flex-start'>
            <ArticleIcon className='mr-7 scale-100 cursor-pointer sm:ml-12' fontSize='large' />
            <p className='self-center cursor-pointer hover:underline'>
              <a href="https://drive.google.com/file/d/1GKAFIFHIdcJGFLEh0sQPjMzcWF4fFLxk/view" target='_blank' rel='noopener noreferrer'>Click here for my résumé</a>
            </p>
          </div>
          <div className='my-5 flex lg:mx-0'>
            <GitHubIcon className='mr-7 scale-100 sm:ml-12' fontSize='large' />
            <p className='self-center cursor-pointer hover:underline'>
              <a href="https://www.github.com" target='_blank' rel='noopener noreferrer'>My Github Profile</a>
            </p>
          </div>
          <div className='my-5 flex lg:mx-0'>
            <EmailIcon className='mr-7 scale-100 sm:ml-12' fontSize='large' />
            <p className='self-center'>Email : <span className='cursor-pointer hover:underline'>
              <a href="mailto:cjoshmarshall@gmail.com" rel='noopener noreferrer'>cjoshmarshall@gmail.com</a></span>
            </p>
          </div>
          <div className='my-5 flex lg:mx-0'>
            <PhoneIcon className='mr-7 scale-100 sm:ml-12' fontSize='large' />
            <p className='self-center'>Phone : <span className='cursor-pointer hover:underline'>
            <a href="tel:+919486684097" rel='noopener noreferrer'>+919486684097</a></span>
            </p>
          </div>
          <div className='my-5 flex lg:mx-0'>
            <WhatsAppIcon className='mr-7 scale-100 sm:ml-12' fontSize='large' />
            <p className='self-center'>Whatsapp : <span className='cursor-pointer hover:underline'>
            <a href="https://wa.me/+919486684097" target='_blank' rel='noopener noreferrer'>+919486684097</a></span>
            </p>
          </div>
        </div>
        <div className="mt-16 lg:my-auto lg:w-[350px] text-center">
          Aside from full stack development, I am quite an enthusiast of sounds and music,
          having worked on a few short films on sound recording during college.
        </div>
      </div>
        <div className='block my-16 text-center'>
          <p>@2022 Josh Marshall</p>
        </div>
    </>
  )
}

export default Home;
