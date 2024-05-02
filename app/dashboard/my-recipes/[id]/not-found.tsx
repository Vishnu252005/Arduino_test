import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"

export default function RecipeNotFound() {
  return (
    <div className="container grid ">
      <PageHeader>
        <PageHeaderHeading>Oops!</PageHeaderHeading>
        <PageHeaderDescription>
        Looks like our tech guru misplaced the blueprint for our latest Arduino invention! 
        While we search for it, let's enjoy a virtual byte-sized cookie and embark on another 
        electrifying adventure in the world of Arduino! ⚡✨
        </PageHeaderDescription>
        <PageActions>
          <Link href="/">
            <Button>Go back Home</Button>
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  )
}
