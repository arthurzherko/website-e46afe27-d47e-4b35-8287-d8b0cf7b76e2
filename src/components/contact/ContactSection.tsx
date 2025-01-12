import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

type FormData = {
  name: string
  email: string
  message: string
}

export function ContactSection() {
  const { register, handleSubmit, reset } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    toast.success('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.')
    reset()
  }

  return (
    <section className='py-20 px-4 bg-gamer-dark'>
      <div className='container max-w-4xl'>
        <h2 className='cyber-text text-3xl md:text-4xl text-center mb-12'>
          Связаться с нами
        </h2>
        
        <Card className='gamer-card'>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div>
              <Input
                {...register('name')}
                placeholder='Ваше имя'
                className='bg-transparent border-gamer-cyber focus:border-gamer-neon transition-colors'
              />
            </div>
            
            <div>
              <Input
                {...register('email')}
                type='email'
                placeholder='Email'
                className='bg-transparent border-gamer-cyber focus:border-gamer-neon transition-colors'
              />
            </div>
            
            <div>
              <Textarea
                {...register('message')}
                placeholder='Ваше сообщение'
                className='bg-transparent border-gamer-cyber focus:border-gamer-neon transition-colors min-h-[150px]'
              />
            </div>
            
            <Button type='submit' className='neon-button w-full'>
              Отправить
            </Button>
          </form>
        </Card>
        
        <div className='mt-12 text-center'>
          <p className='text-xl mb-4'>Или приходите к нам:</p>
          <p className='text-gamer-cyber'>ул. Геймерская, 42</p>
          <p className='text-gamer-cyber'>Ежедневно с 10:00 до 23:00</p>
          <p className='text-gamer-cyber'>+7 (999) 123-45-67</p>
        </div>
      </div>
    </section>
  )
}