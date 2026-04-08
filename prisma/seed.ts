import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('iniciando seed');
  const user = await prisma.user.upsert({
    where: { email: 'henri@example.com' },
    update: {},
    create: {
      email: 'henri@example.com',
      username: 'henri_dev',
      password: 'senha123',
    },
  });
  console.log('✅ Seed executada com sucesso!');
  console.log('👤 Usuário criado/encontrado:', user);
}

main()
  .catch((e) => {
    console.error('erro no seed:', e);
    process.exit(1); // Se der erro, para a execução
  })
  .finally(async () => {
    await prisma.$disconnect(); // SEMPRE fecha a conexão com o banco
  });
