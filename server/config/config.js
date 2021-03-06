//=========================
// Puerto
//=========================
process.env.PORT = process.env.PORT || 3000;


//=========================
// Entorno
//=========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//=========================
// Venvimiento del Token
//=========================
// 60 nsegundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;



//=========================
// SEED  de autenticacion
//=========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';



//=========================
// Base de datos
//=========================

let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://cafe-user:cPYzB19ycG4IsIif@cluster0-1b12r.mongodb.net/cafe';
}

process.env.URLDB = urlDB;