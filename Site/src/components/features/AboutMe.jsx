import ButtonMain from "../ui/ButtonMain";

function AboutMe(){

  return(<section id="about" className="flex flex-col md:flex-row gap-4 md:gap-4 lg:px-16 sm:px-8 px-4 w-full py-4 bg-bgSection items-center">
      <div className="w-full flex-2 max-w-lg">
        <img className="rounded-lg w-full object-cover" src="./src/assets/aboutMe.jpg" alt="" />      
    </div>
    <div className="flex flex-2 flex-col justify-center  gap-2">
      <h1 className="font-bold text-lg">About me:</h1>
      <p>My life has been connected with swimming since I was 8👶

      It was love at first sight. I couldn’t imagine my life without the feeling of weightlessness and those unique movements you experience in the water🌊

      Then came 10 years of professional swimming, three wins in the Belarusian Junior Swimming Competition, numerous medals in Belarusian and international championships🥇, and an end due to Covid

      But the water didn’t let me go, so I immediately started working as a swimming coach, mainly with kids🧸. In the meantime, I studied physical education👨‍🎓. Now, with 15 years of swimming in general, 3 years of coaching experience, and a university degree, I’m here again—to do what I truly love and to help you start your own journey in swimming⚡️⚡️⚡️</p>
    </div>
    
  </section>);
}

export default AboutMe