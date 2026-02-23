import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { authGuard } from './core/guards/auth-guard';
import { adminGuard } from './core/guards/admin-guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () =>
            import('./features/auth/login/login')
                .then(m => m.Login)
    },
    {
        path: '',
        component: MainLayout,
        canActivate: [authGuard], // ← valida JWT
        children: [

            {
                path: '',
                redirectTo: 'productos',
                pathMatch: 'full'
            },

            {
                path: 'productos',
                loadComponent: () =>
                    import('./features/productos/productos-list/productos-list')
                        .then(m => m.ProductosList)
            },

            {
                path: 'producto/:id',
                loadComponent: () =>
                    import('./features/productos/producto-detalle/producto-detalle')
                        .then(m => m.ProductoDetalle)
            },

            {
                path: 'carrito',
                loadComponent: () =>
                    import('./features/carrito/carrito-page/carrito-page')
                        .then(m => m.CarritoPage)
            },

            {
                path: 'pedidos',
                loadComponent: () =>
                    import('./features/pedidos/pedidos-list/pedidos-list')
                        .then(m => m.PedidosList)
            },

            // 🔒 ADMIN
            {
                path: 'admin',
                canActivate: [adminGuard], // ← valida rol
                children: [
                    {
                        path: '',
                        loadComponent: () =>
                            import('./features/admin/dashboard-admin/dashboard-admin')
                                .then(m => m.DashboardAdmin)
                    },
                    {
                        path: 'productos',
                        loadComponent: () =>
                            import('./features/admin/productos-admin/productos-admin')
                                .then(m => m.ProductosAdmin)
                    },
                    {
                        path: 'usuarios',
                        loadComponent: () =>
                            import('./features/admin/usuarios-admin/usuarios-admin')
                                .then(m => m.UsuariosAdmin)
                    }
                ]
            },
            {
                path: 'precalificador',
                canActivate: [adminGuard], // ← valida rol
                children: [
                    {
                        path: '',
                        loadComponent: () =>
                            import('./features/precalificador/precafundacion/precafundacion')
                                .then(m => m.Precafundacion)
                    },
                    {
                        path: 'historial',
                        loadComponent: () =>
                            import('./features/precalificador/historial/historial')
                                .then(m => m.Historial)
                    }
                ]
            }

        ]
    },
];