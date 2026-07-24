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
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton render={<Link to="/" />} isActive={location.pathname === "/"}>
                  <span>ホーム</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>ルール</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/rules/experience" />}
                  isActive={location.pathname === "/rules/experience"}
                >
                  <span>体験</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/rules/basics" />}
                  isActive={location.pathname === "/rules/basics"}
                >
                  <span>基本原則</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/rules/color" />}
                  isActive={location.pathname === "/rules/color"}
                >
                  <span>配色</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/rules/shape" />}
                  isActive={location.pathname === "/rules/shape"}
                >
                  <span>形</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/rules/spacing" />}
                  isActive={location.pathname === "/rules/spacing"}
                >
                  <span>余白</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/rules/typography" />}
                  isActive={location.pathname === "/rules/typography"}
                >
                  <span>文字</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/rules/images" />}
                  isActive={location.pathname === "/rules/images"}
                >
                  <span>画像</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/rules/accessibility" />}
                  isActive={location.pathname === "/rules/accessibility"}
                >
                  <span>アクセシビリティ</span>
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
