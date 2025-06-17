// Importando o Firebase Admin SDK
const admin = require('firebase-admin');

// Importando o arquivo JSON com as credenciais
const serviceAccount = require('./config/serviceAccountKey.json');

// Inicializando o Firebase com as credenciais da conta de serviço
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<seu-projeto-id>.firebaseio.com', // Substitua pelo seu URL do Firestore, que pode ser encontrado no Console do Firebase
});

// Referência ao Firestore
const db = admin.firestore();

// Exemplo de como adicionar dados ao Firestore
async function addData() {
  try {
    const docRef = await db.collection('contatos').add({
      name: 'João Silva',
      email: 'joao@example.com',
      message: 'Mensagem de teste',
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log('Documento adicionado com sucesso!', docRef.id);
  } catch (error) {
    console.error('Erro ao adicionar documento:', error);
  }
}

// Chama a função para adicionar dados
addData();
