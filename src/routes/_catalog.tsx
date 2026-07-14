import { Outlet, createFileRoute } from "@tanstack/react-router"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { CatalogSidebar } from "@/components/catalog/catalog-sidebar"

export const Route = createFileRoute("/_catalog")({ component: CatalogShell })

/**
 * カタログ共通シェル。shadcn の Sidebar でナビゲーションを提供する
 */
function CatalogShell() {
  return (
    <SidebarProvider className="dark bg-background text-foreground">
      <CatalogSidebar />
      <SidebarInset className="min-w-0">
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
