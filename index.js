import ProductoFisico from "./models/ProductoFisico.js"
import ProductoDigital from "./models/ProductoDigital.js"
import Cliente from "./models/Cliente.js"
import Administrador from "./models/Administrador.js"
import TiendaService from "./services/TiendaService.js"

const tienda = new TiendaService()

const discoFreno = new ProductoFisico(
1,
"Disco de Freno Toyota",
180000,
"Disco de freno de alto rendimiento",
10,
4,
"30x30x5"
)

const manualFrenos = new ProductoDigital(
2,
"Manual Técnico de Frenos",
20000,
"Manual de instalación",
100,
"PDF",
"15MB"
)

const cliente = new Cliente(
1,
"Carlos Perez",
"carlos@mail.com",
"12345"
)

const admin = new Administrador(
2,
"Administrador",
"admin@hmbreaks.com",
"admin123"
)

tienda.agregarProducto(discoFreno)
tienda.agregarProducto(manualFrenos)

tienda.listarProductos()

cliente.agregarCompra(discoFreno)

admin.gestionarInventario(discoFreno,5)

manualFrenos.descargarProducto()