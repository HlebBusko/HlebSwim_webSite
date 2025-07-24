function AboutMe() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row gap-4 md:gap-4 lg:px-16 sm:px-8 px-4 w-full py-4 bg-bgSection items-center"
    >
      <div className="w-full flex-2 max-w-lg">
        <img
          className="rounded-lg w-full object-cover"
          src="./src/assets/aboutMe.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-2 flex-col justify-center  gap-2">
        <h1 className="font-bold text-lg">About me:</h1>
        <div>
          <div>
            <strong>15 years</strong> of professional swimming,{' '}
            <strong>5 years</strong> of coaching people.
          </div>
          <br />
          <div>
            The main reason why people choose me is that I'm not only{' '}
            <strong>focusing</strong> on the technical aspects of swimming but
            also on a <strong>mental blocks, fears and insecurities</strong>.
          </div>
          <br />
          <div>
            We will overcome all the obstacles incrementally increasing the
            complexity of exercises relevant to your readiness.
          </div>
          <br />
          <div>
            <strong>Speak:</strong> PL, ENG, RU
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
