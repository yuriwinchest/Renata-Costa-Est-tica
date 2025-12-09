# 📦 Guia para Subir no GitHub

## Passo 1: Inicializar Git

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "🎨 Initial commit - Site Renata Costa Estética"
```

## Passo 2: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"** (botão verde)
3. Preencha:
   - **Repository name**: `renata-costa-estetica`
   - **Description**: `Site profissional de estética avançada`
   - **Visibility**: Public ou Private (sua escolha)
   - ❌ **NÃO** marque "Initialize this repository with a README"
4. Clique em **"Create repository"**

## Passo 3: Conectar e Enviar

Após criar o repositório, o GitHub mostrará comandos. Use estes:

```bash
# Adicionar o repositório remoto (substitua SEU-USUARIO pelo seu username)
git remote add origin https://github.com/SEU-USUARIO/renata-costa-estetica.git

# Renomear branch para main (padrão moderno)
git branch -M main

# Enviar para o GitHub
git push -u origin main
```

## Passo 4: Deploy Automático na Vercel

### Opção A: Via GitHub (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Add New Project"**
3. Clique em **"Import Git Repository"**
4. Selecione seu repositório `renata-costa-estetica`
5. Configure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Clique em **"Deploy"**

✅ **Vantagem**: Cada push no GitHub fará deploy automático!

### Opção B: Via CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## 📋 Checklist Pré-Deploy

- [x] Build testado (`npm run build`)
- [x] Imagem `renata.jpg` na pasta `public/`
- [x] Arquivo `.gitignore` configurado
- [x] Arquivo `vercel.json` configurado
- [x] Design premium implementado
- [x] Responsividade testada

## 🎨 Melhorias Implementadas

### Design Premium
- ✨ Gradientes dourados elegantes
- 💎 Efeitos de brilho (glow) dourados
- 🎭 Animações suaves (fade-in, shimmer, pulse)
- 🪟 Glassmorphism moderno
- 🎯 Bordas douradas animadas
- ⭐ Divisórias douradas decorativas
- 🎪 Hover effects elegantes
- 📱 Design totalmente responsivo

### Elementos Visuais
- Logo com ícone dourado
- Stats visuais com ícones
- Cards com bordas animadas
- Badges elegantes
- Estrelas de avaliação
- Efeitos de shimmer
- Seleção de texto dourada

## 🔄 Atualizações Futuras

Para atualizar o site:

```bash
# Fazer alterações no código
# Depois:

git add .
git commit -m "✨ Descrição da atualização"
git push

# Deploy automático na Vercel! 🚀
```

## 🆘 Problemas Comuns

### Erro ao fazer push
```bash
# Se der erro de autenticação, configure:
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### Repositório já existe
```bash
# Se já tiver um repositório, use:
git remote set-url origin https://github.com/SEU-USUARIO/renata-costa-estetica.git
```

## 📞 Suporte

- GitHub Docs: https://docs.github.com
- Vercel Docs: https://vercel.com/docs
- Git Docs: https://git-scm.com/doc
