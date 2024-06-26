import MaxWidthWrapper from '@/components/max-width-wrapper'
import Steps from '@/components/steps'
import { ReactNode } from 'react'

export default function ConfigureLayout({ children }: { children: ReactNode }) {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  )
}
