function Contact() {
  const socialLinks = [
    {
      title: 'instagram icon',
      img: './src/assets/instaSVG.svg',
      link: 'https://www.instagram.com/hleb_swim/',
    },
    {
      title: 'facebook icon',
      img: './src/assets/facebookSVG.svg',
      link: 'https://www.facebook.com/profile.php?id=61563499358999&sk=followers',
    },
  ];

  const contactLinks = [
    {
      title: 'phone icon',
      contact: '+48 796 746 210',
      img: './src/assets/phone.svg',
      tel: 'tel:+48796746210',
    },
    {
      title: 'envelope icon',
      contact: 'hleb.busko@gmail.com',
      img: './src/assets/envelope.svg',
      mailto: 'mailto:hleb.busko@gmail.com',
    },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col gap-4 lg:px-16 sm:px-8 px-4 w-full py-6 justify-center bg-bgSection"
    >
      <div className="flex flex-col md:flex-row w-full gap-4 ">
        <div className="md:w-1/2 w-full">
          <div className="text-lg mb-1">Reach me out</div>

          <div className="flex flex-col justify-start gap-2">
            {contactLinks.map((link) => (
              <a
                href={link.tel ? link.tel : link.mailto ? link.mailto : '#'}
                key={link.contact}
                className="flex items-center gap-2 font-bold cursor-pointer hover:text-main transition-all ease-in-out duration-400"
              >
                <img className="w-8 h-8" src={link.img} alt={link.title} />
                {link.contact}
              </a>
            ))}
          </div>

          <div className="mt-2 text-gray-500">
            If I'm not answering most likely I'm teaching others. Give me some
            time and I'm definetely call you back
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="text-lg">
            Find me on social media
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a key={link.img} target="_blank" href={link.link}>
                  <img
                    className="w-10 h-10 object-contain cursor-pointer hover:scale-105 transition-all ease-in-out duration-400"
                    src={link.img}
                    alt={link.title}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-lg mb-2 font-bold">Lessons take place here:</div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.349261542033!2d20.986380276701492!3d52.25520247199306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb88513ead31%3A0x4f4f78da4abbb746!2sO%C5%9Brodek%20Inflancka!5e0!3m2!1sen!2spl!4v1749890166238!5m2!1sen!2spl"
          className="w-full h-[400px] rounded-xl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <iframe title="Lesson Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4884.561098261746!2d20.989341438098155!3d52.25645032806695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb8a36933d49%3A0x217f77d253bc2ffa!2sWarszawa%20Gda%C5%84ska!5e0!3m2!1sen!2spl!4v1749283668518!5m2!1sen!2spl" className="w-full h-[400px] rounded-xl" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
    </section>
  );
}

export default Contact;
