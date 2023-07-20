import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { motion } from 'framer-motion';

import Line from '../components/Line';
import { useAppSelector } from '../hooks/useTypedHooks';
import { GoChevronRight, GoChevronUp } from 'react-icons/go';
import useMediaQuery from '../hooks/useMediaQuery';

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const [value, setValue] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const isDark = useAppSelector((state) => state.portfolio.isDark);
  const isLarge = useMediaQuery('(min-width: 1040px)');
  const isMedium = useMediaQuery('(min-width: 768px)');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
    setTimeout(
      () => setValue({ name: '', email: '', message: '', company: '' }),
      500
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className={`${isLarge ? 'py-64' : 'py-32'}  ${
        isDark ? 'bg-dark-contact' : 'bg-light-contact'
      } bg-cover bg-no-repeat `}
    >
      <article className="flex flex-col justify-center items-center p-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className=" text-6xl italic font-aileron font-semibold text-white">
            Contact
            <Line
              custom={`w-full h-1 ${
                isDark ? 'bg-gradient-rainblue' : 'bg-gradient-mirage'
              } mb-20 mt-4`}
            />
          </h1>
        </motion.div>
        <div
          className={`flex ${
            isLarge ? '' : 'flex-col'
          } justify-between items-center lg:gap-x-[200px]`}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="widescreen:text-5xl text-4xl text-center lg:text-start font-semibold text-metallic ">
              Looking{' '}
              <span
                className={`${isDark ? 'text-dark-accent' : 'text-navy-blue'}`}
              >
                forward
              </span>{' '}
              to hearing from{' '}
              <span
                className={`${isDark ? 'text-blue-accent' : 'text-[#2E8B57]'}`}
              >
                you!
              </span>
            </p>
          </motion.div>

          <motion.form
            action="https://formspree.io/f/xnqknpnq"
            method="POST"
            className="py-20"
            onSubmit={(e) => handleSubmit(e)}
            target="_blank"
            id="resetForm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex flex-col justify-center items-center text-center">
              <div className="text-navy-blue font-playfair font-semibold newScreen:text-xl text-3xl focus:outline-none">
                <input
                  type="text"
                  className="md:w-[700px] newScreen:w-[600px] w-[400px] newScreen:h-[44px] md:h-[100px] p-2 bg-light-beige rounded-sm placeholder:text-navy-blue newScreen:placeholder:text-xl md:placeholder:text-3xl placeholder:text-xl"
                  placeholder="Enter your name..."
                  {...register('name', {
                    required: true,
                    maxLength: 15,
                    minLength: 2,
                  })}
                  value={value.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="flex flex-col items-center justify-center">
                    <GoChevronUp size={30} className="text-red-900 mt-1" />
                    <p className="text-red-900 text-lg md:text-xl font-playfair mt-1">
                      {errors.name.type === 'required' &&
                        'This field is required.'}
                      {errors.name.type === 'maxLength' &&
                        'Max 15 characters allowed.'}
                      {errors.name.type === 'minLength' &&
                        'Name must be at least 2 characters long.'}
                    </p>
                  </div>
                )}
                <input
                  type="email"
                  className="md:w-[700px] newScreen:w-[600px] w-[400px] newScreen:h-[44px] md:h-[100px] p-2 bg-light-beige rounded-sm  mt-10 placeholder:text-navy-blue newScreen:placeholder:text-xl md:placeholder:text-3xl placeholder:text-xl"
                  placeholder="Enter your email..."
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  value={value.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="flex justify-center flex-col items-center">
                    <GoChevronUp size={30} className="text-red-900 mt-1" />
                    <p className="text-red-900 font-playfair text-lg md:text-xl">
                      {errors.email.type === 'required' && 'Email required.'}
                      {errors.email.type === 'pattern' && 'Invalid email.'}
                    </p>
                  </div>
                )}
                <input
                  type="text"
                  className="md:w-[700px] newScreen:w-[600px] w-[400px] newScreen:h-[44px] md:h-[100px] my-10 p-2 bg-light-beige rounded-sm placeholder:text-navy-blue newScreen:placeholder:text-xl md:placeholder:text-3xl placeholder:text-xl"
                  placeholder="Enter your company name... (optional)"
                  {...register('company', {
                    required: false,
                    minLength: 2,
                    maxLength: 15,
                  })}
                  value={value.company}
                  onChange={handleChange}
                />
                {errors.company && (
                  <div className="flex justify-center flex-col items-center">
                    <GoChevronUp size={30} className="text-red-900 mt-1" />
                    <p className="text-red-900 font-playfair text-lg md:text-xl">
                      {errors.company.type === 'maxLength' &&
                        'You have exceeded the maximum length of 15 characters.'}
                      {errors.company.type === 'minLength' &&
                        'Company name must be at least 2 characters long.'}
                    </p>
                  </div>
                )}
                <textarea
                  rows={5}
                  cols={isMedium ? 35 : 20}
                  className="resize-none bg-light-beige rounded-sm text-navy-blue placeholder:text-navy-blue p-4 text-3xl font-playfair font-semibold focus:outline-none md:placeholder:text-3xl placeholder:text-2xl"
                  placeholder="Your message here..."
                  {...register('message', {
                    required: true,
                    maxLength: 300,
                    minLength: 10,
                  })}
                  value={value.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <div className="flex justify-center flex-col items-center">
                    <GoChevronUp size={30} className="text-red-900 mt-1" />
                    <p className="text-red-900 font-playfair text-lg md:text-xl">
                      {errors.message.type === 'required' &&
                        'This field is required.'}
                      {errors.message.type === 'maxLength' &&
                        'You have exceeded the maximum length of 300 characters.'}
                      {errors.message.type === 'minLength' &&
                        'Message must be at least 10 characters long.'}
                    </p>
                  </div>
                )}
              </div>

              <button
                className="bg-gradient-mirage text-[#FFFFF0] rounded-md newScreen:py-4 md:px-14 py-6 px-16 font-extrabold
               hover:text-navy-blue transition duration-500 flex group md:text-2xl text-xl mt-10"
                type="submit"
              >
                Submit{' '}
                <span className="group-hover:rotate-90 duration-300 ml-1">
                  <GoChevronRight size={30} />
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </article>
    </section>
  );
};
export default Contact;
