import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { useScrollAnimation } from '@/lib/hooks'

const plans = [
  {
    name: 'Старт',
    price: '200₽',
    duration: 'в час',
    features: [
      'Доступ к PC зоне',
      'Базовая периферия',
      'Прохладительные напитки'
    ]
  },
  {
    name: 'Про',
    price: '1000₽',
    duration: '5 часов',
    features: [
      'Доступ ко всем зонам',
      'Премиум периферия',
      'Напитки и снеки',
      'Приоритетное бронирование'
    ],
    popular: true
  },
  {
    name: 'Турнир',
    price: '5000₽',
    duration: 'пакет',
    features: [
      'Выделенная зона',
      'До 10 человек',
      'Организация турнира',
      'Кейтеринг',
      'Призовой фонд'
    ]
  }
]

export function PricingSection() {
  const { ref, animation } = useScrollAnimation()

  return (
    <section className='py-20 px-4'>
      <div className='container'>
        <h2 className='cyber-text text-3xl md:text-4xl text-center mb-12'>
          Тарифы
        </h2>
        
        <div 
          ref={ref}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              style={animation}
              transition={{ delay: index * 0.2 }}
            >
              <Card className={
                `relative ${plan.popular ? 'gamer-card' : 'border-2 border-gamer-cyber'} p-6`
              }>
                {plan.popular && (
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                    <span className='bg-gamer-purple text-white px-4 py-1 rounded-full text-sm'>
                      Популярный
                    </span>
                  </div>
                )}
                
                <h3 className='text-xl font-bold text-center mb-4'>
                  {plan.name}
                </h3>
                
                <div className='text-center mb-6'>
                  <span className='text-3xl font-bold text-gamer-cyber'>
                    {plan.price}
                  </span>
                  <span className='text-gray-400 ml-2'>
                    {plan.duration}
                  </span>
                </div>
                
                <ul className='space-y-4 mb-6'>
                  {plan.features.map(feature => (
                    <li key={feature} className='flex items-center gap-2'>
                      <Check className='text-gamer-neon' size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={plan.popular ? 'neon-button w-full' : 'w-full'}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Выбрать
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}