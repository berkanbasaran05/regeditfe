import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion'


const Preloader = () => {
    const [text,count] = useTypewriter({
        words:["REGEDIT BILISIM"],
        loop:true,
        delaySpeed:2000,
        typeSpeed:150,
        
    })
    return (
        <div className="theme-loader text-center mx-auto mr-72">
            
            <div className='flex h-full flex-col md:flex-row'>
            <motion.img 
             initial={{
                opacity:0,
                y:-600,
               
                rotateX:180
            }}
            animate={{
                y:0,
                opacity:1,
                rotateX:[180,0],
                
            }}
            transition={{
                duration:2.5
            }}
            src='assets/img/rege2.png'></motion.img>
            
            <motion.span 
           initial={{
            opacity:0,
        
            
       
        }}
        animate={{
            y:0,
            opacity:1,
            
           
        }}
        transition={{
            duration:1.5
        }}
            className='  hidden md:flex  md:text-[72px]  font-latin font-bold bg-black mx-auto h-full top-12 w-full items-center justify-center'>{text}</motion.span>
            
            </div>
                
           
        </div>
    );
};

export default Preloader;