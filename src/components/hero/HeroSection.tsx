import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { fadeIn, slideIn } from '@/lib/animations'

export function HeroSection() {
  return (
    <motion.section 
      initial='hidden'
      animate='visible'
      variants={fadeIn}
      className='relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4'
    >
      <div className='absolute inset-0 bg-[url(/gaming-bg.jpg)] bg-cover bg-center opacity-20' />
      
      <div className='container relative z-10 text-center'>
        <motion.h1 
          variants={slideIn}
          className='cyber-text text-4xl md:text-6xl mb-6 animate-cyber-glitch'
        >
          GAME ZONE
        </motion.h1>
        
        <motion.p 
          variants={slideIn}
          className='text-gamer-cyber text-xl md:text-2xl mb-8 max-w-2xl mx-auto'
        >
          Погрузись в мир игр на самом современном оборудовании
        </motion.p>
        
        <motion.div
          variants={slideIn} 
          className='flex flex-col sm:flex-row gap-4 justify-center'
        >
          <Button className='neon-button' size='lg'>
            Забронировать место
          </Button>
          <Button 
            variant='secondary'
            size='lg'
            className='bg-gamer-purple hover:bg-gamer-purple/80'
          >
            Наши тарифы
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}