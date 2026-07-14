import { Link, useLocation } from "@tanstack/react-router"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { catalogCategories } from "@/components/catalog/component-doc"
import { componentDocs } from "@/components/catalog/component-docs"

/**
 * カタログ全体のナビゲーション。デザイン原則とカテゴリ別のコンポーネント一覧
 */
export function CatalogSidebar() {
  const location = useLocation()

  return (
    <Sidebar className="group-data-[side=left]:border-r-0">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>デザインシステム</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton render={<Link to="/" />} isActive={location.pathname === "/"}>
                  <span>コンセプト</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/principles/basics" />}
                  isActive={location.pathname === "/principles/basics"}
                >
                  <span>基本原則</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/principles/color" />}
                  isActive={location.pathname === "/principles/color"}
                >
                  <span>配色</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/principles/shape" />}
                  isActive={location.pathname === "/principles/shape"}
                >
                  <span>形</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/principles/spacing" />}
                  isActive={location.pathname === "/principles/spacing"}
                >
                  <span>余白</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/principles/typography" />}
                  isActive={location.pathname === "/principles/typography"}
                >
                  <span>文字</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {catalogCategories.map((category) => (
          <SidebarGroup key={category}>
            <SidebarGroupLabel>{category}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {componentDocs
                  .filter((doc) => doc.category === category)
                  .map((doc) => (
                    <SidebarMenuItem key={doc.name}>
                      <SidebarMenuButton
                        render={<Link to="/components/$name" params={{ name: doc.name }} />}
                        isActive={location.pathname === `/components/${doc.name}`}
                      >
                        <span>{doc.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
