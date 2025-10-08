"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToNewsletter } from "@/lib/firebase/subscriber-service"

export function Subscribe() {
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return
    
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })
    
    try {
      await subscribeToNewsletter(email)
      
      setSubmitStatus({
        type: 'success',
        message: 'Successfully subscribed! Thank you for joining our newsletter.'
      })
      
      // Reset form
      setEmail("")
      setConsent(false)
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-fenopharm-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-light text-fenopharm-light mb-4 tracking-tight">SUBSCRIBE FORM</h2>
          <p className="text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Stay updated with our latest genetics, research developments, and industry insights.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white disabled:opacity-50"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting || !consent}
                className="bg-fenopharm-red hover:bg-fenopharm-red/90 text-white font-light px-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
            
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="privacy-consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                disabled={isSubmitting}
                className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10 text-fenopharm-red focus:ring-fenopharm-red focus:ring-offset-0 disabled:opacity-50"
              />
              <label htmlFor="privacy-consent" className="text-xs text-white/80 font-light leading-relaxed">
                I agree to receive newsletters and promotional emails. My data will be processed according to the Privacy Policy. 
                IP address is collected for spam prevention only.
              </label>
            </div>
          </form>
          
          {submitStatus.type && (
            <div
              className={`mt-4 p-3 rounded-md text-center ${
                submitStatus.type === 'success'
                  ? 'bg-green-500/20 text-green-100 border border-green-500/30'
                  : 'bg-red-500/20 text-red-100 border border-red-500/30'
              }`}
            >
              <p className="text-sm font-light">{submitStatus.message}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
