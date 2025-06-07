import { useEffect, useState } from "react";
import ButtonMain from "../ui/ButtonMain";

function Enroll(){

  const [typeOFLesson, setTypeOFLesson] = useState(null);
  const [selectInput, setSelectInput] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    birth: '',
    goal: '',
    number: ''
  });

  const [splitLessonData, setSplitLessonData] = useState({
    name2: '',
    birth2: ''
  })
  const [splitErrors, setSplitErrors] = useState({});
  useEffect(() => {
    console.log(formData);
    console.log(splitLessonData);
  }, [formData, splitLessonData])

  function handleInput(value){
    setTypeOFLesson(value === 'true');
  }

  function handleSubmit(e){
    e.preventDefault();

    const newErrors = {};

    if(!formData.name) newErrors.name = true;
    if(!formData.birth) newErrors.birth = true;
    if(!formData.goal) newErrors.goal = true;
    if(!formData.number) newErrors.number = true;

    setErrors(newErrors);

    setFormData({name: '',
      birth: '',
      goal: '',
      number: ''}
    );

    const newSplitErrors ={};

    if(!splitLessonData.name2) newSplitErrors.name2 = true;
    if(!splitLessonData.birth2) newSplitErrors.birth2 = true;

    setSplitErrors(newSplitErrors);

    if(typeOFLesson === null){
      setSelectInput(true);
    }
  }

  function handleChange(e){
    const {id, value} = e.target;

    setFormData((prevData) => ({
      ...prevData, 
      [id]:value
    }))
  }

  function handleSplitChange(e){
    const {id, value} = e.target;

    setSplitLessonData((prevData) => ({
      ...prevData,
      [id]: value

    }))
  }

  const fields = [
    {name:'Offer', id:'offer', type: 'select', options: [{lesson: 'Individual lesson', split: false}, {lesson: 'Split lesson', split: true}], placeholder: 'Choose the option'}, 
    {name: 'First Name', id: 'name', type: 'text', placeholder: typeOFLesson ? `First person's first name` : `Type your First name`}, 
    {name: 'Date of birth', id:'birth', type:'date', placeholder: typeOFLesson ? `First person's date of birth` : 'Type your date of birth'},
    {name: 'Goal', id: 'goal', type: 'text', placeholder: 'Describe your goal'},
    {name: 'Number', id:'number', type: 'tel', placeholder: 'Add your phone number'}
    ]

    const splitOption = [ 
      {name: 'First Name', id: 'name2', type: 'text', placeholder: `Second person's first name`}, 
      {name: 'Date of birth', id:'birth2', type:'date', placeholder: `Second person's date of birth`}
    ]

    const steps = ['1.Choose the lesson you want to take', '2.Fill all the fields', '3.Wait for my call where i explain you all the details']

  return(<form className="lg:px-16 sm:px-8 px-4 w-full py-8">
    <div className="border-2 border-main shadow px-6 py-4 rounded-lg">
      <div>
        <div className="text-lg mb-1">How to easy enroll on classes:</div>
        <ul className="pb-4">
            {steps.map((step, index) => <li key={index}>{step}</li>)}
        </ul>
      </div>

      <div className="flex flex-col">
      {fields.map((field, index1) => 
      <div key={field.id} className="flex flex-col">

        <label htmlFor={field.id} className="text-lg">
            {field.name}
          </label>

        {field.type === 'select' ? (
          <div className="w-full mb-2">
          <select className={`${selectInput ? 'bg-red-100' : ''} ${`${typeOFLesson !== null ? 'bg-white' : ''}`}  px-4 py-2 border rounded-lg w-full`} id={field.id} onChange={(event) => handleInput(event.target.value)} name={field.id} defaultValue=''>
            <option className="text-gray-500" value='' disabled hidden>{field.placeholder}</option>
            {field.options.map((option, i) => <option className="px-4 py-2 border rounded-lg" value={String(option.split)} key={i}>{option.lesson}</option>)}
          </select>
          <div className={`${selectInput ? 'text-red-500': 'hidden'} ${typeOFLesson !== null ? 'hidden' : ''}`}>Select the type of lesson</div>
          </div>
        ): <div className="w-full">
              <input value={formData[field.id]} className={`${errors[field.id] ? 'bg-red-100 border-red-200 border-1' : 'bg-white'} ${formData[field.id] ? 'bg-white' : ''} px-4 py-2 border rounded-lg mb-1 w-full`} id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} onChange={(e) => handleChange(e)}></input>

            <p className={`${errors[field.id] ? 'text-red-500' : 'hidden'} ${formData[field.id] ? 'hidden' : ''}`}>{field.name} is required</p>
          </div>
         
        }    
          
        {field.id === 'birth' && typeOFLesson ? splitOption.map((field) => (
        <div key={field.id} className="flex flex-col mb-2">
          <label htmlFor={field.id} className="text-lg">
            {field.name}
          </label>
          <input value={setSplitLessonData[field.id]} className={`${splitErrors[field.id] ? 'bg-red-100' : 'bg-white'} px-4 py-2 border rounded-lg ${splitLessonData[field.id] ? 'bg-white' : ''}`}  id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} onChange={(e) => handleSplitChange(e)}></input>
          <p className={`${splitErrors[field.id] ? 'text-red-500' : 'hidden'} ${splitLessonData[field.id] ? 'hidden' : ''}`}>{field.name} is required</p>
          </div>
          
      )) : ''}
      </div>
      )}
      <ButtonMain type="submit" className="bg-main text-white hover:bg-white border-main hover:text-main shadow-lg mt-6 py-2" onClick={(e) => handleSubmit(e)}>Submit</ButtonMain>
        </div>
  </div>
  </form>);
}

export default Enroll