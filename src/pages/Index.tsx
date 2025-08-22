import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Church, 
  BookOpen, 
  BarChart3, 
  CreditCard, 
  Calendar,
  FileText,
  Shield,
  CheckCircle,
  Star
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-primary to-primary/80 rounded-xl shadow-lg">
              <Church className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Gestão Igreja</span>
          </div>
          <Button variant="outline" className="rounded-full px-6 py-2 hover:bg-primary hover:text-white transition-all duration-300">
            Entrar em Contato
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center bg-card/80 backdrop-blur-sm border border-primary/20 text-primary px-6 py-3 rounded-full text-sm font-medium mb-12 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse">
            <Users className="w-5 h-5 mr-2" />
            1.500+ Membros Cadastrados
            <div className="ml-3 w-2 h-2 bg-primary rounded-full animate-ping"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="text-foreground">Gestão</span><br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Inteligente
            </span><br />
            <span className="text-foreground">para Igrejas</span>
          </h1>
          
          <p className="text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Revolucione a administração da sua congregação com tecnologia de ponta. 
            <span className="text-primary font-medium">Simples, seguro e eficiente.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105">
              <Star className="mr-3 w-6 h-6" />
              Explorar Sistema
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-12 py-8 rounded-full backdrop-blur-sm bg-card/50 border-2 border-primary/30 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
              Ver Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Recursos Completos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo que sua igreja precisa em uma plataforma moderna e intuitiva
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">Cadastro Completo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Membros, igrejas, cargos, agrupamentos e departamentos organizados
                </p>
              </CardContent>
            </Card>

            <Card className="group border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">Histórico Completo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Consulte o histórico de congregação detalhado de cada membro
                </p>
              </CardContent>
            </Card>

            <Card className="group border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">Estatísticas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Visualize dados por setores, cargos e funções em tempo real
                </p>
              </CardContent>
            </Card>

            <Card className="group border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">Documentos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Carteirinha, ficha completa e carta de mudança digitais
                </p>
              </CardContent>
            </Card>

            <Card className="group border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">Aniversariantes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Acompanhe aniversários do mês e do dia com notificações
                </p>
              </CardContent>
            </Card>

            <Card className="group border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">Relatórios</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Emita relatórios detalhados de igrejas e membros automaticamente
                </p>
              </CardContent>
            </Card>

            <Card className="group border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">Backup Automático</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Backup diário automático para máxima segurança dos dados
                </p>
              </CardContent>
            </Card>

            <Card className="group border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">Acesso Seguro</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada usuário acessa apenas sua igreja com total segurança
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="text-7xl font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-primary to-primary/80 bg-clip-text text-transparent">1.500+</div>
              <div className="text-xl text-muted-foreground font-medium">Membros Cadastrados</div>
            </div>
            <div className="text-center group">
              <div className="text-7xl font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-primary to-primary/80 bg-clip-text text-transparent">100%</div>
              <div className="text-xl text-muted-foreground font-medium">Segurança dos Dados</div>
            </div>
            <div className="text-center group">
              <div className="text-7xl font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-primary to-primary/80 bg-clip-text text-transparent">100%</div>
              <div className="text-xl text-muted-foreground font-medium">Curso de Uso Completo</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
            Pronto para Revolucionar<br />a Gestão da sua Igreja?
          </h2>
          <p className="text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Entre em contato conosco e descubra como nossa tecnologia pode 
            <span className="text-primary font-medium"> transformar completamente </span>
            a administração da sua congregação.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105">
              <CheckCircle className="mr-3 w-6 h-6" />
              Solicitar Demonstração
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-12 py-8 rounded-full backdrop-blur-sm bg-card/50 border-2 border-primary/30 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Church className="w-6 h-6 text-primary" />
              <span className="font-semibold">Gestão Igreja</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 Gestão Igreja. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;