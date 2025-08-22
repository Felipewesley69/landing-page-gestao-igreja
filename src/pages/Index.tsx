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
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Church className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">ChurchManager</span>
          </div>
          <Button variant="outline">Entrar em Contato</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            Mais de 500 membros cadastrados
          </Badge>
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Sistema de Gerenciamento de Membros
            <span className="block text-primary">para Igrejas Evangélicas</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Organize e centralize a gestão de seus membros com nosso sistema desenvolvido 
            especialmente para igrejas evangélicas.
          </p>
          <Button size="lg" className="text-lg px-8">
            Conhecer o Sistema
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
            Tudo que sua igreja precisa
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cadastro Completo</h3>
                <p className="text-sm text-muted-foreground">
                  Membros, igrejas, cargos, agrupamentos e departamentos
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Histórico Completo</h3>
                <p className="text-sm text-muted-foreground">
                  Consulte o histórico de congregação de cada membro
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Estatísticas</h3>
                <p className="text-sm text-muted-foreground">
                  Visualize dados por setores, cargos e funções
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Documentos</h3>
                <p className="text-sm text-muted-foreground">
                  Carteirinha, ficha completa e carta de mudança
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Aniversariantes</h3>
                <p className="text-sm text-muted-foreground">
                  Acompanhe aniversários do mês e do dia
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Relatórios</h3>
                <p className="text-sm text-muted-foreground">
                  Emita relatórios detalhados de igrejas e membros
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Backup Automático</h3>
                <p className="text-sm text-muted-foreground">
                  Backup diário automático para segurança dos dados
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Acesso Seguro</h3>
                <p className="text-sm text-muted-foreground">
                  Cada usuário acessa apenas sua igreja
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Membros Cadastrados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Segurança dos Dados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Pronto para modernizar a gestão da sua igreja?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nosso sistema pode 
            transformar a administração da sua congregação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Solicitar Demonstração
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
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
              <span className="font-semibold">ChurchManager</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 ChurchManager. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;