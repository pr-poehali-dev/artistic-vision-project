import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const artworks = [
  {
    id: 1,
    title: "Magical Adventures",
    style: "Kawaii",
    image: "/img/face9379-e3f5-4f87-9574-d540cb8a1279.jpg",
    description: "Игровой персонаж в стиле каваи с яркими цветами"
  },
  {
    id: 2,
    title: "Cyber Dreams",
    style: "Cyberpunk",
    image: "/img/932642dc-c449-40c0-b31f-475b06c76151.jpg",
    description: "Футуристический городской пейзаж с неоновой подсветкой"
  },
  {
    id: 3,
    title: "Ancient Mysteries",
    style: "Fantasy",
    image: "/img/1f52bf0e-a743-415e-b3cc-3397bf5d17b1.jpg",
    description: "Мистический лес с древними руинами"
  },
  {
    id: 4,
    title: "Cute Friends",
    style: "Sanrio",
    image: "/img/f4b8f023-d782-4ed0-abec-84cd6174d342.jpg",
    description: "Милые персонажи в стиле Санрио с пастельными цветами"
  },
  {
    id: 5,
    title: "Dream World",
    style: "Sanrio",
    image: "/img/d7ec82f9-f867-4c8d-b127-76f3d9b15610.jpg",
    description: "Зайчики в облаках в стиле My Melody и Kuromi"
  }
];

const styles = ["Все", "Kawaii", "Sanrio", "Cyberpunk", "Fantasy", "Digital Art", "Concept Art"];

function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedStyle, setSelectedStyle] = useState('Все');

  const filteredArtworks = selectedStyle === 'Все' 
    ? artworks 
    : artworks.filter(artwork => artwork.style === selectedStyle);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-gaming-blue/10 to-gaming-orange/10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gaming-orange/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gaming-navy">
              GAMING PORTFOLIO
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setActiveSection('home')}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === 'home' 
                    ? 'bg-gaming-orange text-white' 
                    : 'text-gaming-navy hover:text-gaming-orange'
                }`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveSection('about')}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === 'about' 
                    ? 'bg-gaming-orange text-white' 
                    : 'text-gaming-navy hover:text-gaming-orange'
                }`}
              >
                Обо мне
              </button>
            </div>
            <div className="md:hidden">
              <Icon name="Menu" size={24} className="text-gaming-navy" />
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      {activeSection === 'home' && (
        <div className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-6 py-16">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold text-gaming-navy leading-tight">
                  Создаю арт в разных
                  <span className="block text-gaming-orange">стилях</span>
                </h1>
                <p className="text-xl text-gaming-navy/70 max-w-2xl mx-auto">
                  От каваи персонажей до киберпанк миров — воплощаю любые идеи в яркие визуальные истории
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-gaming-orange hover:bg-gaming-orange/90 text-white px-8 py-3 text-lg">
                  Посмотреть работы
                  <Icon name="ArrowDown" size={20} className="ml-2" />
                </Button>
                <Button variant="outline" className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white px-8 py-3 text-lg">
                  Связаться
                  <Icon name="Mail" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </section>

          {/* Style Filter */}
          <section className="container mx-auto px-6 py-8">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {styles.map((style) => (
                <Button
                  key={style}
                  variant={selectedStyle === style ? "default" : "outline"}
                  onClick={() => setSelectedStyle(style)}
                  className={`px-6 py-2 transition-all duration-300 ${
                    selectedStyle === style
                      ? 'bg-gaming-orange hover:bg-gaming-orange/90 text-white'
                      : 'border-gaming-blue/30 text-gaming-navy hover:bg-gaming-blue/10'
                  }`}
                >
                  {style}
                </Button>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <section className="container mx-auto px-6 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArtworks.map((artwork, index) => (
                <Card 
                  key={artwork.id} 
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gaming-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 left-4 bg-gaming-orange text-white">
                      {artwork.style}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gaming-navy mb-2">
                      {artwork.title}
                    </h3>
                    <p className="text-gaming-navy/70">
                      {artwork.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <div className="pt-20">
          <section className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gaming-navy mb-6">
                  Привет! Я художник
                </h2>
                <p className="text-xl text-gaming-navy/70">
                  Создаю уникальные арты в различных стилях уже более 5 лет
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gaming-navy">Мои специализации</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-gaming-orange rounded-full"></div>
                        <span className="text-gaming-navy">Kawaii и аниме стиль</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-gaming-blue rounded-full"></div>
                        <span className="text-gaming-navy">Cyberpunk и sci-fi</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-gaming-yellow rounded-full"></div>
                        <span className="text-gaming-navy">Fantasy и магические миры</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-gaming-teal rounded-full"></div>
                        <span className="text-gaming-navy">Концепт-арт для игр</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gaming-navy">Опыт работы</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-white/60 rounded-lg border-l-4 border-gaming-orange">
                        <h4 className="font-semibold text-gaming-navy">Freelance Artist</h4>
                        <p className="text-gaming-navy/70">2019 - настоящее время</p>
                        <p className="text-sm text-gaming-navy/60 mt-2">
                          Создание артов для игровых проектов и личных заказов
                        </p>
                      </div>
                      <div className="p-4 bg-white/60 rounded-lg border-l-4 border-gaming-blue">
                        <h4 className="font-semibold text-gaming-navy">Game Studio</h4>
                        <p className="text-gaming-navy/70">2020 - 2022</p>
                        <p className="text-sm text-gaming-navy/60 mt-2">
                          Концепт-художник в инди студии
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="p-6 bg-gradient-to-br from-gaming-orange/20 to-gaming-blue/20 border-0">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-gaming-orange to-gaming-yellow rounded-full mx-auto flex items-center justify-center">
                        <Icon name="Palette" size={32} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gaming-navy">Творческий подход</h3>
                      <p className="text-gaming-navy/70">
                        Каждая работа уникальна и создается с особым вниманием к деталям
                      </p>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-gaming-blue/20 to-gaming-teal/20 border-0">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-gaming-blue to-gaming-teal rounded-full mx-auto flex items-center justify-center">
                        <Icon name="Zap" size={32} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gaming-navy">Быстрая работа</h3>
                      <p className="text-gaming-navy/70">
                        Качественно и в срок — мой принцип работы с клиентами
                      </p>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="text-center mt-16">
                <Button className="bg-gaming-orange hover:bg-gaming-orange/90 text-white px-8 py-3 text-lg">
                  Обсудить проект
                  <Icon name="MessageCircle" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Index;