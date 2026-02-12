# 🚀 Guía de Deployment en Vercel para Alexa Moda

## ✅ Checklist Antes de Desplegar

### 1. **Verificar Archivos Corregidos**
- [x] `vercel.json` - Configurado con rewrites correctos
- [x] Archivos de páginas en PascalCase: `Vestidos.tsx`, `Carrito.tsx`
- [x] Imports en `App.tsx` coinciden con nombres de archivos
- [x] Comando build funciona: `npm run build`
- [x] Variables de entorno en `.env` (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)

### 2. **Configurar Variables de Entorno en Vercel**

1. Ve a [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Selecciona tu proyecto **alexa-moda-chic**
3. Haz click en **Settings** (Configuración)
4. En el menú lateral, ve a **Environment Variables**
5. Añade estas dos variables:

| Variable | Valor |
|----------|-------|
| `VITE_SUPABASE_URL` | `https://srizlihvljdfzyaqfehw.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyaXpsaWh2bGpkZnp5YXFmZWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3NTk0OTMsImV4cCI6MjA4NjMzNTQ5M30.fpETMwbjbGX0lMjip_KVoDjUxbRNEFOLbb5-vnmOt5k` |

⚠️ **IMPORTANTE**: Las variables deben empezar con `VITE_` porque usas Vite.

### 3. **Hacer Push a GitHub**

```bash
git add .
git commit -m "Preparado para deploy en Vercel: errores de importes y env variables corregidos"
git push origin main
```

Vercel automáticamente detectará los cambios en `main` y hará el build.

### 4. **Rutas que Funcionarán Después del Deploy**
- `https://tudominio.com/` → Página principal
- `https://tudominio.com/vestidos` → Catálogo de vestidos
- `https://tudominio.com/producto/[id]` → Detalle de producto
- `https://tudominio.com/carrito` → Carrito de compra
- `https://tudominio.com/admin` → Panel de admin

### 5. **Si Aún Hay Problemas 404 en Vercel**

Verifica que en **Vercel > Project Settings** la configuración sea:
- **Framework**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

El archivo `vercel.json` se encargará del resto.

---

## 📋 Cambios Realizados

1. ✅ `vercel.json` - Actualizado con `destination: "/index.html"`
2. ✅ Renombrados archivos: `vestidos.tsx` → `Vestidos.tsx`, `carrito.tsx` → `Carrito.tsx`
3. ✅ Imports en `App.tsx` - Actualizados para coincidir con nuevos nombres
4. ✅ `npm run build` ejecutado sin errores
5. ✅ `.env` - Variables de Supabase listas

---

## 🔧 LocalHost para Testing

Si quieres seguir probando en tu máquina:

```bash
npm run dev
# Se abre en http://localhost:8082 (o el puerto disponible siguiente)
```

---

## ✨ Una Vez Desplegado

Entrar en Supabase y verificar:
1. Storage bucket `imagenes-vestidos` con acceso público
2. Tabla `vestidos` con datos de prueba
3. Políticas RLS permiten lectura pública

El WhatsApp funciona con el número: **34664123153** (actualiza en ProductDetail.tsx si es diferente).

---

**¿Listo para hacer deploy? 🚀**
