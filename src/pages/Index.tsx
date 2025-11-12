import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedRank, setSelectedRank] = useState<string | null>(null);

  const ranks = [
    {
      id: 'titan',
      name: 'ТИТАН',
      price: '123₽',
      color: 'bg-primary',
      features: ['Цветной ник', 'Кит /kit titan раз в день', '+5 регионов', 'Приватные сообщения']
    },
    {
      id: 'legend',
      name: 'ЛЕГЕНДА',
      price: '246₽',
      color: 'bg-accent',
      features: ['Светящийся ник', 'Кит /kit legend 2 раза в день', '+15 регионов', 'Телепорт к игрокам', 'Полет в лобби']
    },
    {
      id: 'user',
      name: 'ЮЗЕР',
      price: '500₽',
      color: 'bg-secondary',
      features: ['Эпичный ник', 'Кит /kit user 3 раза в день', '+25 регионов', 'Быстрый телепорт', 'Полет в мирах']
    },
    {
      id: 'master',
      name: 'МАСТЕР',
      price: '1000₽',
      color: 'bg-primary',
      features: ['Анимированный ник', 'Кит /kit master 4 раза в день', '+50 регионов', 'Телепорт куда угодно', 'Полет везде', 'Приоритет в очереди']
    },
    {
      id: 'emperor',
      name: 'ИМПЕРАТОР',
      price: '1500₽',
      color: 'bg-accent',
      features: ['Легендарный ник', 'Кит /kit emperor 5 раз в день', 'Безлимит регионов', 'Мгновенный телепорт', 'Полет без ограничений', 'VIP приоритет', 'Особые команды']
    }
  ];

  const news = [
    { id: 1, title: 'Обновление 2.5: Новые биомы', date: '10 ноября 2025', icon: 'Mountain' },
    { id: 2, title: 'Ивент: Битва гильдий', date: '5 ноября 2025', icon: 'Swords' },
    { id: 3, title: 'Новые кейсы и награды', date: '1 ноября 2025', icon: 'Gift' }
  ];

  const rules = [
    { title: 'Читерство и использование модов', content: 'Запрещено использование любых читов, модов дающих преимущество (X-Ray, Fly, Speed и т.д.). Наказание: Permanent Ban.' },
    { title: 'Уважение к игрокам', content: 'Запрещены оскорбления, мат в чате, спам, флуд, реклама других серверов. Наказание: Мут от 1 часа до 7 дней.' },
    { title: 'Гриферство', content: 'Запрещено разрушение чужих построек, кража из незащищенных сундуков запрещена. Используйте /region для защиты. Наказание: Бан от 3 до 30 дней.' },
    { title: 'Багоюз', content: 'Запрещено использование багов для получения преимуществ. Обнаружили баг? Сообщите администрации. Наказание: Бан от 7 дней до Permanent.' }
  ];

  return (
    <div className="min-h-screen">
      <header className="border-b-4 border-primary bg-card shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <Icon name="Box" className="text-primary-foreground" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-primary">QUICK MINE</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#shop" className="text-foreground hover:text-primary transition-colors font-medium">Магазин</a>
              <a href="#news" className="text-foreground hover:text-primary transition-colors font-medium">Новости</a>
              <a href="#rules" className="text-foreground hover:text-primary transition-colors font-medium">Правила</a>
            </nav>
            <Button className="gap-2">
              <Icon name="Play" size={16} />
              Играть
            </Button>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://cdn.poehali.dev/projects/7a4150d9-b970-4bc3-8164-573c013fdbcc/files/cedaa591-1f54-4e5b-b8b1-cd95430c4616.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-6xl font-bold mb-4 text-primary drop-shadow-lg">QUICK MINE</h2>
          <p className="text-2xl mb-8 text-foreground max-w-2xl">Лучший Minecraft сервер для выживания и PvP</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button size="lg" className="gap-2 text-lg px-8">
              <Icon name="Gamepad2" size={20} />
              Войти на сервер
            </Button>
            <Button size="lg" variant="secondary" className="gap-2 text-lg px-8">
              <Icon name="Users" size={20} />
              Discord
            </Button>
          </div>
          <div className="mt-12 flex gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">1284</div>
              <div className="text-sm text-muted-foreground">Игроков онлайн</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Без лагов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Донат привилегии</h2>
            <p className="text-muted-foreground">Поддержи сервер и получи крутые возможности</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ranks.map((rank) => (
              <Card 
                key={rank.id} 
                className={`relative overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 ${
                  selectedRank === rank.id ? 'ring-4 ring-primary' : ''
                }`}
              >
                <div className={`h-2 ${rank.color}`}></div>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center justify-between">
                    {rank.name}
                    <Badge className={rank.color}>{rank.price}</Badge>
                  </CardTitle>
                  <CardDescription>Привилегия навсегда</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {rank.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    onClick={() => setSelectedRank(rank.id)}
                  >
                    Купить {rank.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Новости сервера</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {news.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded">
                      <Icon name={item.icon as any} className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription>{item.date}</CardDescription>
                    </div>
                    <Icon name="ChevronRight" className="text-muted-foreground" size={20} />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Правила сервера</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-4 border-primary shadow-xl">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center gap-3">
                  <Icon name="BookOpen" className="text-primary" size={32} />
                  <CardTitle className="text-2xl">Свод правил Quick Mine</CardTitle>
                </div>
                <CardDescription>Незнание правил не освобождает от ответственности</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {rules.map((rule, index) => (
                    <AccordionItem key={index} value={`rule-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {index + 1}. {rule.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {rule.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t-4 border-primary py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3 text-primary">Quick Mine</h3>
              <p className="text-sm text-muted-foreground">Лучший Minecraft сервер 2025</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-primary">Контакты</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Mail" size={14} />
                  support@quickmine.ru
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="MessageCircle" size={14} />
                  Discord: QuickMine
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-primary">IP адрес</h3>
              <code className="bg-primary/10 px-3 py-2 rounded text-primary block">play.quickmine.ru</code>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2025 Quick Mine. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;