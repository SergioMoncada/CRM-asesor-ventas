
# Contexto

Vamos a crear un CRM para el trabajo de mi madre, actualmente ella trabaja en movistar y necesita registrar los clientes que atiende y los que les logra vender algun servicio, a estos clientes se les debe ingresar registrar unos datos para registrarlos y para venderles algun servicio, al final de el mes mi madre debe entregar un reporte de todos los clientes que atendio ese mes en un excel o pdf.

# Que usaremos

Vamos usar Next.js 14 + React 18 + TypeScript para todo el tema de frontend
Usaremos Next.js API Routes para todo el tema de backend
Usaremos Supabase y su autenticación ( Correo y contraseña) para el login y toda la estructura de datos a ingresas de cada cliente
De hosting usaremos vercel para desplegar 
Para poder generar los reportes mensuales jsPDF + XLSX (SheetJS)
Testing jest + Playwright
CI/CD Github Actions    



🏗️ Cómo va a funcionar
Usuarios y permisos

Tu mamá (admin): ve todos los clientes, todos los reportes, y la auditoría completa
Compañeros (vendedores): cada uno ve solo sus propios clientes — privacidad garantizada por reglas de seguridad en la base de datos (RLS), no solo por la interfaz

Gestión de clientes
Cada cliente tiene: nombre, documento, teléfono, email, dirección, tipo de plan (teléfono/internet/celular/combo), estado (prospecto → en confirmación → con servicio / cancelado), y notas.
Reportes
Por mes: cuántos clientes atendió, cuántos se convirtieron en venta, comparación con el mes anterior, todo exportable a Excel o PDF con un clic.
Auditoría
Cada cambio en un cliente queda registrado: quién lo hizo, cuándo, y qué campo cambió — esto es clave porque manejan datos sensibles (documentos, teléfonos) y hay que cumplir con la ley de protección de datos colombiana (LGPD/Habeas Data).
Dispositivos
Funciona igual de bien en computador que en celular (responsive).