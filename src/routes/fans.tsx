import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fans')({
  component: RouteComponent,
})
function RouteComponent() {
  return (
    <div className="h-[calc(100dvh-68px)] bg-linear-to-t from-slate-900 via-slate-800 to-slate-900">
      Fans
    </div>
  )
}
