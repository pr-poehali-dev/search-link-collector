import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface SearchEngine {
  name: string;
  url: string;
  description: string;
  icon: string;
  gradient: string;
  category: string;
}

const searchEngines: SearchEngine[] = [
  {
    name: 'Brave Search',
    url: 'https://search.brave.com/',
    description: 'Приватный поиск без трекинга',
    icon: 'Shield',
    gradient: 'from-orange-500 to-red-500',
    category: 'Приватность'
  },
  {
    name: 'Google',
    url: 'https://www.google.com/',
    description: 'Самый популярный поисковик в мире',
    icon: 'Globe',
    gradient: 'from-blue-500 to-purple-500',
    category: 'Общие'
  },
  {
    name: 'DuckDuckGo',
    url: 'https://duckduckgo.com/',
    description: 'Поиск без слежки и персонализации',
    icon: 'Lock',
    gradient: 'from-green-500 to-teal-500',
    category: 'Приватность'
  },
  {
    name: 'Bing',
    url: 'https://www.bing.com/',
    description: 'Поисковик от Microsoft с ИИ',
    icon: 'Sparkles',
    gradient: 'from-cyan-500 to-blue-600',
    category: 'Общие'
  },
  {
    name: 'Yandex',
    url: 'https://yandex.ru/',
    description: 'Лучший поиск для рунета',
    icon: 'Languages',
    gradient: 'from-red-500 to-yellow-500',
    category: 'Локальные'
  },
  {
    name: 'Ecosia',
    url: 'https://www.ecosia.org/',
    description: 'Поиск, который сажает деревья',
    icon: 'TreePine',
    gradient: 'from-green-600 to-emerald-500',
    category: 'Эко'
  },
  {
    name: 'Perplexity',
    url: 'https://www.perplexity.ai/',
    description: 'ИИ-поиск с ответами',
    icon: 'Brain',
    gradient: 'from-purple-600 to-pink-500',
    category: 'ИИ'
  },
  {
    name: 'You.com',
    url: 'https://you.com/',
    description: 'Персонализированный ИИ-поиск',
    icon: 'User',
    gradient: 'from-indigo-500 to-purple-600',
    category: 'ИИ'
  },
  {
    name: 'Startpage',
    url: 'https://www.startpage.com/',
    description: 'Приватный поиск на базе Google',
    icon: 'Eye',
    gradient: 'from-blue-600 to-indigo-600',
    category: 'Приватность'
  },
  {
    name: 'Qwant',
    url: 'https://www.qwant.com/',
    description: 'Европейский приватный поиск',
    icon: 'ShieldCheck',
    gradient: 'from-blue-500 to-purple-500',
    category: 'Приватность'
  },
  {
    name: 'Yahoo',
    url: 'https://www.yahoo.com/',
    description: 'Классический поисковик и портал',
    icon: 'Newspaper',
    gradient: 'from-purple-600 to-violet-600',
    category: 'Общие'
  },
  {
    name: 'Kagi',
    url: 'https://kagi.com/',
    description: 'Премиум поиск без рекламы',
    icon: 'Crown',
    gradient: 'from-yellow-500 to-orange-500',
    category: 'Премиум'
  }
];

const categories = ['Все', 'Приватность', 'ИИ', 'Общие', 'Эко', 'Локальные', 'Премиум'];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredEngines = searchEngines.filter(engine => {
    const matchesSearch = engine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         engine.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || engine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/50 animate-float">
              <Icon name="Search" size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Поисковики
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Коллекция лучших поисковых систем для любых задач
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8 space-y-6">
          <div className="relative group animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Найти поисковик..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-card/80 backdrop-blur-sm border-2 border-muted hover:border-primary/50 focus:border-primary transition-all text-lg"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/50'
                    : 'hover:bg-muted'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredEngines.map((engine, index) => (
            <a
              key={engine.name}
              href={engine.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="relative h-full overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-muted hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${engine.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${engine.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <Icon name={engine.icon} size={28} className="text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-muted/50 backdrop-blur-sm">
                      {engine.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {engine.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {engine.description}
                  </p>

                  <div className="mt-4 flex items-center text-sm text-primary group-hover:translate-x-2 transition-transform duration-300">
                    <span className="font-medium">Перейти</span>
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {filteredEngines.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center">
              <Icon name="SearchX" size={40} className="text-muted-foreground" />
            </div>
            <p className="text-xl text-muted-foreground">
              Ничего не найдено. Попробуйте изменить запрос.
            </p>
          </div>
        )}

        <div className="mt-16 text-center text-sm text-muted-foreground animate-fade-in">
          <p>Всего поисковиков: {searchEngines.length}</p>
        </div>
      </div>
    </div>
  );
}
