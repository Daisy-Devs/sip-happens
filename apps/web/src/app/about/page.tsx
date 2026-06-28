import AboutHero from '@/features/about/components/AboutHero'
import CTASection from '@/features/about/components/CTASection'
import SourcingPhilosophy from '@/features/about/components/SourcingPhilosophy'
import TeamSection from '@/features/about/components/TeamSection'
import TimelineSection from '@/features/about/components/TimelineSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <AboutHero/>
      <TimelineSection/>
      <SourcingPhilosophy/>
      <TeamSection/>
      <CTASection/>
    </div>
  )
}
