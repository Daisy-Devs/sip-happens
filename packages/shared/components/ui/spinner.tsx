import { cn } from "@sip-happens/shared/lib/utils"
import { Loader2Icon } from "lucide-react"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon data-slot="spinner" role="status" aria-label="Loading" className={cn("size-4 text-on-primary animate-spin", className)} {...props} />
  )
}

export { Spinner }
