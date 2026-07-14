import { SidebarTrigger } from "@/components/ui/sidebar"

type Props = {
  title: string
  lead: string
}

/**
 * 原則ページ共通のタイトルとリード文
 */
export function PrinciplePageHeader(props: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <h1 className="text-3xl font-bold tracking-tight">{props.title}</h1>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{props.lead}</p>
    </div>
  )
}
