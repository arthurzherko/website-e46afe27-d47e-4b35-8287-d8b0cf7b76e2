import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useScrollAnimation } from '@/lib/hooks'

const setups = [
  {
    title: 'PS5 Зона',
    description: 'Игровые приставки PlayStation 5 с 4K телевизорами',
    specs: ['4K HDR', 'DualSense', '55" TV'],
    image: '/ps5-setup.jpg'
  },
  {
    title: 'PC Зона',
    description: 'Мощные игровые компьютеры с RGB подсветкой',
    specs: ['RTX 4080', '360Hz', 'Механика'],
    image: '/pc-setup.jpg'
  },
  {
    title: 'VR Зона',
    description: 'Погружение в виртуальную реальность',
    specs: ['Meta Quest 3', 'Полный трекинг', 'Большая зона'],
    image: '/vr-setup.jpg'
  }
]

export function GamingSetups() {
  const { ref, animation } = useScrollAnimation()

  return (
    <section className='py-20 px-4 bg-gamer-dark'>
      <div className='container'>
        <h2 className='cyber-text text-3xl md:text-4xl text-center mb-12'>
          Наше оборудование
        </h2>
        
        <div 
          ref={ref}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {setups.map((setup, index) => (
            <motion.div
              key={setup.title}
              style={animation}
              transition={{ delay: index * 0.2 }}
            >
              <Card className='gamer-card overflow-hidden group'>
                <div className='relative h-48 overflow-hidden'>
                  <img 
                    src={setup.image}
                    alt={setup.title}
                    className='w-full h-full object-cover transition-transform group-hover:scale-110'
                  />
                </div>
                
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gamer-cyber mb-2'>
                    {setup.title}
                  </h3>
                  <p className='text-gray-300 mb-4'>
                    {setup.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {setup.specs.map(spec => (
                      <Badge 
                        key={spec}
                        className='bg-gamer-purple/20 text-gamer-purple border border-gamer-purple'
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}